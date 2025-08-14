import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              <span data-zh>全栈独立开发者</span>
              <span data-en>Full-Stack Developer</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              <span data-zh>
                专注于AI应用开发与嵌入式系统设计，持续探索技术前沿。
              </span>
              <span data-en>
                Focused on AI application development and embedded system design, continuously exploring technological frontiers.
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
                <span data-zh>关于我</span>
                <span data-en>About</span>
              </a>
              <a href="#projects" className="block text-slate-400 hover:text-white transition-colors duration-200">
                <span data-zh>项目展示</span>
                <span data-en>Projects</span>
              </a>
              <a href="#blog" className="block text-slate-400 hover:text-white transition-colors duration-200">
                <span data-zh>技术博客</span>
                <span data-en>Blog</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 pt-8 text-center">
          <p className="text-slate-400 text-sm mb-4">
            <span data-zh>
              "虽然收入微薄，但技术探索的热情从未减退 🚀"
            </span>
            <span data-en>
              "Though income is minimal, the passion for technological exploration never fades 🚀"
            </span>
          </p>
          <p className="text-slate-500 text-xs">
            <span data-zh>© 2024 个人作品集. 使用 Astro + React + Tailwind CSS 构建</span>
            <span data-en>© 2024 Personal Portfolio. Built with Astro + React + Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
