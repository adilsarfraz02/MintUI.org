import Sidebar from "../sections/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex" lang="en">
      <Sidebar />
      <div> {children}</div>
    </div>
  );
}
