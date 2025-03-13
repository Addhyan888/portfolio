import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  {
    title: "My JEE Preparation Journey",
    date: "2024-03-20",
    excerpt: "How I'm preparing for one of India's toughest exams...",
    readTime: "5 min read"
  },
  {
    title: "Physics Shortcuts That Actually Work",
    date: "2024-03-15",
    excerpt: "Proven techniques to solve complex physics problems faster...",
    readTime: "8 min read"
  },
  {
    title: "Mathematics: Beyond the Formulas",
    date: "2024-03-10",
    excerpt: "Understanding the logic behind mathematical concepts...",
    readTime: "6 min read"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen p-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <h1 className="text-4xl font-bold">Blog</h1>
        
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <button className="text-primary hover:text-primary/80 transition-colors">
                      Read more →
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
