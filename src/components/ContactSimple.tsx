import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 px-6 bg-slate-800/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          <span data-zh>聊聊呗</span>
          <span data-en>Let's Chat</span>
        </h2>
        
        <p className="text-slate-400 mb-8">
          <span data-zh>
            做这些项目虽然没赚到什么钱，但交朋友总是好的！<br/>
            如果你也喜欢折腾技术，咱们可以聊聊~
          </span>
          <span data-en>
            Though these projects didn't make much money, making friends is always good!<br/>
            If you also love tinkering with tech, let's chat~
          </span>
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-slate-800/30 rounded-lg">
            <div className="text-2xl mb-2">📧</div>
            <h3 className="font-semibold mb-1 text-white">
              <span data-zh>邮箱</span>
              <span data-en>Email</span>
            </h3>
            <p className="text-sm text-slate-400">
              <span data-zh>即将开放</span>
              <span data-en>Coming Soon</span>
            </p>
          </div>
          
          <div className="p-4 bg-slate-800/30 rounded-lg">
            <div className="text-2xl mb-2">💼</div>
            <h3 className="font-semibold mb-1 text-white">
              <span data-zh>合作</span>
              <span data-en>Work</span>
            </h3>
            <p className="text-sm text-slate-400">
              <span data-zh>开放讨论</span>
              <span data-en>Open</span>
            </p>
          </div>
          
          <div className="p-4 bg-slate-800/30 rounded-lg">
            <div className="text-2xl mb-2">🌐</div>
            <h3 className="font-semibold mb-1 text-white">
              <span data-zh>社交</span>
              <span data-en>Social</span>
            </h3>
            <p className="text-sm text-slate-400">
              <span data-zh>敬请期待</span>
              <span data-en>Stay Tuned</span>
            </p>
          </div>
        </div>
        
        <div className="bg-slate-800/30 rounded-lg p-6">
          <div className="text-3xl mb-3">🎉</div>
          <p className="text-slate-300">
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
