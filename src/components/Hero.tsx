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
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            你好，我是一名
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block mt-2">
              代码爱好者
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            喜欢写代码，喜欢折腾硬件，对AI充满好奇
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            从大学时的第一行Hello World到现在，<br/>
            见证了AI从DNN到Transformer的演进，<br/>
            虽然做的项目收入微薄，但依然热爱这份探索 ✨
          </p>
        </div>
        
        <div data-en className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hi, I'm a
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block mt-2">
              Code Enthusiast
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            Love coding, enjoy tinkering with hardware, curious about AI
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From my first "Hello World" in college to now,<br/>
            witnessed AI evolution from DNN to Transformer,<br/>
            though my projects earn little, I still love this exploration ✨
          </p>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-green-400">💻</span>
            <span className="text-sm">写代码是爱好</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-blue-400">�</span>
            <span className="text-sm">AI让我着迷</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-purple-400">⚡</span>
            <span className="text-sm">硬件也很有趣</span>
          </div>
        </div>
        
        <div className="mt-12">
          <a 
            href="#about" 
            className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-slate-600 hover:border-slate-500"
          >
            <span data-zh>看看我都做了什么</span>
            <span data-en>See what I've been up to</span>
            <span>😊</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
