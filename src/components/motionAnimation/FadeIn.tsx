// components/FadeIn.tsx
import { motion } from "framer-motion";

export const FadeIn = ({
  children,
  from = "left",
}: {
  children: React.ReactNode;
  from?: "left" | "right";
}) => {
  const x = from === "left" ? -50 : from === "right" ? 50 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
