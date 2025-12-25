import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BarakaLogo from "../../../assets/baraka-logo.png";

// Header icons
import NotificationIcon from "../../../assets/icons/notification.svg";
import MenuIcon from "../../../assets/icons/menu.svg";

// Stat card icons
import BoxStatIcon from "../../../assets/icons/box-stat.svg";
import ReservationStatIcon from "../../../assets/icons/reservation-stat.svg";
import PercentageStatIcon from "../../../assets/icons/percentage-stat.svg";

// Action card icons
import BoxActionIcon from "../../../assets/icons/box-action.svg";
import ReservationActionIcon from "../../../assets/icons/reservation-action.svg";
import AddBoxActionIcon from "../../../assets/icons/add-box-action.svg";

export default function VendorDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F8F7] flex justify-center relative">
      <div className="w-full max-w-[402px] px-5">

        {/* ================= HEADER ================= */}
        <header className="flex items-center justify-between py-4">
          <h1 className="text-sm font-medium text-[#5A5B5B]">
            Vendor&apos;s Dashboard
          </h1>

          <div className="flex items-center gap-3">
            <img
              src={NotificationIcon}
              alt="Notifications"
              className="w-[29px] h-[24px] cursor-pointer"
              onClick={() => navigate("/vendor/notifications")}
            />

            <img
              src={MenuIcon}
              alt="Menu"
              className="w-[36px] h-[26px] cursor-pointer"
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

          <div className="flex gap-1.5">
            <StatCard
              icon={BoxStatIcon}
              value="0"
              title="Boxes Posted Today"
              subtitle="Boxes you added today"
              subtitleWidth="w-[70px]"
            />

            <StatCard
              icon={ReservationStatIcon}
              value="0"
              title="Reservations Today"
              subtitle="New reservations made today"
              subtitleWidth="w-[70px]"
            />

            <StatCard
              icon={PercentageStatIcon}
              value="0"
              title="Pickup Rate"
              subtitle="Percentage of boxes successfully picked up"
              subtitleWidth="w-[76px]"
            />
          </div>
        </section>

        {/* ================= ACTION CARDS ================= */}
        <section className="mt-8 flex flex-col gap-3 items-center">
          <ActionCard
            icon={BoxActionIcon}
            title="My Boxes"
            subtitle="View and manage all your posted boxes"
            onClick={() => navigate("/vendor/boxes")}
          />

          <ActionCard
            icon={ReservationActionIcon}
            title="Reservations"
            subtitle="Track all reservations for your boxes"
            onClick={() => navigate("/vendor/reservations")}
          />

          <ActionCard
            icon={AddBoxActionIcon}
            title="Add New Box"
            subtitle="Post a new surprise meal box"
            smallIcon
            onClick={() => navigate("/vendor/add-box")}
          />
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="mt-8 w-full h-[340px] bg-[#EDEEEE80] flex flex-col items-center text-center px-5 py-6">
          <img src={BarakaLogo} alt="Baraka logo" className="w-[61px] h-[61px]" />

          <p className="mt-4 max-w-[338px] text-xs leading-[18px] text-[#818282]">
            Baraka helps you discover surplus meals and reduce food waste — one box at a time.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4">
            {["About", "Contact", "Privacy", "Terms"].map((item) => (
              <button
                key={item}
                className="text-[14px] leading-[22px] font-normal text-[#5A5B5B]"
              >
                {item}
              </button>
            ))}
          </div>

          {/* FIXED divider for iPhone 16 Pro */}
          <div className="mt-6 w-full max-w-[360px] border-t-[0.3px] border-[#DCDDDD]" />

          <p className="mt-4 text-[12px] leading-[18px] text-[#A8A9A9]">
            © 2025 Baraka. All rights reserved.
          </p>
        </footer>

        <div className="h-8" />
      </div>

      {/* ================= MENU PANEL (TEMP) ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-[260px] bg-white shadow-lg p-5">
            <p className="font-semibold mb-4">Menu</p>

            <button
              className="text-sm text-[#1A1A1A]"
              onClick={() => setIsMenuOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ icon, value, title, subtitle, subtitleWidth }) {
  return (
    <div className="w-[116px] h-[108px] rounded-[20px] border border-[#EDEEEE] bg-white px-5 py-[9px] shadow-[0px_2px_2px_0px_#0000000D]">
      <div className="flex items-center gap-[4px]">
        <img src={icon} alt="" className="w-[20px] h-[20px]" />
        <span className="text-[10px] font-medium text-[#1A1A1A]">
          {value}
        </span>
      </div>

      <div className="mt-[2px]">
        <p className="text-[10px] font-medium text-[#1A1A1A] mb-[2px]">
          {title}
        </p>
        <p className={`${subtitleWidth} text-[8px] text-[#5A5B5B]`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function ActionCard({ icon, title, subtitle, onClick, smallIcon = false }) {
  return (
    <button
      onClick={onClick}
      className="
        w-[318px] h-[104px]
        rounded-[20px]
        border border-[#EDEEEE]
        bg-white
        px-5
        flex items-center
        shadow-[0px_2px_4px_0px_#0000000F]
        transition-all duration-300 ease-out
        active:scale-[0.98]
      "
    >
      {/* ICON COLUMN */}
      <div className="w-[48px] h-[51px] flex items-center justify-center shrink-0">
        <img
          src={icon}
          alt=""
          className={
            smallIcon
              ? "max-w-[35px] max-h-[35px]"
              : "max-w-[36px] max-h-[36px]"
          }
        />
      </div>

      {/* TEXT COLUMN */}
      <div className="ml-[16px] text-left">
        <p className="text-[14px] leading-[20px] font-semibold text-[#1A1A1A]">
          {title}
        </p>
        <p className="text-[10px] leading-[14px] font-light text-[#5A5B5B]">
          {subtitle}
        </p>
      </div>
    </button>
  );
}
