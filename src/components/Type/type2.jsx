import Typewriter from "typewriter-effect";

const TypeEffect = () => {
  const typewriterString = `
    I am a <span  style="color: red;" >UI/UX</span> Designer
  `;

  return (
    <div className="text-white text-[1.4rem] font-semibold new-font md:text-[3rem]">
      <Typewriter
        options={{
          strings: [typewriterString],
          autoStart: true,
          loop: true,
          delay: 300,
          deleteSpeed: 300,
        }}
      />
    </div>
  );
};

export default TypeEffect;
