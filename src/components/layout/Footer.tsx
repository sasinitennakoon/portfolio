import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const linkCls = "text-sm text-white/60 hover:text-white transition-colors duration-200 block";
const liCls = "text-sm text-white/60 hover:text-white transition-colors duration-200";
const liBtnCls = "inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200";

export default function Footer() {
  return (
    <footer className="relative bg-[#023581] overflow-hidden">

      <div className="absolute left-8 top-8 grid grid-cols-5 gap-3 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
        ))}
      </div>

      <div className="absolute right-8 bottom-8 grid grid-cols-4 gap-3 opacity-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-12">

          {/* Logo */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block mb-4">
              <Image src="/sasini tennakoon w.png" alt="Sasini Tennakoon" width={160} height={50} className="object-contain" />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              UI/UX Designer crafting clean, human-centered digital experiences. Based in Colombo, Sri Lanka.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-white/50">Available for new projects</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-white/40 mb-4">Navigation</p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={liCls}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-white/40 mb-4">Get in touch</p>
            <a href="mailto:hello@sasinitennakoon.com" className={linkCls}>tennakoonsasi5@gmail.com</a>
            <a href="tel:+94771234567" className={`${linkCls} mt-1`}>+94 77 123 4567</a>
            <div className="mt-5">
              <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className={liBtnCls}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="9" width="4" height="12" rx="1" />
                  <circle cx="4" cy="4" r="2" />
                  <path d="M9 9h4v1.5C13.5 9.5 15 9 16.5 9 19.5 9 22 11 22 14.5V21h-4v-6c0-1.5-.5-2.5-2-2.5S14 13.5 14 15v6H9V9z" />
                </svg>
                
              </a>
            </div>
          </div>

        </div>

        <div className="w-full h-px bg-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Sasini Tennakoon. All rights reserved.</p>
          
        </div>

      </div>
    </footer>
  );
}