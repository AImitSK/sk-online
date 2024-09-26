import { motion } from 'framer-motion';

const pathVariants = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0, // Füllung ist unsichtbar zu Beginn
  },
  visible: {
    pathLength: 1, // Der Pfad wird vollständig gezeichnet
    fillOpacity: 1, // Die Füllung blendet langsam ein
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" }, // Dauer der Pfad-Animation
      fillOpacity: { delay: 2, duration: 1, ease: "easeInOut" } // Füllung nach dem Pfad zeichnen
    }
  }
};

export default function AnimatedTitle() {
  return (
    <svg
      width="450"
      height="450"
      viewBox="0 0 450 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pfad 1: Großer Kreis unten rechts (Hellblau) */}
      <motion.path
        d="M343.913 294.378C371.204 294.378 393.42 316.595 393.42 343.885C393.42 371.176 371.204 393.392 343.913 393.392C316.623 393.392 294.406 371.176 294.406 343.885C294.406 316.595 316.623 294.378 343.913 294.378ZM343.913 237.798C285.309 237.798 237.826 285.307 237.826 343.885C237.826 402.464 285.335 449.972 343.913 449.972C402.491 449.972 450 402.464 450 343.885C450 285.307 402.491 237.798 343.913 237.798Z"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        stroke="#0693E3" // Hellblau
        strokeWidth="2"
        fill="#0693E3" // Hellblau
      />
      
      {/* Pfad 2: Rechteck unten links (Dunkelblau) */}
      <motion.path
        d="M53.0433 396.954V290.867H159.13V396.954H53.0433ZM0 449.998H212.199V237.798H0V449.998Z"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        stroke="#005FAB" // Dunkelblau
        strokeWidth="2"
        fill="#005FAB" // Dunkelblau
      />
      
      {/* Pfad 3: Kleiner Kreis oben links (Hellblau) */}
      <motion.path
        d="M106.087 155.594C78.7965 155.594 56.5795 133.377 56.5795 106.087C56.5795 78.7964 78.7965 56.5796 106.087 56.5796C133.377 56.5796 155.594 78.7964 155.594 106.087C155.594 133.377 133.377 155.594 106.087 155.594ZM106.087 212.174C164.691 212.174 212.174 164.665 212.174 106.087C212.174 47.5084 164.665 0 106.087 0C47.5085 0 0 47.5084 0 106.087C0 164.665 47.5085 212.174 106.087 212.174Z"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        stroke="#0693E3" // Hellblau
        strokeWidth="2"
        fill="#0693E3" // Hellblau
      />
      
      {/* Pfad 4: Rechteck oben rechts (Dunkelblau) */}
      <motion.path
        d="M396.956 53.0435V159.13H290.869V53.0435H396.956ZM449.999 0H237.8V212.199H449.999V0Z"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        stroke="#005FAB" // Dunkelblau
        strokeWidth="2"
        fill="#005FAB" // Dunkelblau
      />
    </svg>
  );
}
