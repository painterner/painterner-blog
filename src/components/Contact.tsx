import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          <span data-zh>联系我</span>
          <span data-en>Get In Touch</span>
        </h2>
        
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          <span data-zh>
            虽然收入微薄，但我对技术的热情从未减退。如果你对我的项目或想法感兴趣，欢迎与我交流！
          </span>
          <span data-en>
            Though income is minimal, my passion for technology never fades. If you're interested in my projects or ideas, feel free to reach out!
          </span>
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              <span data-zh>邮箱</span>
              <span data-en>Email</span>
            </h3>
            <p className="text-slate-400 text-sm">
              <span data-zh>即将开放</span>
              <span data-en>Coming Soon</span>
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
            <div className="text-3xl mb-4">💼</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              <span data-zh>合作</span>
              <span data-en>Collaboration</span>
            </h3>
            <p className="text-slate-400 text-sm">
              <span data-zh>开放讨论</span>
              <span data-en>Open for Discussion</span>
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              <span data-zh>社交</span>
              <span data-en>Social</span>
            </h3>
            <p className="text-slate-400 text-sm">
              <span data-zh>敬请期待</span>
              <span data-en>Stay Tuned</span>
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            <span data-zh>持续探索中...</span>
            <span data-en>Continuous Exploration...</span>
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            <span data-zh>
              "虽然目前项目收入微薄，但技术探索的脚步从未停止。每一行代码、每一个创意，都是向未来迈进的一步。"
            </span>
            <span data-en>
              "Though current project revenue is minimal, the pace of technological exploration never stops. Every line of code, every creative idea, is a step towards the future."
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
