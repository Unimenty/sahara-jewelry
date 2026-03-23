import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = ({ 
  children, 
  width = "100%", 
  delay = 0,
  direction = "up"
}: ScrollRevealProps) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            y: directions[direction].y, 
            x: directions[direction].x 
          },
          visible: { 
            opacity: 1, 
            y: 0, 
            x: 0 
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          delay: delay,
          ease: [0.33, 1, 0.68, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
