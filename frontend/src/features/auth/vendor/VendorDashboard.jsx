import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Footer from "../../../components/layout/Footer";

import {
  Menu,
  Bell,
  Box,
  Percent,
  FileText,
  Package,
  CalendarCheck,
  Plus,
  LogOut,
  Globe,
  Phone,
  Instagram,
} from "lucide-react";

import {
  getMyBoxes,
  getVendorReservations,
} from "../../boxes/boxes.api";

/* ================= MAIN COMPONENT ================= */

export default function VendorDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stats, setStats] = useState({
    boxesToday: 0,
    reservationsToday: 0,
    pickupRate: 0,
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  /* ================= FETCH DASHBOARD DATA ================= */

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [boxes, reservations] = await Promise.all([
          getMyBoxes(),
          getVendorReservations(),
        ]);

        const today = new Date().toDateString();

        const boxesToday = boxes.filter(
          (b) => new Date(b.createdAt).toDateString() === today
        ).length;

        const reservationsToday = reservations.filter(
          (r) => new Date(r.createdAt).toDateString() === today
        ).length;

        const completed = reservations.filter(
          (r) => r.status === "completed"
        ).length;

        const pickupRate =
          reservations.length === 0
            ? 0
            : Math.round((completed / reservations.length) * 100);

        setStats({
          boxesToday,
          reservationsToday,
          pickupRate,
        });
      } catch (error) {
        console.error("Failed to load vendor dashboard stats", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F8F7] relative">
      {/* FULL WIDTH PAGE */}
      <div className="w-full px-5">

        {/* ================= HEADER ================= */}
        <header className="flex items-center justify-between py-4">
          {/* spacer to preserve layout */}
          <div />

          <div className="flex items-center gap-3">
            <Bell
              className="w-6 h-6 text-[#1A1A1A] cursor-pointer"
              onClick={() => navigate("/vendor/notifications")}
            />
            <Menu
              className="w-6 h-6 text-[#1A1A1A] cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>
        </header>

        {/* ================= WELCOME ================= */}
        <section className="mt-4">
          <h2 className="text-2xl font-semibold text-[#1A1A1A]">
            Welcome back!
          </h2>
          <p className="mt-1 max-w-[318px] text-xs leading-[18px] text-[#5A5B5B]">
            Manage your boxes and reservations easily.
          </p>
        </section>

        {/* ================= TODAY'S OVERVIEW ================= */}
        <section className="mt-6">
          <h3 className="mb-3 text-sm font-medium text-[#1A1A1A]">
            Today&apos;s Overview
          </h3>

          <div className="grid grid-cols-3 gap-1.5 w-full">
            <StatCard
              icon={Box}
              color="#2CB7AA"
              value={stats.boxesToday}
              title="Boxes Posted Today"
              subtitle="Boxes you added today"
              subtitleWidth="w-[70px]"
            />

            <StatCard
              icon={FileText}
              color="#FF6B35"
              value={stats.reservationsToday}
              title="Reservations Today"
              subtitle="New reservations made today"
              subtitleWidth="w-[70px]"
            />

            <StatCard
              icon={Percent}
              color="#2CB7AA"
              value={`${stats.pickupRate}%`}
              title="Pickup Rate"
              subtitle="Successfully picked up"
              subtitleWidth="w-[76px]"
            />
          </div>
        </section>

        {/* ================= ACTION CARDS ================= */}
        <section className="mt-8 flex flex-col gap-3">
          <ActionCard
            icon={Package}
            color="#2CB7AA"
            title="My Boxes"
            subtitle="View and manage all your posted boxes"
            onClick={() => navigate("/vendor/boxes")}
          />

          <ActionCard
            icon={CalendarCheck}
            color="#FF6B35"
            title="Reservations"
            subtitle="Track all reservations for your boxes"
            onClick={() => navigate("/vendor/reservations")}
          />

          <ActionCard
            icon={Plus}
            color="#2CB7AA"
            title="Add New Box"
            subtitle="Post a new surprise meal box"
            onClick={() => navigate("/vendor/add-box")}
          />
        </section>

        <Footer />
        <div className="h-8" />
      </div>

      {/* ================= SIDE MENU ================= */}
      <SideMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigate={navigate}
        isActive={isActive}
      />
    </div>
  );
}

/* ================= SIDE MENU ================= */

function SideMenu({ isMenuOpen, setIsMenuOpen, navigate, isActive }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className="absolute inset-0 bg-black/30"
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 h-full w-[260px] bg-[#F7F8F7] p-4
        transform transition-transform duration-300
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full justify-between">

          <div>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/vendor/profile");
              }}
              className="text-[14px] leading-[22px] text-[#1A1A1A]"
            >
              Restaurant Profile
            </button>

            <div className="my-3 w-[150px] border-t-[0.3px] border-[#00000078]" />

            {[
              { label: "Dashboard", path: "/vendor/dashboard" },
              { label: "My Boxes", path: "/vendor/boxes" },
              { label: "Reservations", path: "/vendor/reservations" },
              { label: "Notifications", path: "/vendor/notifications" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate(item.path);
                }}
                className={`block mb-3 text-[14px] leading-[22px] ${isActive(item.path)
                    ? "text-[#2CB7AA] font-medium"
                    : "text-[#1A1A1A]"
                  }`}
              >
                {item.label}
              </button>
            ))}

            <div className="my-4 w-[150px] border-t-[0.3px] border-[#00000078]" />

            <button
              onClick={() => navigate("/vendor/add-box")}
              className="w-[163px] h-[44px] bg-[#2CB7AA] rounded-[12px]
              text-white text-[14px] flex items-center justify-center"
            >
              Add Box
            </button>

            <button
              onClick={() => navigate("/login")}
              className="mt-3 w-[163px] h-[44px] bg-white rounded-[12px]
              flex items-center justify-center gap-2"
            >
              <LogOut className="w-5 h-5 text-[#E53935]" />
              <span className="text-[#E53935] text-[16px]">
                Log Out
              </span>
            </button>
          </div>

          <div className="mt-6 text-[12px] text-[#5A5B5B] space-y-3 px-2">
            <p className="font-medium">For more information</p>

            <InfoItem icon={Globe} text="Baraka.com" />
            <InfoItem icon={Phone} text="+961 81 256 495" />
            <InfoItem icon={Instagram} text="baraka_" />
          </div>

        </div>
      </div>
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function StatCard({ icon: Icon, color, value, title, subtitle, subtitleWidth }) {
  return (
    <div className="w-full h-[108px] rounded-[20px] border border-[#EDEEEE] bg-white px-5 py-[9px] shadow">
      <div className="flex items-center gap-[4px]">
        <Icon className="w-5 h-5" style={{ color }} />
        <span className="text-[10px] font-medium">{value}</span>
      </div>

      <div className="mt-[2px]">
        <p className="text-[10px] font-medium mb-[2px]">
          {title}
        </p>
        <p className={`${subtitleWidth} text-[8px] text-[#5A5B5B]`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function ActionCard({ icon: Icon, color, title, subtitle, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full h-[104px] rounded-[20px] border bg-white px-5
      flex items-center shadow active:scale-[0.98]"
    >
      <div className="w-[48px] h-[51px] flex items-center justify-center">
        <Icon className="w-8 h-8" style={{ color }} />
      </div>

      <div className="ml-[16px] text-left">
        <p className="text-[14px] font-semibold">
          {title}
        </p>
        <p className="text-[10px] text-[#5A5B5B]">
          {subtitle}
        </p>
      </div>
    </button>
  );
}

function InfoItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-[#2CB7AA]" />
      <span>{text}</span>
    </div>
  );
}
