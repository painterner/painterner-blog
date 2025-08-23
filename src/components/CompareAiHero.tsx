import React from 'react';

const CompareAiHero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* App Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl flex items-center justify-center shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 9.949 5.16-.21 9-4.399 9-9.949V7l-10-5zM12 4.31L20 8.32v8.68c0 4.07-2.88 7.129-7 7.42V4.31H12zM8 12h8v2H8v-2zm0-3h8v2H8V9z"/>
            </svg>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
              Compare AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            智能AI模型对比应用
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            一站式AI模型比较工具，让您轻松了解不同AI模型的特点、性能和适用场景。<br/>
            支持GPT、Claude、Gemini等主流AI模型的详细对比分析。
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">性能对比</h3>
            <p className="text-slate-400 text-sm">
              详细对比各AI模型的响应速度、准确率和处理能力
            </p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">实时更新</h3>
            <p className="text-slate-400 text-sm">
              及时跟进最新AI模型发布，保持信息的准确性和时效性
            </p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">简单易用</h3>
            <p className="text-slate-400 text-sm">
              直观的界面设计，无需专业知识即可轻松比较AI模型
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareAiHero;
