import "./globals.css";

export const metadata = {
  title: "Tungmo — Good Coffee. Slow Moments.",
  description:
    "A cozy cafe serving handcrafted coffee, delicious treats, and slow moments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}