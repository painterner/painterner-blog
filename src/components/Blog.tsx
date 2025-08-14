import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: {
        zh: '从DNN到Transformer：AI发展的亲历者感悟',
        en: 'From DNN to Transformer: Insights from an AI Development Witness'
      },
      excerpt: {
        zh: '作为见证了深度学习从DNN、CNN到Transformer全过程的开发者，分享一些个人感悟...',
        en: 'As a developer who witnessed the entire journey from DNN, CNN to Transformer, sharing some personal insights...'
      },
      date: '2024-01-15',
      tags: ['AI', 'Deep Learning', 'Transformer'],
      readTime: '5 min'
    },
    {
      title: {
        zh: '独立开发者的现实：微薄收入下的技术坚持',
        en: 'Reality of Independent Developers: Technical Persistence Under Minimal Income'
      },
      excerpt: {
        zh: '开发了多个项目却几乎无收入，但为什么还要继续？聊聊独立开发者的现实与坚持...',
        en: 'Developed multiple projects with almost no income, but why continue? Talking about the reality and persistence of independent developers...'
      },
      date: '2024-01-10',
      tags: ['Independent Dev', 'Startup', 'Personal'],
      readTime: '7 min'
    },
    {
      title: {
        zh: '嵌入式开发到Web全栈：技术栈演进之路',
        en: 'From Embedded Development to Full-Stack Web: The Technology Stack Evolution'
      },
      excerpt: {
        zh: '从STM32、ESP32等嵌入式开发到React、Astro等现代Web技术，分享技术栈转换的心得...',
        en: 'From embedded development with STM32, ESP32 to modern web technologies like React, Astro, sharing insights on technology stack transition...'
      },
      date: '2024-01-05',
      tags: ['Embedded', 'Web Development', 'Career'],
      readTime: '6 min'
    },
    {
      title: {
        zh: 'AI时代的硬件思考：从传统芯片到智能设备',
        en: 'Hardware Thinking in the AI Era: From Traditional Chips to Smart Devices'
      },
      excerpt: {
        zh: '结合多年芯片开发经验，思考AI时代硬件发展的趋势和机遇...',
        en: 'Combining years of chip development experience, reflecting on hardware development trends and opportunities in the AI era...'
      },
      date: '2023-12-28',
      tags: ['Hardware', 'AI', 'IoT'],
      readTime: '8 min'
    }
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            <span data-zh>技术博客</span>
            <span data-en>Tech Blog</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            <span data-zh>记录技术成长路径，分享开发心得与思考</span>
            <span data-en>Recording technical growth path, sharing development insights and reflections</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-slate-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  →
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                <span data-zh>{post.title.zh}</span>
                <span data-en>{post.title.en}</span>
              </h3>
              
              <p className="text-slate-300 mb-4 text-sm leading-relaxed line-clamp-3">
                <span data-zh>{post.excerpt.zh}</span>
                <span data-en>{post.excerpt.en}</span>
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs hover:bg-slate-700 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="text-3xl mb-3">📝</div>
            <p className="text-slate-300 mb-4">
              <span data-zh>更多精彩内容正在路上...</span>
              <span data-en>More exciting content is on the way...</span>
            </p>
            <p className="text-sm text-slate-400">
              <span data-zh>持续更新中，敬请期待！</span>
              <span data-en>Continuously updating, stay tuned!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
