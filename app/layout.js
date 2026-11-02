import "./globals.css";
import { AppProvider } from "../Context/AppContext";

export const metadata = {
  title: "CampusConnect",
  description: "Smart College Management Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}