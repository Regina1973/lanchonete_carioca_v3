import Header from "../components/navigation/Header";
import Sidebar from "../components/navigation/Sidebar";
import Footer from "../components/common/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="app-layout">
      <Header />

      <div className="app-container">
        <Sidebar />

        <main className="app-content">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}