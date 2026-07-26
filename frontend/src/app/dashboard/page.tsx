"use client";

import { ChangeEvent, useState } from "react";

export default function DashboardPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    setExtractedText("");
    setError("");

    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (file.type !== "application/pdf") {
      setError("Please select a PDF file.");
      event.target.value = "";
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  }

  async function extractPdfText() {
    if (!selectedFile) {
      setError("Please select a PDF first.");
      return;
    }

    try {
      setIsProcessing(true);
      setError("");
      setExtractedText("");

      const pdfjs = await import("pdfjs-dist");

      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();

      const fileData = await selectedFile.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: fileData }).promise;

      let fullText = "";

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const content = await page.getTextContent();

        const pageText = content.items
          .map((item) => ("str" in item ? item.str : ""))
          .join(" ");

        fullText += `${pageText}\n\n`;
      }

      setExtractedText(fullText.trim());
    } catch (err) {
      console.error(err);
      setError("Atlas could not read this PDF. Please try another file.");
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0B1026] to-[#1A1040] px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-xl font-semibold">
            Atlas
          </a>

          <button className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:bg-white/10">
            Sign Out
          </button>
        </nav>

        <section className="mt-16">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-300">
            Dashboard
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Build your semester plan
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/60">
            Upload a course syllabus and Atlas will identify the text inside the
            document.
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-sm">
            <h2 className="text-xl font-semibold">Upload your syllabus</h2>

            <p className="mt-2 text-sm text-white/50">
              Choose a PDF from your computer.
            </p>

            <label className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 px-6 py-14 text-center transition hover:border-blue-400/60 hover:bg-blue-500/[0.05]">
              <span className="text-lg font-medium">Choose a PDF</span>

              <span className="mt-2 text-sm text-white/50">
                Click here to browse your files
              </span>

              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {selectedFile && (
              <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
                <p className="text-sm text-blue-200">Selected file</p>

                <p className="mt-1 font-medium text-white">
                  {selectedFile.name}
                </p>

                <p className="mt-1 text-xs text-white/50">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            )}

            {selectedFile && (
              <button
                type="button"
                onClick={extractPdfText}
                disabled={isProcessing}
                className="mt-6 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isProcessing ? "Reading syllabus..." : "Process syllabus"}
              </button>
            )}

            {error && <p className="mt-4 text-sm text-red-300">{error}</p>}

            {extractedText && (
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
                <h3 className="text-lg font-semibold">
                  Extracted syllabus text
                </h3>

                <pre className="mt-4 max-h-[400px] overflow-auto whitespace-pre-wrap text-sm leading-6 text-white/60">
                  {extractedText}
                </pre>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}