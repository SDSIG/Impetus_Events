import Section from "./Section"
const AboutTheme = () => {
    return (
        <Section>
      <section className="text-white py-16 px-6 md:px-20 lg:px-40">
        <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-4xl font-bold mb-6">
            ABOUT THEME
          </h3><br/><br/>
          <h3 className="text-2xl md:text-2xl font-bold mb-6">
            Legacy Rebooted: Honouring the Past and Embracing the Future
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-justify">
            This profound theme embodies the essence of <strong>IMPETUS 25.0</strong>, a milestone event organized by IEEE UVCE.
            As we celebrate 25 years of excellence, innovation, and growth, we pay tribute to the remarkable journey that has brought us to where we are today.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mt-4 text-justify">
            We honor the pioneers, the trailblazers, and the visionaries who have shaped our legacy. Yet, even as we cherish our heritage, we recognize the imperative of embracing the future. The world is rapidly evolving, and the future belongs to those who are willing to learn, adapt, and innovate.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mt-4 text-justify">
            <strong>"Legacy Rebooted"</strong> is not just a theme; it's a mindset. It's about respecting our roots while embracing the possibilities of tomorrow. It's about harnessing the power of technology, creativity, and collaboration to create a brighter, more sustainable future.
          </p>
        </div>
      </section>
      </Section>
    );
  };
  
  export default AboutTheme;
  