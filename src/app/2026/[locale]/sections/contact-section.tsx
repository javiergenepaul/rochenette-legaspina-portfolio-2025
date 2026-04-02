"use client";

import { useState } from "react";
import { Send, Mail, Linkedin, Github, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CONTACT_LINKS = [
  {
    Icon: Mail,
    label: "Email",
    value: "rochenette@email.com",
    href: "mailto:rochenette@email.com",
    sub: "Best for project enquiries",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rochenette-legaspina",
    href: "https://linkedin.com/in/rochenette-legaspina",
    sub: "Connect professionally",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/rochenette",
    href: "https://github.com/rochenette",
    sub: "See my open source work",
  },
] as const;

export default function ContactSection2026() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up real send logic
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="py-24 px-[7%] bg-woodsmoke-100 dark:bg-woodsmoke-900"
    >
      {/* Header */}
      <div className="flex items-center gap-1.5 text-amethyst-500 font-poppins font-bold text-[0.72rem] uppercase tracking-[2.5px] mb-2">
        <Send size={13} strokeWidth={1.75} />
        Contact
      </div>
      <h2
        className="font-poppins font-bold text-woodsmoke-900 dark:text-woodsmoke-50 mb-2"
        style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: 1.2 }}
      >
        Let&apos;s <span className="text-amethyst-500">Work Together</span>
      </h2>
      <p className="text-woodsmoke-500 dark:text-woodsmoke-400 text-[0.95rem] leading-[1.75] max-w-[560px] mb-12">
        Whether you have a project in mind or just want to connect — I&apos;d love to hear from you.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
        {/* Left — links */}
        <div>
          <p className="text-woodsmoke-500 dark:text-woodsmoke-400 text-[0.92rem] leading-[1.75] mb-7">
            I&apos;m currently open to freelance projects, full-time roles, and collaborations in
            systems analysis, UI/UX design, and 3D visualization.
          </p>

          <div className="flex flex-col gap-3">
            {CONTACT_LINKS.map(({ Icon, label, value, href, sub }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-3.5 no-underline p-4 rounded-[14px] border",
                  "bg-white dark:bg-woodsmoke-800",
                  "border-woodsmoke-200 dark:border-woodsmoke-700",
                  "transition-all duration-300",
                  "hover:border-amethyst-500 hover:shadow-[0_12px_36px_rgba(211,47,47,.13)] hover:translate-x-1.5"
                )}
              >
                <div className="w-9 h-9 bg-amethyst-50 dark:bg-amethyst-500/15 rounded-[9px] flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-amethyst-500" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <strong className="block text-[0.82rem] text-woodsmoke-900 dark:text-woodsmoke-50 font-semibold truncate">
                    {value}
                  </strong>
                  <small className="text-[0.73rem] text-woodsmoke-400">{sub}</small>
                </div>
                <ChevronRight size={14} className="text-woodsmoke-300 dark:text-woodsmoke-600 shrink-0 transition-all duration-200 group-hover:text-amethyst-500 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className={cn(
          "rounded-[20px] p-8 border",
          "bg-white dark:bg-woodsmoke-800",
          "border-woodsmoke-200 dark:border-woodsmoke-700",
          "shadow-[0_4px_16px_rgba(0,0,0,.06)]"
        )}>
          <h3 className="font-poppins font-bold text-[0.97rem] text-woodsmoke-900 dark:text-woodsmoke-50 flex items-center gap-2 mb-6">
            <Send size={18} className="text-amethyst-500" strokeWidth={1.75} />
            Send a Message
          </h3>

          {sent ? (
            <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
              <div className="w-14 h-14 rounded-full bg-amethyst-50 dark:bg-amethyst-500/15 flex items-center justify-center">
                <Send size={24} className="text-amethyst-500" strokeWidth={1.75} />
              </div>
              <p className="font-poppins font-bold text-woodsmoke-900 dark:text-woodsmoke-50">Message sent!</p>
              <p className="text-[0.85rem] text-woodsmoke-400">I&apos;ll get back to you as soon as possible.</p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="mt-2 text-[0.8rem] text-amethyst-500 font-semibold underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Field label="Name" name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Your name" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
              </div>
              <Field label="Subject" name="subject" type="text" value={form.subject} onChange={handleChange} required placeholder="Project enquiry, collaboration…" />
              <FieldArea label="Message" name="message" value={form.message} onChange={handleChange} required placeholder="Tell me about your project or idea…" />

              <button
                type="submit"
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3 rounded-xl",
                  "font-poppins font-bold text-[0.88rem] text-white border-none cursor-pointer",
                  "bg-linear-to-br from-amethyst-500 to-amethyst-700",
                  "shadow-[0_4px_14px_rgba(211,47,47,.3)]",
                  "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,47,47,.42)]"
                )}
              >
                <Send size={16} strokeWidth={1.75} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Field helpers ──────────────────────────────────────────────────────────────

function Field({
  label, name, type, value, onChange, required, placeholder,
}: {
  label: string; name: string; type: string;
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-poppins font-bold text-[0.73rem] text-woodsmoke-900 dark:text-woodsmoke-100 mb-1.5 tracking-[0.3px]">
        {label}
      </label>
      <input
        name={name} type={type} value={value} onChange={onChange}
        required={required} placeholder={placeholder}
        className={cn(
          "w-full px-4 py-2.5 rounded-[10px] text-[0.83rem] font-roboto outline-none",
          "border-[1.5px] transition-all duration-200",
          "text-woodsmoke-900 dark:text-woodsmoke-50",
          "bg-woodsmoke-50 dark:bg-woodsmoke-900",
          "border-woodsmoke-200 dark:border-woodsmoke-700",
          "placeholder:text-woodsmoke-300 dark:placeholder:text-woodsmoke-600",
          "focus:border-amethyst-500 focus:shadow-[0_0_0_3px_rgba(211,47,47,.1)]"
        )}
      />
    </div>
  );
}

function FieldArea({
  label, name, value, onChange, required, placeholder,
}: {
  label: string; name: string;
  value: string; onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-poppins font-bold text-[0.73rem] text-woodsmoke-900 dark:text-woodsmoke-100 mb-1.5 tracking-[0.3px]">
        {label}
      </label>
      <textarea
        name={name} value={value} onChange={onChange}
        required={required} placeholder={placeholder} rows={4}
        className={cn(
          "w-full px-4 py-2.5 rounded-[10px] text-[0.83rem] font-roboto outline-none resize-y",
          "border-[1.5px] transition-all duration-200",
          "text-woodsmoke-900 dark:text-woodsmoke-50",
          "bg-woodsmoke-50 dark:bg-woodsmoke-900",
          "border-woodsmoke-200 dark:border-woodsmoke-700",
          "placeholder:text-woodsmoke-300 dark:placeholder:text-woodsmoke-600",
          "focus:border-amethyst-500 focus:shadow-[0_0_0_3px_rgba(211,47,47,.1)]"
        )}
      />
    </div>
  );
}
