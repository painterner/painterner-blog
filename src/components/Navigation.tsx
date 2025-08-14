import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            <span data-zh>代码爱好者</span>
            <span data-en>Code Lover</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>我的故事</span>
              <span data-en>My Story</span>
            </a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>做过什么</span>
              <span data-en>My Work</span>
            </a>
            <a href="#experience" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>技术历程</span>
              <span data-en>Journey</span>
            </a>
            <a href="#blog" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>随想</span>
              <span data-en>Thoughts</span>
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>聊聊</span>
              <span data-en>Chat</span>
            </a>
          </div>
          
          <button 
            id="mobile-menu-toggle"
            className="md:hidden text-slate-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden mt-4 py-4 border-t border-slate-700">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>我的故事</span>
              <span data-en>My Story</span>
            </a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>做过什么</span>
              <span data-en>My Work</span>
            </a>
            <a href="#experience" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>技术历程</span>
              <span data-en>Journey</span>
            </a>
            <a href="#blog" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>随想</span>
              <span data-en>Thoughts</span>
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>聊聊</span>
              <span data-en>Chat</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
