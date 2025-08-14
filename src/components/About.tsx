import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            <span data-zh>我的故事</span>
            <span data-en>My Story</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div data-zh className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                嗨！我是一个喜欢折腾的人。白天可能在调试STM32的寄存器，晚上可能在写React组件。
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                从大学接触编程开始，我就被这个能让想法变成现实的魔法深深吸引了。后来做硬件工程师，发现从底层芯片到上层应用，每一层都有无穷的乐趣。
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                这些年见证了AI的快速发展 - 从早期的深度神经网络，到2017年Transformer的横空出世，再到现在的大语言模型时代。每一次突破都让我兴奋不已！
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                做了几个项目，说实话收入不多😅，但过程很快乐。比如那个SSH代理App、情侣网站，还有一些AI相关的小工具...
              </p>
            </div>
            
            <div data-en className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Hi! I'm someone who loves to tinker. During the day I might be debugging STM32 registers, at night writing React components.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Since I started programming in college, I've been deeply fascinated by this magic that turns ideas into reality. Later working as a hardware engineer, I discovered endless fun from low-level chips to high-level applications.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I've witnessed the rapid development of AI over the years - from early deep neural networks, to the emergence of Transformer in 2017, to the current era of large language models. Every breakthrough excites me!
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Made several projects, honestly the income isn't much😅, but the process has been joyful. Like that SSH proxy app, couples website, and some AI-related tools...
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
