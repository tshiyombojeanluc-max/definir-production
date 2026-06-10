"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Upload, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  fullName: string; email: string; phone: string; age: string; gender: string; location: string
  height: string; weight: string; waist: string; chest: string; hip: string
  experience: string; instagram: string; tiktok: string; website: string
  headshot: File | null; fullBody: File | null; portfolio: File[]
  biography: string; motivation: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(255,255,255,0.15)",
  color: "#fff",
  fontFamily: "var(--sans)",
  fontSize: "0.88rem",
  fontWeight: 300,
  padding: "0.7rem 0",
  outline: "none",
  transition: "border-color 0.2s",
}
const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--sans)",
  fontSize: "0.6rem",
  fontWeight: 500,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.35)",
  marginBottom: "0.4rem",
}
const selectStyle: React.CSSProperties = {
  ...inputStyle,
  cursor: "pointer",
  appearance: "none",
}
const fieldWrap: React.CSSProperties = { display: "flex", flexDirection: "column" }

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div style={fieldWrap}>
      <label style={labelStyle}>{label}</label>
      {children}
      {error && (
        <p style={{ fontFamily: "var(--sans)", fontSize: "0.68rem", color: "#f87171", marginTop: "0.3rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  )
}

function FileUpload({ label, accept, multiple, onFile, file, files }: {
  label: string; accept: string; multiple?: boolean
  onFile: (f: File | File[]) => void; file?: File | null; files?: File[]
}) {
  const ref = useRef<HTMLInputElement>(null)
  const chosen = multiple ? files?.length : file?.name
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <div
        onClick={() => ref.current?.click()}
        style={{
          border: "1px dashed rgba(255,255,255,0.15)",
          padding: "1.4rem",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          transition: "border-color 0.2s",
          background: chosen ? "rgba(255,255,255,0.02)" : "transparent",
        }}
      >
        <Upload size={18} color="rgba(255,255,255,0.3)" />
        <span style={{ fontFamily: "var(--sans)", fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", textAlign: "center" }}>
          {chosen
            ? (multiple ? `${files?.length} file${(files?.length ?? 0) > 1 ? "s" : ""} selected` : String(chosen))
            : "Click to upload"}
        </span>
        <span style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)" }}>
          {accept.replace(/image\//g, "").replace(/\./g, "").toUpperCase()}
        </span>
      </div>
      <input
        ref={ref} type="file" accept={accept} multiple={multiple} style={{ display: "none" }}
        onChange={(e) => {
          const f = e.target.files
          if (!f) return
          onFile(multiple ? Array.from(f) : f[0])
        }}
      />
    </div>
  )
}

export function BecomeModelForm() {
  const [form, setForm] = useState<FormData>({
    fullName: "", email: "", phone: "", age: "", gender: "", location: "",
    height: "", weight: "", waist: "", chest: "", hip: "",
    experience: "", instagram: "", tiktok: "", website: "",
    headshot: null, fullBody: null, portfolio: [],
    biography: "", motivation: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }))

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!form.fullName.trim()) e.fullName = "Required"
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required"
    if (!form.age || Number(form.age) < 16 || Number(form.age) > 60) e.age = "Age must be 16–60"
    if (!form.gender) e.gender = "Required"
    if (!form.height.trim()) e.height = "Required"
    if (!form.biography.trim()) e.biography = "Required"
    if (!form.motivation.trim()) e.motivation = "Required"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: "center", padding: "5rem 2rem" }}
    >
      <CheckCircle size={48} color="rgba(255,255,255,0.6)" style={{ margin: "0 auto 1.5rem" }} />
      <h3 style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", fontWeight: 300, color: "#fff", marginBottom: "1rem" }}>
        Application Received
      </h3>
      <p style={{ fontFamily: "var(--sans)", fontSize: "0.88rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: "400px", margin: "0 auto" }}>
        Thank you for applying to définir. Our talent team will review your application and be in touch within 5–7 business days.
      </p>
    </motion.div>
  )

  const sectionTitle = (text: string) => (
    <div style={{ gridColumn: "1 / -1", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2.5rem", marginTop: "1rem" }}>
      <p className="uppercase-label" style={{ color: "rgba(255,255,255,0.3)", marginBottom: "0.25rem" }}>{text}</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem 2.5rem" }} className="form-grid">

        {/* Personal */}
        {sectionTitle("Personal Information")}
        <Field label="Full Name *" error={errors.fullName}>
          <input style={inputStyle} value={form.fullName} onChange={set("fullName")} placeholder="Jane Doe" />
        </Field>
        <Field label="Email Address *" error={errors.email}>
          <input type="email" style={inputStyle} value={form.email} onChange={set("email")} placeholder="jane@email.com" />
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <input type="tel" style={inputStyle} value={form.phone} onChange={set("phone")} placeholder="+1 000 000 0000" />
        </Field>
        <Field label="Age *" error={errors.age}>
          <input type="number" style={inputStyle} value={form.age} onChange={set("age")} placeholder="e.g. 22" min={16} max={60} />
        </Field>
        <Field label="Gender *" error={errors.gender}>
          <select style={selectStyle} value={form.gender} onChange={set("gender")}>
            <option value="" disabled>Select</option>
            {["Female", "Male", "Non-Binary", "Prefer not to say"].map((g) => (
              <option key={g} value={g} style={{ background: "#111" }}>{g}</option>
            ))}
          </select>
        </Field>
        <Field label="Location" error={errors.location}>
          <input style={inputStyle} value={form.location} onChange={set("location")} placeholder="City, Country" />
        </Field>

        {/* Physical */}
        {sectionTitle("Physical Measurements")}
        <Field label="Height *" error={errors.height}>
          <input style={inputStyle} value={form.height} onChange={set("height")} placeholder="e.g. 5'10 / 178cm" />
        </Field>
        <Field label="Weight" error={errors.weight}>
          <input style={inputStyle} value={form.weight} onChange={set("weight")} placeholder="e.g. 58kg / 128lbs" />
        </Field>
        <Field label="Waist" error={errors.waist}>
          <input style={inputStyle} value={form.waist} onChange={set("waist")} placeholder='e.g. 25"' />
        </Field>
        <Field label="Chest / Bust" error={errors.chest}>
          <input style={inputStyle} value={form.chest} onChange={set("chest")} placeholder='e.g. 34"' />
        </Field>
        <Field label="Hip" error={errors.hip}>
          <input style={inputStyle} value={form.hip} onChange={set("hip")} placeholder='e.g. 35"' />
        </Field>

        {/* Experience */}
        {sectionTitle("Experience & Social Media")}
        <div style={{ gridColumn: "1 / -1" }}>
          <Field label="Previous Modeling Experience" error={errors.experience}>
            <textarea
              rows={3}
              style={{ ...inputStyle, resize: "none", borderBottom: "1px solid rgba(255,255,255,0.15)" }}
              value={form.experience}
              onChange={set("experience")}
              placeholder="Describe any previous modeling work, training, or relevant experience..."
            />
          </Field>
        </div>
        <Field label="Instagram" error={errors.instagram}>
          <input style={inputStyle} value={form.instagram} onChange={set("instagram")} placeholder="@handle" />
        </Field>
        <Field label="TikTok" error={errors.tiktok}>
          <input style={inputStyle} value={form.tiktok} onChange={set("tiktok")} placeholder="@handle" />
        </Field>
        <div style={{ gridColumn: "1 / -1" }}>
          <Field label="Website / Portfolio Link" error={errors.website}>
            <input style={inputStyle} value={form.website} onChange={set("website")} placeholder="https://" />
          </Field>
        </div>

        {/* Uploads */}
        {sectionTitle("Photo Uploads")}
        <FileUpload
          label="Headshot *"
          accept="image/jpeg,image/png,image/webp"
          file={form.headshot}
          onFile={(f) => setForm((p) => ({ ...p, headshot: f as File }))}
        />
        <FileUpload
          label="Full Body Photo *"
          accept="image/jpeg,image/png,image/webp"
          file={form.fullBody}
          onFile={(f) => setForm((p) => ({ ...p, fullBody: f as File }))}
        />
        <div style={{ gridColumn: "1 / -1" }}>
          <FileUpload
            label="Additional Portfolio Images (up to 6)"
            accept="image/jpeg,image/png,image/webp"
            multiple
            files={form.portfolio}
            onFile={(f) => setForm((p) => ({ ...p, portfolio: f as File[] }))}
          />
        </div>

        {/* Story */}
        {sectionTitle("Your Story")}
        <div style={{ gridColumn: "1 / -1" }}>
          <Field label="Short Biography *" error={errors.biography}>
            <textarea
              rows={4}
              style={{ ...inputStyle, resize: "none" }}
              value={form.biography}
              onChange={set("biography")}
              placeholder="Tell us about yourself — your background, personality, and what makes you unique..."
            />
          </Field>
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <Field label="Why do you want to join définir? *" error={errors.motivation}>
            <textarea
              rows={4}
              style={{ ...inputStyle, resize: "none" }}
              value={form.motivation}
              onChange={set("motivation")}
              placeholder="What are your goals and what do you hope to achieve with définir?"
            />
          </Field>
        </div>

        {/* Submit */}
        <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              fontFamily: "var(--sans)",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: loading ? "rgba(0,0,0,0.5)" : "#000",
              background: "#fff",
              border: "none",
              padding: "1.1rem 0",
              cursor: loading ? "default" : "pointer",
              transition: "opacity 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
            }}
          >
            {loading ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 0.8s linear infinite" }}>
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                  <path d="M12 2a10 10 0 0 1 10 10" />
                </svg>
                Submitting...
              </>
            ) : "Submit Application"}
          </button>
        </div>
      </div>

    </form>
  )
}
