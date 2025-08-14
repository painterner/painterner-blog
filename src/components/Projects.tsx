import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'SSH-Y Proxy',
      type: 'Android App',
      description: {
        zh: '大学时做的Android SSH代理，当时觉得很酷',
        en: 'Android SSH proxy I made in college, thought it was cool at the time'
      },
      tech: ['Android', 'Java', 'SSH'],
      status: 'deployed',
      icon: '📱'
    },
    {
      name: 'couples.com',
      type: 'Web Platform',
      description: {
        zh: '想做个情侣社交平台，结果...用户不多😂',
        en: 'Wanted to make a couples social platform, but...not many users😂'
      },
      tech: ['React', 'Node.js', 'Database'],
      status: 'deployed',
      icon: '💕'
    },
    {
      name: 'getlighter.paintermer.me',
      type: 'Web Service',
      description: {
        zh: '一些小工具的集合，偶尔有人用',
        en: 'Collection of small tools, occasionally someone uses them'
      },
      tech: ['Web', 'API', 'Tools'],
      status: 'deployed',
      icon: '🔧'
    },
    {
      name: 'qtelogo.com',
      type: 'Logo Generator',
      description: {
        zh: '用AI生成Logo，觉得挺有意思的',
        en: 'AI logo generator, think it\'s quite interesting'
      },
      tech: ['AI', 'React', 'Design'],
      status: 'deployed',
      icon: '🎨'
    },
    {
      name: 'jellyvai.com',
      type: 'AI Platform',
      description: {
        zh: '想做个AI应用平台，还在摸索中',
        en: 'Want to make an AI application platform, still exploring'
      },
      tech: ['AI', 'LLM', 'Platform'],
      status: 'deployed',
      icon: '🤖'
    },
    {
      name: '自动OCR识别',
      type: '脑洞项目',
      description: {
        zh: '想做个全自动OCR，识别一切文字！',
        en: 'Want to make fully automated OCR to recognize all text!'
      },
      tech: ['AI', 'OCR', 'Automation'],
      status: 'concept',
      icon: '👁️'
    },
    {
      name: '桌面小机器人',
      type: '脑洞项目',
      description: {
        zh: '桌上放个小机器人，能聊天能提醒，多好！',
        en: 'A small robot on the desk that can chat and remind, how nice!'
      },
      tech: ['Robotics', 'AI', 'Hardware'],
      status: 'concept',
      icon: '🤖'
    },
    {
      name: '智能提醒助手',
      type: '脑洞项目',
      description: {
        zh: '自动打电话提醒重要事情，听起来就很棒',
        en: 'Automatically call to remind important things, sounds great'
      },
      tech: ['IoT', 'AI', 'Communication'],
      status: 'concept',
      icon: '📞'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-800/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            <span data-zh>我做过的小东西</span>
            <span data-en>Things I've Built</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            <span data-zh>有些能用，有些还在想象中。收入嘛...咱就不提了😅</span>
            <span data-en>Some work, some are still in imagination. About income... let's not talk about that😅</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{project.icon}</div>
                <div className={`px-3 py-1 rounded-lg text-xs font-medium ${
                  project.status === 'deployed' 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'bg-orange-500/20 text-orange-300'
                }`}>
                  {project.status === 'deployed' ? 
                    (<span><span data-zh>能用</span><span data-en>Works</span></span>) : 
                    (<span><span data-zh>想法</span><span data-en>Idea</span></span>)
                  }
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              
              <p className="text-sm text-slate-400 mb-3">{project.type}</p>
              
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                <span data-zh>{project.description.zh}</span>
                <span data-en>{project.description.en}</span>
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
