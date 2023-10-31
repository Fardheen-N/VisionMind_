import React from 'react';

function Domain({setDomain}) {
    const handleButtonHover = event => {
        event.target.style.backgroundColor = 'red'; // Change to red when hovered
      };
      const handleButtonLeave = event => {
        event.target.style.backgroundColor = 'transparent'; // Reset when not hovered
      };
      // const history = useHistory();

  const handleClick =  (domain) => {
    console.log(domain)
    setDomain(domain)

   };
  return (
    <div className="flex-col justify-center items-center h-screen p-10">
      <div>
        <p className="text-3xl font-bold text-center flex justify-center items-center mt-3 lg:mt-0">CHOOSE YOUR DOMAIN</p>
      </div>
      <div className="pb-0 mb-0 lg:pb-0 lg:mb-0">
        <p className=" min-h-[100px] text-2xl font-bold text-center flex justify-center items-center">EXCLUSIVE COMPUTER SCIENCE COURSES ON VISION MINDS</p>
        <p className="text-3xl text-center">Learn programming languages and concepts to prepare for a career in<br />software development<br /><br /></p>
      </div>
      <div className="inline-block  justify-center items-center mt-6 lg:mt-3 pb-1 lg:me-0 lg:pe-5 lg:ps-5 space-x-3 space-y-2">
        <button className="border rounded-full border-2 border-dark px-5 py-2 hover:animate-pulse" onClick={() => handleClick('full stack')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">Full Stack</button>
        <button className="border rounded-full border-2 border-dark px-5 py-2 hover:animate-pulse" onClick={() => handleClick('AI and ML')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">AI & ML</button>
        <button className="border rounded-full border-2 border-dark px-5 py-2 hover:animate-pulse" onClick={() => handleClick('Cyber security')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">CYBER SECURITY</button>
        <button className="border rounded-full border-2 border-dark px-5 py-2 hover:animate-pulse" onClick={() => handleClick('networking')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">NETWORKING</button>
        <button className="border rounded-full border-2 border-dark px-5 py-2 hover:animate-pulse" onClick={() => handleClick('python')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">PYTHON</button>
        <button className="border rounded-full border-2 border-dark px-5 py-2 hover:animate-pulse" onClick={() => handleClick('javascript')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">JAVASCRIPT</button>
        <button className="border rounded-full border-2 border-dark px-4 py-2 lg:px-5 lg:py-2 mt-3 hover:animate-pulse" onClick={() => handleClick('java')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">JAVA</button>
        <button className="border rounded-full border-2 border-dark px-4 py-2 lg:px-5 lg:py-2 mt-3 lg:mt-0 hover:animate-pulse" onClick={() => handleClick('ui designing')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">UI DESIGNING</button>
        <button className="border rounded-full border-2 border-dark px-4 py-2 lg:px-5 lg:py-2 mt-3 lg:mt-0 hover:animate-pulse" onClick={() => handleClick('HTML and CSS')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">HTML & CSS</button>
        <button className="border rounded-full border-2 border-dark px-4 py-2 lg:px-5 lg:py-2 mt-3 lg:mt-0 hover:animate-pulse" onClick={() => handleClick('Ethical hacking')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">ETHICAL HACKING</button>
        <button className="border rounded-full border-2 border-dark px-4 py-2 lg:px-5 lg:py-2 mt-3 lg:mt-0 hover:animate-pulse" onClick={() => handleClick('game development')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">GAME DEVELOPMENT</button>
        <button className="border rounded-full border-2 border-dark px-4 py-2 lg:px-5 lg:py-2 mt-3 lg:mt-0 hover:animate-pulse" onClick={() => handleClick('data structure')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">DATA STRUCTURES</button>
        <button className="border rounded-full border-2 border-dark px-4 py-2 lg:px-5 lg:py-2 mt-3 lg:mt-0 hover:animate-pulse" onClick={() => handleClick('adobe XD')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">ADOBE XD</button>
        <button className="border rounded-full border-2 border-dark px-4 py-2 lg:px-5 lg:py-2 mt-3 lg:mt-0 hover:animate-pulse" onClick={() => handleClick('blockchain')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">BLOCKCHAIN</button>
        <button className="border rounded-full border-2 border-dark px-4 py-2 lg:px-5 lg:py-2 mt-3 lg:mt-0 hover:animate-pulse" onClick={() => handleClick('data science')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">DATA SCIENCE</button>
        <button className="border rounded-full border-2 border-dark px-4 py-2 lg:px-5 lg:py-2 mt-3 lg:mt-0 hover:animate-pulse" onClick={() => handleClick('cloud computing')} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} type="button">CLOUD COMPUTING</button>
      </div>
    </div>

  );
}

export default Domain;