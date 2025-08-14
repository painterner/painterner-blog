import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Language Toggle Button */}
        <button 
          id="lang-toggle"
          className="fixed top-20 right-6 px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded text-sm transition-colors duration-200 z-50"
        >
          中/EN
        </button>
        
        <div className="text-center mb-8">
          <div data-zh>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              你好，我是Painterner
            </h1>
            <p className="text-lg text-slate-300 mb-3">
              写代码 • 搞硬件 • 玩AI
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              从大学写第一行代码到现在，见证了AI从深度学习到大模型的发展。<br/>
              做了些小项目，虽然没赚到什么钱，但觉得挺有意思的。
            </p>
          </div>
          
          <div data-en>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Hi, I'm K
            </h1>
            <p className="text-lg text-slate-300 mb-3">
              Code • Hardware • AI
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Been coding since college, witnessed AI evolve from deep learning to large models.<br/>
              Made some small projects, didn't earn much money, but found it quite interesting.
            </p>
          </div>
        </div>
        
        {/* Quick Navigation Cards */}
        <div className="grid md:grid-cols-4 gap-3">
          <a href="#about" className="block p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors text-center">
            <div className="text-xl mb-1">📖</div>
            <div className="text-sm text-slate-300">
              <span data-zh>我的故事</span>
              <span data-en>My Story</span>
            </div>
          </a>
          <a href="#projects" className="block p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors text-center">
            <div className="text-xl mb-1">🛠️</div>
            <div className="text-sm text-slate-300">
              <span data-zh>做过什么</span>
              <span data-en>My Work</span>
            </div>
          </a>
          <a href="#experience" className="block p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors text-center">
            <div className="text-xl mb-1">🚀</div>
            <div className="text-sm text-slate-300">
              <span data-zh>技术历程</span>
              <span data-en>Journey</span>
            </div>
          </a>
          <a href="#contact" className="block p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors text-center">
            <div className="text-xl mb-1">💬</div>
            <div className="text-sm text-slate-300">
              <span data-zh>聊聊</span>
              <span data-en>Chat</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
