import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import "animate.css";

// Add intersection observer hook for scroll animations
function useScrollAnimation(className = "animate__fadeInUp") {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const node = ref.current as HTMLElement | null;
    if (!node) return;
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add("animate__animated", className, "animate__faster");
        } else {
          node.classList.remove("animate__animated", className, "animate__faster");
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.15,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [className]);
  return ref;
}

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const productsCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Navbar hide/show on scroll
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY.current = window.scrollY;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setShowNavbar(true), 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
  ];

  const productCategories = [
    { label: "Electronics", path: "/products/category1" },
    { label: "Fashion", path: "/products/category2" },
    { label: "Category 3", path: "/products/category3" },
    { label: "Category 4", path: "/products/category4" },
    { label: "Category 5", path: "/products/category5" },
    { label: "Category 6", path: "/products/category6" },
    { label: "Category 7", path: "/products/category7" },
    { label: "Category 8", path: "/products/category8" },
  ];

  // Add scroll animation refs
  const companyRef = useScrollAnimation();
  const resourcesRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-gradient-to-b from-blue-400 to-blue-100 animate__animated animate__fadeIn relative">
      {/* Decorative SVG/Blob/Stars Background - covers the whole page */}
      <div className="fixed inset-0 w-full h-full -z-20 pointer-events-none select-none">
        <svg
          viewBox="0 0 1920 1080"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <radialGradient
              id="mainBgGradient"
              cx="50%"
              cy="50%"
              r="80%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.13" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.03" />
            </radialGradient>
            <filter id="blurStar" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="30" />
            </filter>
          </defs>
          {/* Large blurred ellipses for soft blobs */}
          <ellipse
            cx="400"
            cy="200"
            rx="340"
            ry="120"
            fill="url(#mainBgGradient)"
            filter="url(#blurStar)"
          />
          <ellipse
            cx="1600"
            cy="300"
            rx="260"
            ry="100"
            fill="#60a5fa"
            fillOpacity="0.5"
            filter="url(#blurStar)"
          />
          <ellipse
            cx="1000"
            cy="900"
            rx="200"
            ry="80"
            fill="#2563eb"
            fillOpacity="0.5"
            filter="url(#blurStar)"
          />
          {/* Decorative stars and polygons */}
          <g>
            <circle cx="120" cy="60" r="2.5" fill="#fff" opacity="0.8" />
            <circle cx="300" cy="120" r="1.5" fill="#fff" opacity="0.7" />
            <circle cx="600" cy="40" r="2" fill="#fff" opacity="0.9" />
            <circle cx="900" cy="100" r="1.8" fill="#fff" opacity="0.7" />
            <circle cx="1100" cy="60" r="2.2" fill="#fff" opacity="0.8" />
            <circle cx="1300" cy="180" r="1.3" fill="#fff" opacity="0.6" />
            <circle cx="1700" cy="80" r="2.1" fill="#fff" opacity="0.7" />
            <circle cx="1800" cy="300" r="1.7" fill="#fff" opacity="0.6" />
            <circle cx="1550" cy="900" r="2.3" fill="#fff" opacity="0.7" />
            {/* Star polygons */}
            <polygon
              points="200,80 202,85 207,86 203,89 204,94 200,91 196,94 197,89 193,86 198,85"
              fill="#000"
              opacity="0.9"
            />
            <polygon
              points="1000,200 1002,204 1007,205 1003,208 1004,213 1000,210 996,213 997,208 993,205 998,204"
              fill="#fff"
              opacity="0.8"
            />
            <polygon
              points="400,160 402,164 407,165 403,168 404,173 400,170 396,173 397,168 393,165 398,164"
              fill="#000"
              opacity="0.7"
            />
            <polygon
              points="1700,400 1702,405 1707,406 1703,409 1704,414 1700,411 1696,414 1697,409 1693,406 1698,405"
              fill="#fff"
              opacity="0.8"
            />
            <polygon
              points="1500,700 1502,705 1507,706 1503,709 1504,714 1500,711 1496,714 1497,709 1493,706 1498,705"
              fill="#000"
              opacity="0.7"
            />
          </g>
        </svg>
      </div>
      <Navbar
        className={`fixed z-50 top-0 left-1/2 -translate-x-1/2 py-4 px-2 sm:px-10 shadow-lg rounded-b-2xl bg-amber-400 flex flex-col sm:flex-row sm:items-center sm:justify-between mx-auto max-w-screen-xl w-full animate__animated animate__fadeInDown animate__faster transition-transform duration-300 ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'}`}
      >
        <NavbarBrand className="flex items-center gap-2 text-gray-800 font-bold text-xl">
          <button
            className="sm:hidden focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-full p-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon color="#3f9392" icon="lucide:menu" className="w-8 h-8" />
          </button>
          <p className="font-bold text-inherit">Docel-Star</p>
        </NavbarBrand>

        <div className="flex-1 flex justify-center">
          <NavbarContent className="hidden sm:flex gap-6 items-center font-medium text-lg">
            {menuItems.map((item) =>
              item.label === "Products" ? (
                <div
                  key={item.path}
                  className="relative ml-4"
                  ref={productsRef}
                  onMouseEnter={() => {
                    if (productsCloseTimer.current) clearTimeout(productsCloseTimer.current);
                    setProductsOpen(true);
                  }}
                  onMouseLeave={() => {
                    productsCloseTimer.current = setTimeout(() => setProductsOpen(false), 700);
                  }}
                >
                  <button
                    className={`hover:text-emerald-600 transition duration-300 ${
                      location.pathname.startsWith("/products")
                        ? "text-black"
                        : "text-gray-800"
                    } flex items-center gap-1 focus:outline-none px-4 py-2 rounded-xl font-semibold bg-white/70 hover:bg-emerald-50 shadow-sm border border-transparent hover:border-emerald-200`}
                    aria-haspopup="true"
                    aria-expanded={productsOpen ? "true" : "false"}
                    onClick={() => setProductsOpen((open) => !open)}
                    tabIndex={0}
                  >
                    <Icon icon="lucide:grid" className="w-5 h-5 mr-1 text-emerald-600" />
                    {item.label}
                    <Icon icon="lucide:chevron-down" className="w-4 h-4 ml-1" />
                  </button>
                  {productsOpen && (
                    <div
                      className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl z-50 border border-blue-100 animate-fade-in p-4 transition-all duration-200"
                      role="menu"
                      aria-label="Products submenu"
                      onMouseEnter={() => {
                        if (productsCloseTimer.current) clearTimeout(productsCloseTimer.current);
                        setProductsOpen(true);
                      }}
                      onMouseLeave={() => {
                        productsCloseTimer.current = setTimeout(() => setProductsOpen(false), 700);
                      }}
                    >
                      <div className="grid grid-cols-2 gap-3" role="menu">
                        {productCategories.map((cat) => (
                          <Link
                            key={cat.path}
                            href={cat.path}
                            className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-emerald-50 text-gray-800 text-base font-medium transition group border border-transparent hover:border-emerald-200"
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => setProductsOpen(false)}
                          >
                            <Icon icon="lucide:tag" className="w-5 h-5 text-blue-500 group-hover:text-emerald-600 transition" />
                            <span className="truncate">{cat.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavbarItem
                  key={item.path}
                  isActive={location.pathname === item.path}
                  className={`ml-4 transition relative`}
                >
                  <Link
                    className={`hover:text-emerald-600 transition duration-300 px-4 py-2 rounded-xl font-semibold relative
                      ${location.pathname === item.path
                        ? "text-black after:content-[''] after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-1 after:rounded-full after:bg-white/70 after:shadow after:transition-all after:duration-300"
                        : "text-gray-800 bg-transparent"
                      }`}
                    href={item.path}
                    aria-current={
                      location.pathname === item.path ? "page" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                </NavbarItem>
              )
            )}
          </NavbarContent>
        </div>
        <div className="hidden sm:flex items-center ml-auto">
          <Button className="gap-3 px-6 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-600 transition duration-300 ease-in-out">
            <Link href="/contact">Consult Us</Link>
          </Button>
        </div>
        {/* Mobile menu overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-40 flex sm:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <nav
              className="bg-amber-400 w-3/4 max-w-xs h-full p-6 flex flex-col gap-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile menu"
            >
              <button
                className="self-end mb-4 focus:outline-none"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <Icon icon="lucide:x" className="w-7 h-7 text-gray-800" />
              </button>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block py-2 px-4 rounded text-lg font-medium ${
                    location.pathname === item.path
                      ? "bg-emerald-600 text-white"
                      : "text-gray-800 hover:bg-emerald-100"
                  }`}
                  aria-current={
                    location.pathname === item.path ? "page" : undefined
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="mt-6 bg-emerald-700 text-white w-full"
                onClick={() => setMenuOpen(false)}
              >
                <Link href="/contact">Consult Us</Link>
              </Button>
            </nav>
          </div>
        )}
      </Navbar>
      <div className="flex-1 w-full max-w-screen-xl mx-auto px-2 sm:px-6 pt-32 pb-8">
        {children}
      </div>
      <footer className="w-full max-w-screen-xl mx-auto bg-content1 py-6 mt-auto bg-amber-400 rounded-t-2xl px-2 sm:px-6 animate__animated animate__fadeInUp animate__faster">
        <div className="flex mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-50">
            {/* Company Info */}
            <div className="space-y-4" ref={companyRef}>
              <h3 className="font-bold text-lg">Company</h3>
              <div className="grid grid-col-2 md:grid-cols-2 gab-20 space-x-6 ">
                <Link href="/about" color="foreground">
                  About Us
                </Link>
                <Link href="#" color="foreground">
                  Careers
                </Link>
                <Link href="#" color="foreground">
                  Press
                </Link>
                <Link href="#" color="foreground">
                  Blog
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-4" ref={resourcesRef}>
              <h3 className="font-bold text-lg">Resources</h3>
              <div className="grid grid-col-2 md:grid-cols-2 gab-25 space-x-6">
                <Link href="#" color="foreground">
                  Documentation
                </Link>
                <Link href="/ContactForm" color="foreground">
                  Help Center
                </Link>
                <Link href="#" color="foreground">
                  Support
                </Link>
                <Link href="#" color="foreground">
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4" ref={contactRef}>
              <h3 className="font-bold text-lg justify-center">Contact</h3>
              <div className="grid grid-col-2 md:grid-cols-2 gab-20 space-x-6">
                <Link href="/ContactUs" color="foreground">
                  Contact Us
                </Link>
                <Link href="#" color="foreground">
                  Partners
                </Link>
                <Link href="#" color="foreground">
                  Advertise
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 space-y-4 mt-8 pt-8 border-t border-divider text-center text-small text-default-500">
          <p className="items-start">
            &copy; {new Date().getFullYear()} Docel Star Ghana Ltd. All rights
            reserved.
          </p>
          <h3 className="font-bold">Follow Us</h3>
          <Link
            href="https://www.x.com/@docelstar"
            color="foreground"
            className="hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="simple-icons:x" className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.facebook.com/@docelstar"
            color="foreground"
            className="hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="lucide:facebook" className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.instagram.com/@docelstar"
            color="foreground"
            className="hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="lucide:instagram" className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/@docelstar"
            color="foreground"
            className="hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="lucide:linkedin" className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.tiktok.com/@docelstar" // Example TikTok link
            color="foreground"
            className="hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="ic:baseline-tiktok" className="w-5 h-5" />
          </Link>

          <div className="pl-8 ml-4 border-l border-divider space-x-4">
            <Link
              href="/cookie-policy"
              color="foreground"
              className="hover:opacity-80 font-bold"
            >
              Cookie Policy
            </Link>
            <Link
              href="/privacy-policy"
              color="foreground"
              className="hover:opacity-80 font-bold"
            >
              Privacy Policy
            </Link>
            <Link
              href="/faq"
              color="foreground"
              className="hover:opacity-80 font-bold"
            >
              FAQ
            </Link>
          </div>
        </div>
      </footer>
      {/* Floating Action Button for Quick Contact */}
      <a
        href="/contact"
        className="fixed bottom-48 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-colors duration-300 group animate__animated animate__bounceInRight animate__fast"
        title="Contact Us"
        aria-label="Contact Us"
      >
        <Icon icon="mdi:email" className="text-3xl group-hover:scale-110 transition-transform duration-200" />
        <span className="absolute opacity-0 group-hover:opacity-100 bg-blue-700 text-white text-xs rounded px-2 py-1 ml-20 transition-opacity duration-300 pointer-events-none">Contact Us</span>
      </a>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/233548544775"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-28 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-green-400 animate__animated animate__bounceInRight animate__slower"
      >
        <Icon icon="logos:whatsapp-icon" className="w-8 h-8" />
      </a>
      
      {/* Scroll to Top Floating Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="fixed bottom-24 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-400 focus:outline-none focus:ring-2 focus:ring-blue-400 animate__animated animate__bounceInRight animate__slow md:bottom-8 md:right-8 scroll-to-top-btn"
      >
        <Icon icon="mdi:arrow-up" className="w-7 h-7" />
      </button>
    </div>
  );
}