import AuthGuard from "@/components/authGuard/authGuard";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard Area",
};

export default function DashboardLayout({ children }) {
  return (
    <AuthGuard>
      <div>{children}</div>
    </AuthGuard>
  );
}