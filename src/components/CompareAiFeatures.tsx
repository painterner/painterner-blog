import React from 'react';

const CompareAiFeatures: React.FC = () => {
  const features = [
    {
      title: '多模型支持',
      description: '支持GPT-4、Claude、Gemini、文心一言等主流AI模型',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '详细对比分析',
      description: '从价格、性能、准确率等多维度进行深入分析',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: '使用场景推荐',
      description: '根据不同需求推荐最适合的AI模型',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '实时价格监控',
      description: '跟踪各平台API价格变化，帮您选择最经济的方案',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: '离线数据查看',
      description: '下载后可离线查看模型对比数据，随时随地使用',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 12v1m1-6h-2m5-2a9 9 0 11-10 0" />
        </svg>
      ),
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: '定期更新',
      description: '定期更新AI模型信息，确保数据的准确性和时效性',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            为什么选择 
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent ml-2">
              Compare AI
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            专业的AI模型对比工具，帮助您在众多AI选择中找到最适合的解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 text-white group-hover:shadow-lg transition-shadow duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Screenshots section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            应用截图
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <div className="aspect-[9/16] bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                  <div className="text-slate-400 text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">应用截图 {index}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareAiFeatures;
