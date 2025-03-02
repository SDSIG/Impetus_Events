import { useState, useRef } from "react";
import Button from "./Button";
import Section from "./Section";
// import { curve, heroBackground, robot, astro } from "../assets"; // Assuming these are not needed in EventsPage
import { BottomLine } from "./design/Hero";
import { BackgroundCircles } from "./design/Hero";
import { Gradient } from "./design/Roadmap";
import { grid } from "../assets";

// SVG definitions for gradient stops (provided by you)
const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#89F9E8" />
          <stop offset="100%" stopColor="#FACB7B" />
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#D87CEE" />
          <stop offset="100%" stopColor="#FACB7B" />
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#9099FC" />
          <stop offset="100%" stopColor="#89F9E8" />
        </linearGradient>
        <linearGradient id="btn-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#9099FC" />
          <stop offset="100%" stopColor="#D87CEE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Custom Gradient Button that applies gradients on top, bottom, and left only.
// The right side remains normal.
const CustomGradientButton = ({ onClick, children }) => {
  return (
    <div className="relative inline-block">
      {/* Render SVG defs (invisible) */}
      <ButtonGradient />
      {/* Gradient borders on three sides */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top border */}
        <div
          className="absolute top-0 left-0 w-full h-[2px]"
          style={{ background: "linear-gradient(to right, #D87CEE, #FACB7B)" }}
        />
        {/* Bottom border */}
        <div
          className="absolute bottom-0 left-0 w-full h-[2px]"
          style={{ background: "linear-gradient(to right, #9099FC, #89F9E8)" }}
        />
        {/* Left border */}
        <div
          className="absolute top-0 left-0 h-full w-[2px]"
          style={{ background: "linear-gradient(to bottom, #89F9E8, #FACB7B)" }}
        />
        {/* No right border overlay; right side remains normal */}
      </div>
      <Button
        onClick={onClick}
        className="relative z-10 w-full text-black py-2 px-4 rounded-lg font-bold transition bg-n-6"
      >
        {children}
      </Button>
    </div>
  );
};

