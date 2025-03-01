import { useState, useEffect } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { motion } from "framer-motion";
import useSound from 'use-sound';

const App = () => {
  const [showApp, setShowApp] = useState(false);
  const [booting, setBooting] = useState(false);
  const [rebootSound] = useSound("src/assets/reboot.mp3");
  const [welcomeSound] = useSound("/sounds/welcome.mp3");
  const [tickSound] = useSound("/sounds/tick.mp3");

  const [initializationComplete, setInitializationComplete] = useState(false);
  const [coreSystemsLoaded, setCoreSystemsLoaded] = useState(false);

  const [isOldTheme, setIsOldTheme] = useState(true); // State for theme

  const handleReboot = () => {
    setIsOldTheme(false); // Switch to new theme
    setBooting(true);
    rebootSound();
    setTimeout(() => {
      setInitializationComplete(true);
      tickSound();
      setTimeout(() => {
        setCoreSystemsLoaded(true);
        tickSound();
        setTimeout(() => {
          setShowApp(true);
          welcomeSound();
        }, 2000);
      }, 2000);
    }, 2000);
  };

  const oldThemeStyles = {
    backgroundColor: "#222",
    color: "#ddd",
    fontFamily: "Courier New, monospace", // Old font
    fontSize: "1.3rem", // Larger font
    backgroundImage: "url('src/assets/6397025.jpg')", // Old image
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  };

  const newThemeStyles = {
    backgroundColor: "#111",
    color: "#eee",
    fontFamily: "Roboto, sans-serif", // SpaceX-like font
    fontSize: "1rem",
    backgroundImage: "url('/images/modern-tech.jpg')", // Modern image
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  };

  return (
    <>
      {!showApp ? (
        <div
          className="flex flex-col items-center justify-center h-screen"
          style={isOldTheme ? oldThemeStyles : newThemeStyles} // Apply theme
        >
          {!booting ? (
            <>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  textShadow: "2px 2px 4px #000000",
                }}
              >
                IEEE UVCE 25 Years
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  fontStyle: "italic",
                  color: "#aaa",
                }}
              >
                Legacy Rebooted - Silver Jubilee
              </motion.h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#333",
                  color: "#fff",
                  borderRadius: "0.5rem",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  border: "1px solid #555",
                  boxShadow: "1px 1px 3px #000000",
                }}
                onClick={handleReboot}
              >
                Reboot
              </motion.button>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  fontSize: "2rem",
                  color: "#00FF00",
                }}
              >
                . . .
              </motion.div>

              <motion.p
                className="text-lg mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ color: "#00FF00", fontWeight: "bold", fontSize: "1.2rem", textShadow: "1px 1px 2px #000" }}
              >
                Initializing...
                {initializationComplete && <span style={{ color: "green", marginLeft: "0.5rem" }}>&#10004;</span>}
              </motion.p>

              {initializationComplete && (
                <motion.p
                  className="text-lg mb-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ color: "#00FF00", fontWeight: "bold", fontSize: "1.2rem", textShadow: "1px 1px 2px #000" }}
                >
                  Loading core systems...
                  {coreSystemsLoaded && <span style={{ color: "green", marginLeft: "0.5rem" }}>&#10004;</span>}
                </motion.p>
              )}

              {coreSystemsLoaded && (
                <motion.p
                  className="text-lg mb-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ color: "#00FF00", fontWeight: "bold", fontSize: "1.2rem", textShadow: "1px 1px 2px #000" }}
                >
                  Reboot Complete. Welcome!
                </motion.p>
              )}

              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "repeating-linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.1) 1px, rgba(0,0,0,0) 2px)",
                  pointerEvents: "none",
                  animation: "scanlines 3s linear infinite",
                }}
              ></motion.div>
            </motion.div>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"
          
        >
          <Header />
          <Hero />
          <Roadmap />
          <Footer />
        </motion.div>
      )}
      <ButtonGradient />
    </>
  );
};

export default App;
