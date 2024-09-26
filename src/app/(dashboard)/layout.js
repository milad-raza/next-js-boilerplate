import AuthGuard from "@/components/ui/authGuard";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard Area",
};

export default function DashboardLayout({ children }) {
  return (
    // <AuthGuard>
      children
    // </AuthGuard>
  );
}