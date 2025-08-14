import React from 'react';

const Experience: React.FC = () => {
  const timeline = [
    { year: '2010s', event: { zh: '大学接触编程，写第一行Hello World', en: 'Started programming in college, first Hello World' } },
    { year: '2015+', event: { zh: '开始做硬件工程师，接触各种芯片', en: 'Started as hardware engineer, worked with various chips' } },
    { year: '2017+', event: { zh: '见证Transformer出现，AI开始爆发', en: 'Witnessed Transformer emergence, AI boom begins' } },
    { year: '2020+', event: { zh: '做了几个小项目，开始全栈开发', en: 'Built some projects, started full-stack development' } },
    { year: '2022+', event: { zh: 'ChatGPT出现，LLM时代来临', en: 'ChatGPT appeared, LLM era arrived' } },
    { year: '现在', event: { zh: '继续折腾，继续学习 😊', en: 'Keep tinkering, keep learning 😊' } }
  ];

  const skills = [
    { category: { zh: '编程语言', en: 'Languages' }, items: 'JavaScript, TypeScript, Python, C/C++, Java' },
    { category: { zh: 'Web技术', en: 'Web Tech' }, items: 'React, Astro, Node.js, HTML/CSS' },
    { category: { zh: 'AI相关', en: 'AI Related' }, items: 'TensorFlow, PyTorch, OpenAI API, ML' },
    { category: { zh: '硬件平台', en: 'Hardware' }, items: 'STM32, ESP32, Raspberry Pi, Arduino' }
  ];

  return (
    <section id="experience" className="py-12 px-6 bg-slate-800/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
          <span data-zh>技术历程</span>
          <span data-en>Tech Journey</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Timeline */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              <span data-zh>时间线</span>
              <span data-en>Timeline</span>
            </h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-16 text-sm text-slate-400 font-medium flex-shrink-0">
                    {item.year}
                  </div>
                  <div className="text-slate-300 text-sm">
                    <span data-zh>{item.event.zh}</span>
                    <span data-en>{item.event.en}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">
              <span data-zh>技能树</span>
              <span data-en>Skills</span>
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-800/30 rounded-lg p-3">
                  <h4 className="font-medium text-white mb-1">
                    <span data-zh>{skill.category.zh}</span>
                    <span data-en>{skill.category.en}</span>
                  </h4>
                  <p className="text-sm text-slate-300">{skill.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-slate-800/30 rounded-lg p-4">
            <div className="text-2xl mb-2">💡</div>
            <p className="text-slate-300 text-sm">
              <span data-zh>
                "从写Hello World到现在，每一步都充满好奇。技术在变，但学习的乐趣永远不变。"
              </span>
              <span data-en>
                "From Hello World to now, every step filled with curiosity. Technology changes, but the joy of learning never does."
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
