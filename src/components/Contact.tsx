import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          <span data-zh>聊聊呗</span>
          <span data-en>Let's Chat</span>
        </h2>
        
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          <span data-zh>
            做这些项目虽然没赚到什么钱，但交朋友总是好的！如果你也喜欢折腾技术，咱们可以聊聊~
          </span>
          <span data-en>
            Though these projects didn't make much money, making friends is always good! If you also love tinkering with tech, let's chat~
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
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            <span data-zh>一起探索有趣的技术</span>
            <span data-en>Explore Interesting Tech Together</span>
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            <span data-zh>
              "代码改变世界，也改变了我的生活。虽然目前还没有大富大贵，但每天都在学新东西，这就很棒啦！"
            </span>
            <span data-en>
              "Code changes the world and changed my life too. Though I'm not rich yet, learning new things every day is pretty awesome!"
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
