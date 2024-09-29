import { NavBarDashboard } from "@/components/NavBarDashboard/NavBarDashboard"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  return (
    <section className="sticky top-0">
      <NavBarDashboard/>

        {children}
    </section>
  )
}