const EventsLanding = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Background Space Effect and Grid */}
        <div className="absolute inset-0 z-0 bg-space-effect bg-grid-lines"></div>

        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            IEEE UVCE PRESENTS ANNUAL NATIONAL-LEVEL <br /> TECHNICAL STUDENT EXTRAVAGANZA
          </p>
          <h1 className="h1 mb-6 text-7xl md:text-5xl lg:text-9xl font-daggersquare">
            <span className="inline-block relative font-daggersquare">
              IMPETUS 25.0
            </span>
          </h1>
          <br /><br />
          <h4 className="text-4xl md:text-4xl lg:text-4xl font-bold mt-6">EVENTS</h4>
          <button
            onClick={() =>
              document.getElementById("flagship-events").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-10 animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-12 h-12"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]" />
        </div>
      </div>
      <br />
    </Section>
  );
}

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const flagshipEventsRef = useRef(null);

  const flagshipEvents = [
    {
      name: "CodeStorm",
      description:
        "CODESTORM is a dynamic coding competition designed to test problem-solving skills and drive technological excellence. Featuring diverse challenges that gauge proficiency, participants embark on an exciting journey of innovation and skill refinement. Be part of the experience—unleash your coding prowess and shape the future of tech!",
        image: "/images/codestorm.jpeg",
    },
    {
      name: "Mock Placements",
      description:
        "Mock placements give students a realistic simulation of actual placement drives, offering hands-on experience and valuable feedback to refine their interview skills.",
        image: "/images/mockplacements.jpeg",
    },
    {
      name: "Silic-o-Hack",
      description:
        "Silic-O-Hack is a simulated hardware hackathon with two rounds utilizing mimetic software, challenging participants to tackle a real-world problem on TinkerCAD within a specified timeframe, employing creative solutions.",
        image: "/images/silic-o-hack.jpeg",
    },
    {
      name: "Hack-a-Maze",
      description:
        "Dive into Hack-A-Maze, an exciting challenge where you design an autonomous bot to navigate complex mazes independently. The fastest bot to reach the exit wins—test your skills and push the limits of automation!",
        image: "/images/hack-a-maze.jpeg",
    },
    {
      name: "Summit",
      description:
        "Summit is a dynamic and formal student parliament where participants harness creativity to develop optimal solutions for humanitarian challenges. Carefully structured, this event tackles critical global issues while driving strategic progress.",
        image: "/images/summit.jpeg",
    },
    {
      name: "Civicture",
      description:
        "Civicture is a dynamic platform where creativity meets precision in urban planning and design. CIVICTURE kicks off with a thrilling design competition, showcasing participants' innovative ideas, further on the stakes rise as contestants compete in a plan drawing competition, bringing their visions to life with meticulous detail. Join us in shaping the future of urban landscapes!",
        image: "/images/civicture.jpeg",
    },
    {
      name: "Brand IT",
      description:
        "Welcome to Brand It—where innovation meets strategy! Teams will build a brand from the ground up, designing logos, color schemes, product visuals, and packaging. Earn bonus points for compelling promotional materials in this multi-day showdown of creativity and competition. Get ready to brand like a pro!",
        image: "/images/brandit.jpeg",
    },
    {
      name: "Mechronins",
      description:
        "This engaging three-part event features a mix of mechanical-related questions and presentations, making for a fun and interactive experience. Tighten your brain bolts and gear up for an exciting challenge!",
        image: "/images/mechronins.jpeg",
    },
    {
      name: "AvionX",
      description:
        "Gear up for an electrifying aerospace challenge that tests both creativity and technical expertise! The event begins with an engaging and interactive round filled with fun problem-solving elements. But the real test awaits in the next stage, where participants will take on a hands-on engineering challenge tailored to their domain. Working together, different disciplines will contribute their expertise to create a unified aerospace solution, making this a truly multidisciplinary and immersive experience!",
        image: "/images/aviox.jpeg",
    },
    {
      name: "Laser Tag",
      description:
        "Laser Tag is a high-energy event featuring advanced infrared guns and sensor vests. Players navigate a dynamic arena, strategically tagging opponents to score points electronically. With speed, precision, and tactical skill as the keys to victory, get ready for an adrenaline-fueled showdown!",
        image: "/images/lasertag.jpeg",
    },
  ];

  const generalEvents = [
    { name: "Brain Bids 2.0", description: "An auction-based strategy game..." },
    { name: "Escape Room: UVCE Edition", description: "Solve puzzles to escape..." },
    { name: "IPL Auction", description: "Cricket auction simulation..." },
    { name: "Synthetic Intelligence", description: "AI-driven problem-solving..." },
    { name: "Tantragyan Tarka", description: "Tech-based quiz & discussion..." },
    {
      name: "The Time Traveler's Code",
      description: "Solve coding puzzles across time periods...",
    },
    { name: "Think Tank", description: "A brainstorming and ideation challenge..." },
  ];

  const gamingEvents = [
    { name: "BGMI Tournament", description: "Battle Royale gaming tournament..." },
    { name: "Chess Mania", description: "Competitive chess tournament..." },
    { name: "Valorant", description: "5v5 tactical shooter tournament..." },
  ];

  // Open the modal with the selected event
  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <Section>
      {/* <Header/> //Removed Header Component as the EventLanding/Hero component is acting as the Header */}
      <EventsLanding flagshipEventsRef={flagshipEventsRef} />
      <div className="min-h-screen text-white px-5 py-10">
        <div className={`max-w-7xl mx-auto ${isModalOpen ? "pointer-events-none" : ""}`}>
          {/* Flagship Events */}
          <section ref={flagshipEventsRef} id="flagship-events">
            <h1 className="text-4xl font-bold mb-6 text-center">Flagship Events</h1>
            <br />
            <br />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flagshipEvents.map((event, index) => (
  <div key={index} className="bg-n-6 p-5 rounded-xl shadow-lg flex flex-col">
    {/* Display Image */}
    <div className="h-67 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
      <img
        src={event.image} // Dynamically loads the image
        alt={event.name}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
    {/* Buttons */}
    <div className="mt-auto flex flex-col gap-2">
      <CustomGradientButton onClick={() => openModal(event)}>
        View
      </CustomGradientButton>
      <CustomGradientButton>Register</CustomGradientButton>
    </div>
  </div>
))}

            </div>
          </section>
          <br />
          <br />

          {/* General Events */}
          <section className="mt-16">
            <h1 className="text-4xl font-bold mb-6 text-center">General Events</h1>
            <br />
            <br />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {generalEvents.map((event, index) => (
                <div key={index} className="bg-n-6 p-5 rounded-xl shadow-lg flex flex-col">
                  <div className="h-48 bg-n-4 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-lg">Image Placeholder</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
                  {/* Buttons with custom gradient border (right side remains normal) */}
                  <div className="mt-auto flex flex-col gap-2">
                    <CustomGradientButton onClick={() => openModal(event)}>
                      View
                    </CustomGradientButton>
                    <CustomGradientButton>Register</CustomGradientButton>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <br />
          <br />

          {/* Gaming Events */}
          <section className="mt-16">
            <h1 className="text-4xl font-bold mb-6 text-center">Gaming Events</h1>
            <br />
            <br />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gamingEvents.map((event, index) => (
                <div key={index} className="bg-n-6 p-5 rounded-xl shadow-lg flex flex-col">
                  <div className="h-48 bg-n-4 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-lg">Image Placeholder</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
                  {/* Buttons with custom gradient border (right side remains normal) */}
                  <div className="mt-auto flex flex-col gap-2">
                    <CustomGradientButton onClick={() => openModal(event)}>
                      View
                    </CustomGradientButton>
                    <CustomGradientButton>Register</CustomGradientButton>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        {isModalOpen && selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-5 z-50">
            <div className="bg-[#0c0215] text-white p-6 rounded-lg w-full max-w-lg shadow-lg relative">
              <h2 className="text-white text-3xl font-bold mb-3">{selectedEvent.name}</h2>
              <p className="text-white">{selectedEvent.description}</p>
              <div className="mt-4 flex justify-end">
                <Button
                  onClick={closeModal}
                  className="text-black py-2 px-4 rounded-lg font-bold transition"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
