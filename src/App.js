import logo from './logo.svg';
import './App.css';
import './index.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div>
      <header>
        <p className="logo">Balla</p>
      </header>
      <motion.div
      className='comingSoonContainer'
        initial="hidden" 
        whileInView="visible" 
        transition={{ duration: 0.5 }}       
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
      }}>
        <motion.h1 whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} className="comingSoon">Coming Soon</motion.h1>
      </motion.div>
    </div>
  );
}

export default App;
