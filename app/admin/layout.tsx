import { SidebarProvider } from "@/app/admin/context/SidebarContext";
import { ThemeProvider } from "@/app/admin/context/ThemeContext";
import "./globals.css";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="dark:bg-gray-900">
      <ThemeProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </div>
  );
};

export default AdminLayout;
