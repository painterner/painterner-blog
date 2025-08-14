import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/50">
      <div className="max-w-5xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="font-bold text-white">
            <span data-zh>Painterner</span>
            <span data-en>Painterner</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">
              <span data-zh>故事</span>
              <span data-en>Story</span>
            </a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors">
              <span data-zh>作品</span>
              <span data-en>Work</span>
            </a>
            <a href="#experience" className="text-slate-300 hover:text-white transition-colors">
              <span data-zh>历程</span>
              <span data-en>Journey</span>
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
              <span data-zh>聊聊</span>
              <span data-en>Chat</span>
            </a>
          </div>
          
          <button 
            id="mobile-menu-toggle"
            className="md:hidden text-slate-300 hover:text-white"
          >
            ☰
          </button>
        </div>
        
        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden mt-3 pt-3 border-t border-slate-700">
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors py-1">
              <span data-zh>我的故事</span>
              <span data-en>My Story</span>
            </a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors py-1">
              <span data-zh>做过什么</span>
              <span data-en>My Work</span>
            </a>
            <a href="#experience" className="text-slate-300 hover:text-white transition-colors py-1">
              <span data-zh>技术历程</span>
              <span data-en>Journey</span>
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors py-1">
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
