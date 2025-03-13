import { motion } from "framer-motion";
import Particles from "@/components/Particles";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6">
      <Particles />
      
      <div className="max-w-4xl w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I'm [Your Name]
          </h1>
          <p className="text-xl text-muted-foreground">
            JEE Aspirant | Tech Enthusiast | Future Engineer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Terminal 
            text={`> Currently preparing for JEE
> Passionate about technology and problem solving
> Exploring the intersection of physics, mathematics, and computer science
> Let's connect and build something amazing together!`}
          />
        </motion.div>
      </div>
    </div>
  );
}
