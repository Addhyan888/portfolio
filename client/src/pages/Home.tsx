import { motion } from "framer-motion";
import Particles from "@/components/Particles";
import Terminal from "@/components/Terminal";
import { Badge } from "@/components/ui/badge";
import { SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const skills = [
  { icon: SiPython, name: "Python" },
  { icon: SiCplusplus, name: "C++" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
      <Particles />

      <div className="max-w-4xl w-full space-y-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
          >
            <span className="text-4xl font-bold text-white">AA</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm Addhyan Awasthi
            </span>
          </h1>

          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            JEE Aspirant | Tech Enthusiast | Future Engineer
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2"
            >
              <Badge variant="outline" className="p-3 bg-background/50 backdrop-blur">
                <skill.icon className="w-6 h-6" />
              </Badge>
              <span className="text-sm text-muted-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
          <Terminal 
            text={`> Hi, I'm Addhyan, a JEE 2026 aspirant and a passionate programmer
> Expertise in C, Python, HTML, CSS, and JavaScript
> Love exploring AI, machine learning, and high-frequency trading
> Let's connect and build something amazing together!`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <a
            href="/contact"
            className="group relative px-6 py-3 overflow-hidden rounded-full bg-purple-500 hover:bg-purple-600 transition-colors"
          >
            <span className="relative z-10 text-white font-medium">Get in touch</span>
            <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-purple-600 transition-transform duration-300"></div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}