// aboutAnimations.js

// Container animation with sliding effect
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      staggerChildren: 0.4, // Staggered sliding effect for children
    },
  },
};

// Image slide-in animation
export const imageVariants = {
  hidden: { opacity: 0, x: -200 }, // Start from the left off-screen
  visible: {
    opacity: 1,
    x: 0, // Move to the normal position
    transition: { duration: 1, ease: "easeInOut" },
  },
};

// Text slide-in animation from the right
export const textVariants = {
  hidden: { opacity: 0, x: 200 }, // Start from the right off-screen
  visible: {
    opacity: 1,
    x: 0, // Move to the normal position
    transition: { duration: 1, ease: "easeInOut" },
  },
};

// Mission slide-in animation from bottom
export const missionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};
