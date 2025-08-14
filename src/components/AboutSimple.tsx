import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 px-6 bg-slate-800/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
          <span data-zh>我的故事</span>
          <span data-en>My Story</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div data-zh>
              <p className="text-slate-300 leading-relaxed mb-3">
                嗨！我是一个喜欢折腾的人。白天可能在调试STM32的寄存器，晚上可能在写React组件。
              </p>
              <p className="text-slate-300 leading-relaxed mb-3">
                从大学接触编程开始，我就被这个能让想法变成现实的魔法深深吸引了。后来做硬件工程师，发现从底层芯片到上层应用，每一层都有无穷的乐趣。
              </p>
              <p className="text-slate-300 leading-relaxed">
                做了几个项目，说实话收入不多😅，但过程很快乐。
              </p>
            </div>
            
            <div data-en>
              <p className="text-slate-300 leading-relaxed mb-3">
                Hi! I'm someone who loves to tinker. During the day I might be debugging STM32 registers, at night writing React components.
              </p>
              <p className="text-slate-300 leading-relaxed mb-3">
                Since I started programming in college, I've been deeply fascinated by this magic that turns ideas into reality. Later working as a hardware engineer, I discovered endless fun from low-level chips to high-level applications.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Made several projects, honestly the income isn't much😅, but the process has been joyful.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-800/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-blue-400">
                <span data-zh>Web开发</span>
                <span data-en>Web Dev</span>
              </h3>
              <div className="text-sm text-slate-300">React, Astro, TypeScript, Node.js</div>
            </div>
            
            <div className="bg-slate-800/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-purple-400">
                <span data-zh>AI技术</span>
                <span data-en>AI Tech</span>
              </h3>
              <div className="text-sm text-slate-300">DNN, CNN, Transformer, LLM, OCR</div>
            </div>
            
            <div className="bg-slate-800/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-green-400">
                <span data-zh>硬件开发</span>
                <span data-en>Hardware</span>
              </h3>
              <div className="text-sm text-slate-300">STM32, ESP32, Raspberry Pi, BLE, WiFi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
