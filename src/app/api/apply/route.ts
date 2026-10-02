import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { jobTitle, name, email, mobile, experience, skills, coverNote, fileName, fileType, fileData } = body;

    const appsScriptUrl = process.env.JOB_APPS_SCRIPT_URL;
    const formUrl = process.env.JOB_GOOGLE_FORM_URL;

    const entries = {
      jobTitle: process.env.JOB_GOOGLE_ENTRY_JOB_TITLE,
      name: process.env.JOB_GOOGLE_ENTRY_NAME,
      email: process.env.JOB_GOOGLE_ENTRY_EMAIL,
      mobile: process.env.JOB_GOOGLE_ENTRY_MOBILE,
      experience: process.env.JOB_GOOGLE_ENTRY_EXPERIENCE,
      skills: process.env.JOB_GOOGLE_ENTRY_SKILLS,
      resumeLink: process.env.JOB_GOOGLE_ENTRY_RESUME_LINK,
      coverNote: process.env.JOB_GOOGLE_ENTRY_COVER_NOTE,
    };

    // Asynchronous background task worker (non-blocking)
    const runBackgroundTasks = async () => {
      // 1. Save PDF to Google Drive & Append Row to Google Sheet via Apps Script
      if (appsScriptUrl) {
        try {
          await fetch(appsScriptUrl, {
            method: "POST",
            redirect: "follow",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({
              jobTitle,
              name,
              email,
              mobile,
              experience,
              skills,
              coverNote,
              fileName,
              fileType,
              fileData,
            }),
          });
        } catch (err) {
          console.warn("Background Apps Script submission warning:", err);
        }
      }

      // 2. Submit to Google Form (if configured)
      if (formUrl) {
        try {
          const params = new URLSearchParams();
          if (entries.jobTitle) params.append(entries.jobTitle, jobTitle || "");
          if (entries.name) params.append(entries.name, name || "");
          if (entries.email) params.append(entries.email, email || "");
          if (entries.mobile && mobile) params.append(entries.mobile, mobile);
          if (entries.experience && experience) params.append(entries.experience, experience);
          if (entries.skills && skills) params.append(entries.skills, skills);

          if (entries.coverNote) {
            const fileTag = fileName ? `[Attached File: ${fileName}]` : "";
            const noteText = `${fileTag}${coverNote ? "\n\nNote: " + coverNote : ""}`.trim();
            params.append(entries.coverNote, noteText);
          }

          await fetch(formUrl, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString(),
          });
        } catch (err) {
          console.warn("Background Google Form submission warning:", err);
        }
      }
    };

    // Fire background tasks asynchronously without awaiting
    runBackgroundTasks();

    // Respond INSTANTLY (< 200ms) to the user's browser!
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting job application:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process job application." },
      { status: 500 }
    );
  }
}
