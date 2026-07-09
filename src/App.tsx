import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { router } from './router';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Page Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="page-loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/logo.png"
                alt="Gill Enterprises"
                className="loader-logo w-54 h-54 object-contain"
              />
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-accent"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-secondary"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                />
              </div>
              <p className="text-text-secondary text-sm font-medium tracking-wider uppercase font-heading">
                Gill Enterprises
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <RouterProvider router={router} />
        </motion.div>
      )}
    </>
  );
}

export default App;
