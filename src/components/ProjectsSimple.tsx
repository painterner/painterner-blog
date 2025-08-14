import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'SSH-Y Proxy',
      description: { zh: 'Android SSH代理，大学时的作品', en: 'Android SSH proxy, college project' },
      tech: 'Android, Java',
      icon: '📱'
    },
    {
      name: 'couples.com',
      description: { zh: '情侣社交平台，用户不多😂', en: 'Couples platform, not many users😂' },
      tech: 'React, Node.js',
      icon: '💕'
    },
    {
      name: 'qtelogo.com',
      description: { zh: 'AI生成Logo工具', en: 'AI logo generator tool' },
      tech: 'AI, React',
      icon: '🎨'
    },
    {
      name: 'jellyvai.com',
      description: { zh: 'AI应用平台，还在摸索中', en: 'AI platform, still exploring' },
      tech: 'AI, LLM',
      icon: '🤖'
    },
    {
      name: '桌面机器人',
      description: { zh: '想做个能聊天的小机器人', en: 'Want to make a chatting robot' },
      tech: '硬件, AI',
      icon: '🤖'
    },
    {
      name: '自动OCR',
      description: { zh: '识别一切文字的想法', en: 'Idea to recognize all text' },
      tech: 'AI, OCR',
      icon: '👁️'
    }
  ];

  return (
    <section id="projects" className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
          <span data-zh>我做过的小东西</span>
          <span data-en>Things I've Built</span>
        </h2>
        <p className="text-center text-slate-400 mb-8">
          <span data-zh>有些能用，有些还在想象中。收入嘛...咱就不提了😅</span>
          <span data-en>Some work, some are still in imagination. About income... let's not talk about that😅</span>
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800/30 rounded-lg p-4 hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-2xl">{project.icon}</div>
              </div>
              
              <h3 className="font-semibold mb-2 text-white">
                {project.name}
              </h3>
              
              <p className="text-sm text-slate-300 mb-3">
                <span data-zh>{project.description.zh}</span>
                <span data-en>{project.description.en}</span>
              </p>
              
              <div className="text-xs text-slate-400">
                {project.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
