import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Link from "next/link";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { siteConfig } from "@/content/shared/site";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter().asPath;
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    setMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/80 dark:bg-[#1d1d1f]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 h-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-full bg-apple-blue flex items-center justify-center text-white text-[0.65rem] font-bold">
            {siteConfig.profile.initials}
          </div>
          <span className="text-sm font-semibold tracking-tight text-apple-text dark:text-white">
            {siteConfig.profile.brand}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navigation.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className={`text-xs font-medium tracking-tight hover:text-apple-blue transition-colors ${
                router === link.link
                  ? "text-apple-blue"
                  : "text-apple-subtext dark:text-gray-400"
              }`}
            >
              {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-1 text-apple-subtext hover:text-apple-blue transition-colors"
          >
            {currentTheme === "dark" ? (
              <MdOutlineLightMode className="w-4 h-4" />
            ) : (
              <MdOutlineDarkMode className="w-4 h-4" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 text-apple-subtext hover:text-apple-blue transition-colors"
          >
            {isMobileMenuOpen ? (
              <HiOutlineX className="w-5 h-5" />
            ) : (
              <HiOutlineMenuAlt4 className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white/80 dark:bg-[#1d1d1f]/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-8 flex flex-col gap-6">
            {siteConfig.navigation.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium tracking-tight hover:text-apple-blue transition-colors ${
                  router === link.link
                    ? "text-apple-blue"
                    : "text-apple-subtext dark:text-gray-400"
                }`}
              >
                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
