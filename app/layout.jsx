import "./globals.css";
export const metadata = {
  title: "Expedient",
  description: "Procurement & Commercial Transformation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
