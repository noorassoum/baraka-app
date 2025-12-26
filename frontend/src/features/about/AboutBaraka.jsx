import { useNavigate } from "react-router-dom";
import PageWrapper from "../../components/layout/PageWrapper";
import "./about.css";

import foodBoxImg from "../../assets/foodbox.png";
import barakaLogo from "../../assets/barakalogo.png";

import { Percent, Trash2, Users } from "lucide-react";

export default function AboutBaraka() {
  const navigate = useNavigate();

  return (
    <>
      {/* MAIN CONTENT (CONSTRAINED) */}
      <PageWrapper>
        <div className="about-page bg-neutral-100">

          {/* Header */}
          <div className="about-header">
            <button
              className="back-btn text-neutral-900"
              onClick={() => navigate(-1)}
            >
              ←
            </button>

            <h1 className="font-alexandria text-titleLarge font-semibold text-neutral-900">
              About Baraka
            </h1>

            <div className="menu-placeholder" />
          </div>

          {/* Hero */}
          <div className="about-hero">
            <img src={foodBoxImg} alt="Baraka food box" />
            <div className="hero-fade" />
          </div>

          {/* Intro */}
          <section className="about-section">
            <h2 className="font-alexandria text-displaySmall font-bold text-neutral-900 leading-tight">
              Discover Meals.<br />
              Reduce Waste.<br />
              Create Baraka
            </h2>

            <p className="text-bodyMedium text-neutral-700">
              Baraka is a simple way to reduce food waste and enjoy high-quality
              surplus meals at great prices.
            </p>
          </section>

          {/* Mission */}
          <section className="about-section">
            <h3 className="font-alexandria text-headlineSmall font-semibold text-neutral-900">
              Our Mission
            </h3>

            <p className="text-bodyMedium text-neutral-700">
              Every day, great food goes to waste. Baraka connects local restaurants
              and home kitchens with people who want affordable meals — making good
              food accessible and reducing unnecessary waste.
            </p>
          </section>

          {/* Why Choose */}
          <section className="about-section">
            <h3 className="font-alexandria text-headlineSmall font-semibold text-neutral-900">
              Why Choose Baraka?
            </h3>

            <div className="why-list">
              <div className="why-card bg-white shadow-xs">
                <Percent size={22} strokeWidth={2} className="text-teal-500" />
                <p className="text-bodyMedium text-neutral-700">
                  Get high-quality food at lower prices
                </p>
              </div>

              <div className="why-card bg-white shadow-xs">
                <Trash2 size={22} strokeWidth={2} className="text-orange-500" />
                <p className="text-bodyMedium text-neutral-700">
                  Save food that would otherwise be thrown away
                </p>
              </div>

              <div className="why-card bg-white shadow-xs">
                <Users size={22} strokeWidth={2} className="text-teal-500" />
                <p className="text-bodyMedium text-neutral-700">
                  Help local restaurants and home chefs
                </p>
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="about-section">
            <h3 className="font-alexandria text-headlineSmall font-semibold text-neutral-900">
              Our Story
            </h3>

            <p className="text-bodyMedium text-neutral-700">
              Baraka was created to solve a simple problem: too much good food is
              wasted every day. We believe in a world where every meal has value.
              By connecting kitchens with hungry people, we turn wasted food into
              shared blessings.
            </p>
          </section>

          {/* CTA */}
          <section className="about-section cta">
            <h3 className="font-alexandria text-headlineSmall font-semibold text-neutral-900">
              Ready to Explore?
            </h3>

            <button
              className="w-full mt-2 py-3 rounded-xl font-semibold bg-teal-500 hover:bg-teal-600 text-white"
              onClick={() => navigate("/boxes")}
            >
              Find Boxes
            </button>
          </section>

        </div>
      </PageWrapper>

      {/* FULL-WIDTH FOOTER */}
      <footer className="about-footer bg-neutral-200 border-t border-neutral-300">
        <div className="footer-inner">
          <img src={barakaLogo} alt="Baraka Logo" className="footer-logo" />

          <p className="text-bodySmall text-neutral-700">
            Baraka helps you discover surplus meals and reduce food waste —
            one box at a time.
          </p>

          <div className="footer-links text-labelMedium text-neutral-700">
            <span>About</span>
            <span>Contact</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>

          <small className="text-labelSmall text-neutral-500">
            © 2025 Baraka. All rights reserved.
          </small>
        </div>
      </footer>
    </>
  );
}
