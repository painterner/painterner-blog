import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            <span data-zh>全栈开发者</span>
            <span data-en>Full-Stack Dev</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>关于</span>
              <span data-en>About</span>
            </a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>项目</span>
              <span data-en>Projects</span>
            </a>
            <a href="#experience" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>经历</span>
              <span data-en>Experience</span>
            </a>
            <a href="#blog" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>博客</span>
              <span data-en>Blog</span>
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>联系</span>
              <span data-en>Contact</span>
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
              <span data-zh>关于</span>
              <span data-en>About</span>
            </a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>项目</span>
              <span data-en>Projects</span>
            </a>
            <a href="#experience" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>经历</span>
              <span data-en>Experience</span>
            </a>
            <a href="#blog" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>博客</span>
              <span data-en>Blog</span>
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">
              <span data-zh>联系</span>
              <span data-en>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
