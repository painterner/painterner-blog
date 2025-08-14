import React from 'react';

const Experience: React.FC = () => {
  const chipExperience = [
    'Atmel AVR', 'STM32', 'RTL8xxx', '8051', 'Linux',
    'BLE', 'WiFi', '4G', 'Tellink', 'EFR32MG21',
    'ATS2835', 'MediaTek', 'Raspberry Pi', 'ESP32'
  ];

  const aiJourney = [
    { 
      period: '2010s', 
      tech: 'DNN/CNN', 
      description: { 
        zh: '深度学习的起步阶段', 
        en: 'Early stage of deep learning' 
      } 
    },
    { 
      period: '2017+', 
      tech: 'Transformer', 
      description: { 
        zh: '注意力机制革命', 
        en: 'Attention mechanism revolution' 
      } 
    },
    { 
      period: '2020+', 
      tech: 'Diffusion Models', 
      description: { 
        zh: '生成式AI的突破', 
        en: 'Breakthrough in generative AI' 
      } 
    },
    { 
      period: '2022+', 
      tech: 'LLM Era', 
      description: { 
        zh: '大语言模型时代', 
        en: 'Large Language Model era' 
      } 
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            <span data-zh>技术历程</span>
            <span data-en>Tech Journey</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* AI Journey */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">
              <span data-zh>🧠 AI技术演进见证</span>
              <span data-en>🧠 AI Technology Evolution</span>
            </h3>
            
            <div className="space-y-6">
              {aiJourney.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="absolute left-1.5 top-5 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent last:hidden"></div>
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm font-medium">
                        {item.period}
                      </span>
                      <span className="text-lg font-semibold text-white">{item.tech}</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      <span data-zh>{item.description.zh}</span>
                      <span data-en>{item.description.en}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hardware Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              <span data-zh>⚡ 硬件开发经验</span>
              <span data-en>⚡ Hardware Development</span>
            </h3>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <p className="text-slate-300 mb-6 leading-relaxed">
                <span data-zh>
                  作为芯片开发电子工程师，我拥有丰富的嵌入式系统开发经验，涵盖从微控制器到通信模块的广泛领域。
                </span>
                <span data-en>
                  As a chip development electronics engineer, I have extensive embedded systems development experience, covering a wide range from microcontrollers to communication modules.
                </span>
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {chipExperience.map((chip) => (
                  <div 
                    key={chip}
                    className="px-3 py-2 bg-slate-700/50 rounded-lg text-center text-sm text-slate-300 hover:bg-slate-700 transition-colors duration-200"
                  >
                    {chip}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">
                <span data-zh>🚀 创新理念</span>
                <span data-en>🚀 Innovation Concepts</span>
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li data-zh>• 全自动OCR识别系统设计</li>
                <li data-en>• Fully automated OCR recognition system design</li>
                <li data-zh>• 智能桌面机器人概念</li>
                <li data-en>• Intelligent desktop robot concept</li>
                <li data-zh>• 自动提醒呼叫机方案</li>
                <li data-en>• Automatic reminder calling system solution</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="text-4xl mb-4">💡</div>
            <p className="text-lg text-slate-300 max-w-2xl">
              <span data-zh>
                "持续探索，永不止步。从传统硬件到现代AI，技术的每一次突破都激发着我前进的动力。"
              </span>
              <span data-en>
                "Continuous exploration, never stopping. From traditional hardware to modern AI, every technological breakthrough fuels my drive to move forward."
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
