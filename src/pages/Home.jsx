import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedForms from "../components/FeaturedForms";
import ResultsList from "../components/ResultsList";
import AdmitCardsList from "../components/AdmitCardsList";
import LatestJobsList from "../components/LatestJobsList";
import AnswerKeyList from "../components/AnswerKeyList";
import DocumentsList from "../components/DocumentsList";
import AdmissionsList from "../components/AdmissionsList";
import InfoSections from "../components/InfoSections";
import FAQ from "../components/FAQ";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
  const menuItems = [
    "Home",
    "Latest Job",
    "Admit Card",
    "Result",
    "Admission",
    "Syllabus",
    "Answer Key",
    "More",
  ];

  const sections = [
    "Result",
    "Admit Card",
    "Latest Jobs",
    "Answer Key",
    "Syllabus",
    "Admission",
  ];

  const links = [
    "HPPSC HPAS Pre-Exam Result 2025",
    "AIIMS B.Sc. Nursing 1st Round Seat Allocation",
    "Bihar polytechnic PE 2nd Round Seat Allotment",
    "Railway RRB Technician CEN No. 2025-Start",
    "Indian Bank Apprentice Online Form 2025",
    "IB ACIO Grade-II/ Executive Online Form 2025",
  ];

  return (
    <div className="app-container" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={{ textAlign: "center", padding: "10px" }}>
        <h1 style={{ fontSize: "2rem" }}>
          <span style={{ color: "red" }}>Live</span>{" "}
          <span style={{ color: "green" }}>Sarkari</span> Exam
        </h1>
        <p style={{ color: "#555" }}>Livesarkariexam.com</p>
      </header>

      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          background: "#003366",
          padding: "10px",
          color: "#fff",
          flexWrap: "wrap",
        }}
      >
        {menuItems.map((item, index) => (
          <span key={index} style={{ cursor: "pointer" }}>
            {item}
          </span>
        ))}
      </nav>

      {/* Live Form Bar */}
      <div
        style={{
          background: "red",
          color: "#fff",
          padding: "8px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Live Form: SSC MTS/ Havaldar 2025 | RRB Technician 2025 | IB ACIO Grade
        –II 2025
      </div>

      {/* Popular Jobs Section */}
      <section style={{ padding: "20px", textAlign: "center" }}>
        <h3>Popular Jobs</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "15px",
          }}
        >
          {[
            "Police & Defence Jobs",
            "UPSC & State PSC Jobs",
            "Railway/Metro Jobs",
            "Banking & Insurance Jobs",
            "SSC & CHSL/CGL Jobs",
            "10th / 12th Pass Jobs",
          ].map((job, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                minWidth: "150px",
              }}
            >
              {job}
            </div>
          ))}
        </div>
      </section>

      {/* Social Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            background: "#25D366",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "25px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Join WhatsApp
        </button>
        <button
          style={{
            background: "#1877F2",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "25px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Join Facebook Page
        </button>
      </div>

      {/* Sections */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px",
          padding: "20px",
        }}
      >
        {sections.map((section, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "10px",
              background: "#b30000",
              color: "#fff",
            }}
          >
            <h3 style={{ margin: "0 0 10px" }}>{section}</h3>
            <ul style={{ listStyle: "none", padding: 0, color: "#fff" }}>
              {links.map((link, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: "5px",
                    borderBottom: "1px dashed rgba(255,255,255,0.4)",
                    paddingBottom: "5px",
                  }}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
