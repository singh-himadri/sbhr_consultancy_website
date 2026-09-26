import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { jobTitle, name, email, coverNote, fileName, fileType, fileData } = body;

    let generatedFileUrl = body.resumeUrl || "";

    const appsScriptUrl = process.env.JOB_APPS_SCRIPT_URL;

    // 1. Upload resume to Google Drive via Apps Script if configured
    if (appsScriptUrl) {
      try {
        const appsScriptRes = await fetch(appsScriptUrl, {
          method: "POST",
          redirect: "follow",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({
            jobTitle,
            name,
            email,
            coverNote,
            fileName,
            fileType,
            fileData,
          }),
        });

        const responseText = await appsScriptRes.text();
        if (responseText && responseText.trim().startsWith("{")) {
          const scriptResult = JSON.parse(responseText);
          if (scriptResult && scriptResult.fileUrl) {
            generatedFileUrl = scriptResult.fileUrl;
          }
        } else if (responseText.includes("<!DOCTYPE") || responseText.includes("<html")) {
          console.warn(
            "Apps Script returned HTML. Please ensure Web App deployment permissions are set to 'Who has access: Anyone'."
          );
        }
      } catch (scriptErr) {
        console.warn("Apps Script upload notification:", scriptErr);
      }
    }

    // 2. Also submit to Google Form if configured
    const formUrl = process.env.JOB_GOOGLE_FORM_URL;
    const entries = {
      jobTitle: process.env.JOB_GOOGLE_ENTRY_JOB_TITLE,
      name: process.env.JOB_GOOGLE_ENTRY_NAME,
      email: process.env.JOB_GOOGLE_ENTRY_EMAIL,
      resumeLink: process.env.JOB_GOOGLE_ENTRY_RESUME_LINK,
      coverNote: process.env.JOB_GOOGLE_ENTRY_COVER_NOTE,
    };

    if (formUrl) {
      const params = new URLSearchParams();
      if (entries.jobTitle) params.append(entries.jobTitle, jobTitle || "");
      if (entries.name) params.append(entries.name, name || "");
      if (entries.email) params.append(entries.email, email || "");

      if (entries.resumeLink) {
        params.append(entries.resumeLink, generatedFileUrl || "");
      }

      let finalCoverNote = coverNote || "";
      if (generatedFileUrl && !entries.resumeLink) {
        finalCoverNote = `[Resume: ${generatedFileUrl}]${finalCoverNote ? "\n\nNote: " + finalCoverNote : ""}`;
      }

      if (entries.coverNote) {
        params.append(entries.coverNote, finalCoverNote);
      }

      await fetch(formUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
    }

    return NextResponse.json({ success: true, fileUrl: generatedFileUrl });
  } catch (error) {
    console.error("Error submitting job application:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process job application." },
      { status: 500 }
    );
  }
}
