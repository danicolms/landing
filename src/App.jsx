import { motion } from 'framer-motion';
import './index.css';

function App() {
  return (
    <div className="container">
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1 
            className="heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            Turn your ideas into powerful digital solutions
          </motion.h1>
          
          <motion.p 
            className="subheading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            No corporate fluff, just the right stuff
          </motion.p>
          
          <motion.button 
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ 
              scale: 0.97,
              transition: { duration: 0.1 }
            }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
          >
            Let's talk!
          </motion.button>
        </motion.div>

        <motion.div 
          className="illustrations-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
        >
          <motion.div 
            className="illustration illustration-main"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            Suggested: Hand-drawn lightbulb transforming into digital circuits, 
            representing the journey from idea to solution
          </motion.div>
          
          <motion.div 
            className="illustration illustration-secondary"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            Suggested: Simple sketched icons of tools and gears, 
            emphasizing the "right stuff" approach
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;