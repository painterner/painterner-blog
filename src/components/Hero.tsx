import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Language Toggle Button */}
        <button 
          id="lang-toggle"
          className="absolute top-0 right-0 mb-8 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 text-sm font-medium"
        >
          中/EN
        </button>
        
        <div data-zh className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            全栈独立开发者
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
            AI应用研究者 • 电子工程师
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            从DNN、CNN到Transformer的见证者<br/>
            从Diffusion Model到LLM的持续关注者<br/>
            探索技术边界，创造无限可能
          </p>
        </div>
        
        <div data-en className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Full-Stack Developer
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
            AI Researcher • Electronics Engineer
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Witness to the journey from DNN, CNN to Transformer<br/>
            Continuous follower from Diffusion Models to LLM<br/>
            Exploring tech boundaries, creating infinite possibilities
          </p>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-green-400">⚡</span>
            <span className="text-sm">React • Astro</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-blue-400">🧠</span>
            <span className="text-sm">AI • ML</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-purple-400">🔧</span>
            <span className="text-sm">Hardware • Embedded</span>
          </div>
        </div>
        
        <div className="mt-12">
          <a 
            href="#about" 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            <span data-zh>了解更多</span>
            <span data-en>Learn More</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
