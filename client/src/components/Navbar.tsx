import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Code2, Home, Mail, BookText } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/projects", icon: Code2, label: "Projects" },
    { href: "/blog", icon: BookText, label: "Blog" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-lg rounded-full px-4 md:px-6 py-3 border border-white/10 z-50"
    >
      <ul className="flex items-center gap-4 md:gap-8">
        {links.map(({ href, icon: Icon, label }) => (
          <li key={href}>
            <Link href={href}>
              <div className={`flex items-center gap-2 transition-colors cursor-pointer ${
                location === href ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}>
                <Icon className="w-5 h-5" />
                <span className="hidden md:inline text-sm font-medium">{label}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}