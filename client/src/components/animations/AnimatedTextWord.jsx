import { motion } from "framer-motion";

const AnimatedTextWord = ({ text }) => {
  var words = [];
  for (var i = 0; i < text.length; i++) {
    words.push(text[i]);
  }
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div>
      <motion.h1
        className='text-6xl font-bold text-green-500'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={child}>
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default AnimatedTextWord;
