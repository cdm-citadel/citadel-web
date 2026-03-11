import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Icons",
  robots: { index: false, follow: false },
};

const ICONS = ["email", "globe", "linkedin", "phone"];

export default function EmailIconsPage() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: 600 }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Email Signature Icons</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "0.5rem 1rem", borderBottom: "1px solid #ddd" }}>Preview</th>
            <th style={{ textAlign: "left", padding: "0.5rem 1rem", borderBottom: "1px solid #ddd" }}>File</th>
            <th style={{ textAlign: "left", padding: "0.5rem 1rem", borderBottom: "1px solid #ddd" }}>Direct URL</th>
          </tr>
        </thead>
        <tbody>
          {ICONS.map((name) => {
            const url = `https://citadeldigitalsignage.com/email-icons/${name}.svg`;
            return (
              <tr key={name}>
                <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid #eee" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/email-icons/${name}.svg`} alt={name} width={24} height={24} />
                </td>
                <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid #eee" }}>{name}.svg</td>
                <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid #eee" }}>
                  <a href={url} style={{ color: "#2563eb" }}>{url}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
