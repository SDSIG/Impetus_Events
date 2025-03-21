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
        className="relative z-10 w-full text-black py-2 px-4 rounded-lg font-bold text-xl transition bg-n-6"
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
};

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const flagshipEventsRef = useRef(null);

  const flagshipEvents = [
    {
      name: "CodeStorm",
      description:
        "CODESTORM is a dynamic coding competition designed to test problem-solving skills and drive technological excellence. Featuring diverse challenges that gauge proficiency, participants embark on an exciting journey of innovation and skill refinement. Be part of the experience—unleash your coding prowess and shape the future of tech!",
      image: "images/codestorm.jpeg",
      registerLink: "https://unstop.com/p/codestorm-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416111",
    },
    {
      name: "Mock Placements",
      description:
        "Mock placements give students a realistic simulation of actual placement drives, offering hands-on experience and valuable feedback to refine their interview skills.",
      image: "/images/mockpla.jpg",
      registerLink: "https://unstop.com/p/mock-placements-university-visvesvaraya-college-of-engineering-uvce-bangalore-1415207",
    },
    {
      name: "Silic-o-Hack",
      description:
        "Silic-O-Hack is a simulated hardware hackathon with two rounds utilizing mimetic software, challenging participants to tackle a real-world problem on TinkerCAD within a specified timeframe, employing creative solutions.",
      image: "/images/silic-o-hack.jpeg",
      registerLink: "https://unstop.com/p/silic-o-hack-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416147",
    },
    {
      name: "Hack-a-Maze",
      description:
        "Dive into Hack-A-Maze, an exciting challenge where you design an autonomous bot to navigate complex mazes independently. The fastest bot to reach the exit wins—test your skills and push the limits of automation!",
      image: "/images/hack-a-maze.jpeg",
      registerLink:"https://unstop.com/p/hack-a-maze-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416138",
    },
    {
      name: "Summit",
      description:
        "Summit is a dynamic and formal student parliament where participants harness creativity to develop optimal solutions for humanitarian challenges. Carefully structured, this event tackles critical global issues while driving strategic progress.",
      image: "/images/summit.jpeg",
      registerLink: "https://unstop.com/p/summit-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1418190",
    },
    {
      name: "Civicture",
      description:
        "Civicture is a dynamic platform where creativity meets precision in urban planning and design. CIVICTURE kicks off with a thrilling design competition, showcasing participants' innovative ideas, further on the stakes rise as contestants compete in a plan drawing competition, bringing their visions to life with meticulous detail. Join us in shaping the future of urban landscapes!",
      image: "/images/civictu.jpeg",
      registerLink: "https://unstop.com/p/civicture-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416109",
    },
    {
      name: "Brand IT",
      description:
        "Welcome to Brand It—where innovation meets strategy! Teams will build a brand from the ground up, designing logos, color schemes, product visuals, and packaging. Earn bonus points for compelling promotional materials in this multi-day showdown of creativity and competition. Get ready to brand like a pro!",
      image: "images/branditt.jpg",
      registerLink: "https://unstop.com/p/brand-it-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416098",
    },
    {
      name: "Mechronins",
      description:
        "This engaging three-part event features a mix of mechanical-related questions and presentations, making for a fun and interactive experience. Tighten your brain bolts and gear up for an exciting challenge!",
      image: "/images/mechr.jpeg",
      registerLink: "https://unstop.com/p/mechronins-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416143",
    },
    {
      name: "AvionX",
      description:
        "Gear up for an electrifying aerospace challenge that tests both creativity and technical expertise! The event begins with an engaging and interactive round filled with fun problem-solving elements. But the real test awaits in the next stage, where participants will take on a hands-on engineering challenge tailored to their domain. Working together, different disciplines will contribute their expertise to create a unified aerospace solution, making this a truly multidisciplinary and immersive experience!",
      image: "/images/aviox.jpeg",
      registerLink: "https://unstop.com/p/avionx-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416126",
    },
    {
      name: "Laser Tag",
      description:
        "Laser Tag is a high-energy event featuring advanced infrared guns and sensor vests. Players navigate a dynamic arena, strategically tagging opponents to score points electronically. With speed, precision, and tactical skill as the keys to victory, get ready for an adrenaline-fueled showdown!",
      image: "/images/lasertag.jpeg",
      registerLink: "https://unstop.com/p/laser-tag-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416090",
    },
  ];

  const generalEvents = [
    { name: "Brain Bids 2.0", description: "Experience the perfect fusion of quizzing and strategic bidding in BrainBids. Participants must bid wisely on questions, outthink their opponents, and put their knowledge to the test in a competitive yet engaging battle. Every bid is a gamble, and every question is a chance to rise to the top, making this an ultimate test of intellect and strategy",  registerLink: "https://unstop.com/p/brainbids-20-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416828", image: "images/brainbids.jpeg" },
    { name: "Escape Room: UVCE Edition", description: "Put your problem-solving skills to the test in this UVCE-themed escape room! Crack codes, solve puzzles, and race against time. Teams of 3 to 4 must uncover clues and escape before the clock runs out. Only the sharpest minds will make it out in time to claim exclusive prizes!", registerLink: "https://unstop.com/p/escape-room-uvce-edition-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416863", image: "images/escape.jpeg" },
    { name: "IPL Auction", description: "The IPL Auction is an exciting event where participants strategically bid and acquire players to build their dream team within a set budget, ensuring a thrilling competition from start to finish.", registerLink: "https://unstop.com/p/ipl-auction-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416870", image: "images/ipl.jpeg"},
    { name: "Synthetic Intelligence", description: "This isn’t just about the answer—it’s about HOW you get there! You’ll have 1 hour to solve a tricky question using AI tools like GPT-4 or Claude.The winner is the one with the best prompting strategy and problem-solving approach!", registerLink: "https://unstop.com/p/synthetic-intelligence-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416876", image: "images/synth.jpeg" },
    { name: "Tantragnyana Tarka", description: "ತಂತ್ರಜ್ಞಾನ ತರ್ಕ is a unique event in Kannada that blends cultural heritage with modern innovation. It features two exciting rounds – Kannada Decode, where participants decode cryptic Kannada phrases using logic and technology, and Bengaluru Debate, a high-energy discussion on the city’s technological evolution. Experience a blend of tradition and tech, unlike any other.", registerLink: "https://unstop.com/p/tantragyana-tarka-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416884", image: "images/tantratgy.jpeg" },
    { name: "DATA QUEST", description: "DataQuest is a two-round competition that challenges participants in data cleaning, SQL querying, and data visualisation. Teams will preprocess messy datasets, solve SQL challenges, and build insightful dashboards. Finalists will present their work, showcasing their analytical skills, problem-solving abilities, and storytelling through data.", registerLink: "https://unstop.com/p/dataquest-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416839", image: "/images/dataquest1.jpg" },
    {
      name: "The Time Traveler's Code",
      description: "The Time Traveler’s Code is an exciting fusion of pop culture, problem-solving, and programming. Travel through time, decode encrypted messages, solve legendary mysteries, and use AI to fix a broken timeline. Finalists must present their solutions to judges, explaining their logic and approach. A challenge for both logic lovers and tech enthusiasts!",
      registerLink: "https://unstop.com/p/the-time-travelers-code-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1416900",
      image: "images/timetrave.jpeg"
    },
    { name: "Think Tank", description: "Think Tank is a thrilling IoT-based event where innovation meets strategy. Teams will tackle real-world challenges through simulation and resource management, followed by a high-stakes bidding round influenced by stock market trends. Outsmart, outbid, and outthink your competition to claim victory!", registerLink: "https://unstop.com/p/think-tank-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1418135", image:"images/thinktank.jpeg" },
  ];

  const gamingEvents = [
    { name: "BGMI Tournament", description: "Battle Royale gaming tournament...", registerLink:"https://unstop.com/p/bgmi-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1418140", image: "images/gaming.jpeg" },
    { name: "Chess Mania", description: "Competitive chess tournament...", registerLink:"https://unstop.com/p/chessmania-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1418166", image: "images/gaming.jpeg" },
    { name: "Valorant", description: "5v5 tactical shooter tournament...", registerLink: "https://unstop.com/p/valorant-impetus-250-university-visvesvaraya-college-of-engineering-uvce-bangalore-1418158", image: "images/gaming.jpeg" },
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
                    <CustomGradientButton>
                      <a href={event.registerLink} target="_blank" rel="noopener noreferrer">Register</a>
                    </CustomGradientButton>
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
                  <div className="h-67 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={event.image} // Dynamically loads the image
                      alt={event.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
                  {/* Buttons with custom gradient border (right side remains normal) */}
                  <div className="mt-auto flex flex-col gap-2">
                    <CustomGradientButton onClick={() => openModal(event)}>
                      View
                    </CustomGradientButton>
                    <CustomGradientButton>
                      <a href={event.registerLink} target="_blank" rel="noopener noreferrer">Register</a>
                    </CustomGradientButton>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <br />
          <br />

          {/* Gaming Events */}
          <section className="mt-16 w-full flex flex-col items-center overflow-hidden">
            <h1 className="text-4xl font-bold mb-6 text-center">Gaming Events</h1>
            <div className="flex justify-center items-center w-full max-w-screen-lg gap-6 flex-wrap">
              {gamingEvents.map((event, index) => (
                <div key={index} className="bg-n-6 p-5 rounded-xl shadow-lg flex flex-col w-80">
                  <div className="h-67 rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src={event.image} // Dynamically loads the image
                      alt={event.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
                  <div className="mt-auto flex flex-col gap-2">
                    <CustomGradientButton onClick={() => openModal(event)}>View</CustomGradientButton>
                    <CustomGradientButton>
                      <a href={event.registerLink} target="_blank" rel="noopener noreferrer">Register</a>
                    </CustomGradientButton>
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
