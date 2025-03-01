import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import Button from "./Button";
import smallimg from "../assets/4-small.png";

const ImpetusEvents = ({ heading, paragraph }) => {
  return (
    <Section id="events">
      <section className="flex justify-center py-10">
        <motion.div
          className="relative bg-[#1c0532] text-white py-12 px-8 w-[90%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] rounded-tl-3xl rounded-tr-xl rounded-bl-xl rounded-br-3xl shadow-xl transform skew-y-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Overlay with lower opacity */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-5 rounded-tl-3xl rounded-tr-xl rounded-bl-xl rounded-br-3xl"
            style={{
              backgroundImage: `url(${smallimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <motion.div
            className="text-center relative z-10"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">{heading || "IMPETUS 25.0 EVENTS"}</h2>
          </motion.div>
          <motion.p
            className="text-lg leading-relaxed text-justify relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            {paragraph ||
              "IMPETUS serves as a platform for various talents to showcase their abilities and skills. IMPETUS hosts flagship events, general events, and gaming events. Flagship events help participants compete over their technical skills and knowledge to solve real-world problems. General events provide a platform for participants to showcase their skills and talents in other domains while entertaining them with creative rounds. Gaming events encourage all gaming enthusiasts to showcase their strategies and planning skills."}
          </motion.p>
          <motion.div
            className="flex justify-center mt-8 relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <Button className="px-8 py-4 text-lg rounded-lg shadow-lg font-semibold hover:scale-105 transition-transform duration-300">
              SHOW ALL EVENTS
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </Section>
  );
};

export default ImpetusEvents;