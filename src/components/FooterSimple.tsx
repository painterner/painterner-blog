import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-slate-700/50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="font-bold mb-2 text-white">
              <span data-zh>Painterner</span>
              <span data-en>Painterner</span>
            </h3>
            <p className="text-sm text-slate-400">
              <span data-zh>喜欢写代码，喜欢折腾硬件，对AI充满好奇。</span>
              <span data-en>Love coding, enjoy tinkering with hardware, curious about AI.</span>
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-white">
              <span data-zh>技术栈</span>
              <span data-en>Tech Stack</span>
            </h4>
            <div className="text-sm text-slate-400 space-y-1">
              <div>React • Astro • TypeScript</div>
              <div>STM32 • ESP32 • AI/ML</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-white">
              <span data-zh>快速链接</span>
              <span data-en>Links</span>
            </h4>
            <div className="text-sm space-y-1">
              <a href="#about" className="block text-slate-400 hover:text-white transition-colors">
                <span data-zh>故事</span>
                <span data-en>Story</span>
              </a>
              <a href="#projects" className="block text-slate-400 hover:text-white transition-colors">
                <span data-zh>作品</span>
                <span data-en>Work</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 pt-4 text-center">
          <p className="text-slate-400 text-sm mb-2">
            <span data-zh>"写代码很快乐，能分享更快乐 😊"</span>
            <span data-en>"Coding is joyful, sharing makes it even better 😊"</span>
          </p>
          <p className="text-slate-500 text-xs">
            <span data-zh>© 2024 用爱发电 • Astro + React</span>
            <span data-en>© 2024 Made with love • Astro + React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
