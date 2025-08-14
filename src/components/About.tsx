import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            <span data-zh>关于我</span>
            <span data-en>About Me</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div data-zh className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                我是一名<strong className="text-white">全栈独立开发者</strong>，同时也是一名<strong className="text-white">AI应用研究与开发者</strong>和<strong className="text-white">电子工程师</strong>。
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                作为从<strong className="text-blue-400">DNN、CNN到Transformer</strong>的见证者，以及从<strong className="text-purple-400">Diffusion Model到LLM</strong>的持续关注者，我一直在探索AI技术的前沿。
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                我曾设想过<strong className="text-green-400">全自动OCR识别</strong>、<strong className="text-green-400">桌面机器人</strong>、<strong className="text-green-400">自动提醒呼叫机</strong>等创新项目。
              </p>
            </div>
            
            <div data-en className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I am a <strong className="text-white">full-stack independent developer</strong>, also an <strong className="text-white">AI application researcher and developer</strong>, and an <strong className="text-white">electronics engineer</strong>.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                As a witness to the journey from <strong className="text-blue-400">DNN, CNN to Transformer</strong>, and a continuous follower from <strong className="text-purple-400">Diffusion Models to LLM</strong>, I've been exploring the frontiers of AI technology.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I've envisioned innovative projects like <strong className="text-green-400">fully automated OCR recognition</strong>, <strong className="text-green-400">desktop robots</strong>, and <strong className="text-green-400">automatic reminder calling systems</strong>.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                <span data-zh>Web & 移动开发</span>
                <span data-en>Web & Mobile Development</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Astro', 'TypeScript', 'Android', 'Flutter'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                <span data-zh>AI & 机器学习</span>
                <span data-en>AI & Machine Learning</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Transformer', 'LLM', 'Diffusion', 'CNN', 'DNN', 'OCR'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                <span data-zh>硬件 & 嵌入式</span>
                <span data-en>Hardware & Embedded</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {['STM32', 'ESP32', 'ATmega', 'Raspberry Pi', 'BLE', 'WiFi', '4G'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
