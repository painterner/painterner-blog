import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              <span data-zh>代码爱好者</span>
              <span data-en>Code Enthusiast</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              <span data-zh>
                喜欢写代码，喜欢折腾硬件，对AI充满好奇。虽然收入不多，但每天都很充实。
              </span>
              <span data-en>
                Love coding, enjoy tinkering with hardware, curious about AI. Though income isn't much, every day is fulfilling.
              </span>
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              <span data-zh>技术栈</span>
              <span data-en>Tech Stack</span>
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div>React.js • Astro • TypeScript</div>
              <div>Node.js • Python • AI/ML</div>
              <div>STM32 • ESP32 • IoT</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              <span data-zh>快速链接</span>
              <span data-en>Quick Links</span>
            </h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-slate-400 hover:text-white transition-colors duration-200">
                <span data-zh>我的故事</span>
                <span data-en>My Story</span>
              </a>
              <a href="#projects" className="block text-slate-400 hover:text-white transition-colors duration-200">
                <span data-zh>做过什么</span>
                <span data-en>My Work</span>
              </a>
              <a href="#blog" className="block text-slate-400 hover:text-white transition-colors duration-200">
                <span data-zh>随想</span>
                <span data-en>Thoughts</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 pt-8 text-center">
          <p className="text-slate-400 text-sm mb-4">
            <span data-zh>
              "写代码很快乐，能分享更快乐 �"
            </span>
            <span data-en>
              "Coding is joyful, sharing makes it even better �"
            </span>
          </p>
          <p className="text-slate-500 text-xs">
            <span data-zh>© 2024 用爱发电的个人网站 • 用 Astro + React + Tailwind 做的</span>
            <span data-en>© 2024 Personal site made with love • Built with Astro + React + Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
