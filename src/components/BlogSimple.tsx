import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: { zh: '从Hello World到现在', en: 'From Hello World to Now' },
      excerpt: { zh: '回顾编程路上的点点滴滴...', en: 'Looking back at the programming journey...' },
      date: '2024-01-15'
    },
    {
      title: { zh: '独立开发者的现实', en: 'Reality of Indie Dev' },
      excerpt: { zh: '没有收入的项目为什么还要做？', en: 'Why keep building projects with no income?' },
      date: '2024-01-10'
    },
    {
      title: { zh: '硬件到Web的转换', en: 'Hardware to Web Transition' },
      excerpt: { zh: '从STM32到React的心路历程...', en: 'Journey from STM32 to React...' },
      date: '2024-01-05'
    }
  ];

  return (
    <section id="blog" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
          <span data-zh>随想</span>
          <span data-en>Thoughts</span>
        </h2>
        <p className="text-center text-slate-400 mb-8">
          <span data-zh>记录一些技术感悟和生活随想</span>
          <span data-en>Recording some tech insights and life thoughts</span>
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="bg-slate-800/30 rounded-lg p-4 hover:bg-slate-800/50 transition-colors"
            >
              <div className="text-xs text-slate-400 mb-2">{post.date}</div>
              
              <h3 className="font-semibold mb-2 text-white">
                <span data-zh>{post.title.zh}</span>
                <span data-en>{post.title.en}</span>
              </h3>
              
              <p className="text-sm text-slate-300">
                <span data-zh>{post.excerpt.zh}</span>
                <span data-en>{post.excerpt.en}</span>
              </p>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-block bg-slate-800/30 rounded-lg p-4">
            <div className="text-2xl mb-2">📝</div>
            <p className="text-slate-300 text-sm">
              <span data-zh>更多内容正在路上...</span>
              <span data-en>More content coming...</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
