import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16 pb-28">
      <div className="relative rounded-2xl bg-[#023581] dark:bg-[#021f52] border border-[#023581] overflow-hidden p-10 md:p-16 text-center">

        {/* Dot grid — top left */}
        <div className="absolute left-6 top-6 grid grid-cols-5 gap-2.5 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>

        {/* Dot grid — bottom right */}
        <div className="absolute right-6 bottom-6 grid grid-cols-5 gap-2.5 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>

        {/* Large circle blob — left */}
        <div className="absolute -left-16 -bottom-16 w-52 h-52 rounded-full bg-white/5" />

        {/* Large circle blob — right */}
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5" />

        {/* Small accent ring */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-48 h-48 rounded-full border border-white/10" />

        {/* Content */}
        <div className="relative z-10">
          <p className="text-xs font-medium tracking-widest uppercase text-white/50 mb-4">
            Let&apos;s collaborate
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">
            Have a project in mind?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto text-base md:text-lg leading-relaxed">
            I&apos;m currently available for freelance and full-time opportunities. Let&apos;s create something great together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/94728407100"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#023581] text-sm font-medium hover:bg-white/90 transition-all duration-200"
            >
              Chat on WhatsApp
            </a>

            {/* Email Button (text style) */}
            <a
              href="mailto:tennakoonsasi5@gmail.com"
              className="text-white text-sm font-medium underline underline-offset-4 hover:text-white/80 transition"
            >
              tennakoonsasi5@gmail.com
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}