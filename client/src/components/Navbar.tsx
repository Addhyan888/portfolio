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
      className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-lg rounded-full px-6 py-3 border border-white/10"
    >
      <ul className="flex items-center gap-8">
        {links.map(({ href, icon: Icon, label }) => (
          <li key={href}>
            <Link href={href}>
              <a className={`flex items-center gap-2 transition-colors ${
                location === href ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}>
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
