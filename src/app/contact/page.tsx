"use client";

import { useState } from "react";

const projectTypes = [
  "Editorial Shoot",
  "Commercial Campaign",
  "Runway Production",
  "Talent Representation",
  "Lookbook",
  "Creative Direction",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    fontFamily: "var(--sans)",
    fontSize: "0.9rem",
    fontWeight: 300,
    padding: "0.8rem 0",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--sans)",
    fontSize: "0.62rem",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "rgba(255,255,255,0.4)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "clamp(110px, 14vh, 180px)",
          paddingBottom: "clamp(2rem, 4vw, 60px)",
          paddingLeft: "clamp(1.25rem, 4vw, 2.5rem)",
          paddingRight: "clamp(1.25rem, 4vw, 2.5rem)",
          maxWidth: "1400px",
          margin: "0 auto",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "2rem",
          }}
        >
          Work With Us
        </p>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}
        >
          Get In<br /><em>Touch</em>
        </h1>
      </section>

      {/* Split layout */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
        className="contact-grid"
      >
        {/* Left — contact info */}
        <div
          style={{
            padding: "clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
          className="contact-info-col"
        >
          <div>
            <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.35)", marginBottom: "1rem" }}>
              Email
            </p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", marginBottom: "0.4rem" }}>
              assistant.definir@gmail.com
            </p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
              Response within 24 hours
            </p>
          </div>

          <div>
            <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.35)", marginBottom: "1rem" }}>
              Phone
            </p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", marginBottom: "0.4rem" }}>
              0745761648
            </p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
              067 105 758
            </p>
          </div>

          <div>
            <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.35)", marginBottom: "1rem" }}>
              Location
            </p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
              Cape Town, South Africa
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div
          style={{
            padding: "clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 4vw, 3.5rem)",
          }}
        >
          {submitted ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "400px",
                textAlign: "center",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                }}
              >
                ✓
              </div>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 300 }}>
                Message Received
              </h2>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", maxWidth: "360px", lineHeight: 1.75 }}>
                Thank you for reaching out. A member of our team will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Name row */}
              <div className="contact-name-row">
                <div>
                  <label htmlFor="firstName" style={labelStyle}>First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" style={labelStyle}>Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="jane@brand.com"
                />
              </div>

              <div>
                <label htmlFor="phone" style={labelStyle}>Phone (Optional)</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="+1 (212) 000 0000"
                />
              </div>

              <div>
                <label htmlFor="projectType" style={labelStyle}>Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={form.projectType}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                    appearance: "none" as const,
                  }}
                >
                  <option value="" disabled>Select a type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} style={{ background: "#111", color: "#fff" }}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Tell Us About Your Project</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    resize: "none",
                  }}
                  placeholder="Describe your project, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#000",
                  background: "#fff",
                  border: "none",
                  padding: "1rem 0",
                  cursor: "pointer",
                  width: "100%",
                  transition: "opacity 0.2s",
                  marginTop: "0.5rem",
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
