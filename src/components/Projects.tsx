import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'SSH-Y Proxy',
      type: 'Android App',
      description: {
        zh: 'Android SSH代理应用',
        en: 'Android SSH proxy application'
      },
      tech: ['Android', 'Java', 'SSH'],
      status: 'deployed',
      icon: '📱'
    },
    {
      name: 'couples.com',
      type: 'Web Platform',
      description: {
        zh: '情侣社交平台',
        en: 'Couples social platform'
      },
      tech: ['React', 'Node.js', 'Database'],
      status: 'deployed',
      icon: '💕'
    },
    {
      name: 'getlighter.paintermer.me',
      type: 'Web Service',
      description: {
        zh: '轻量级工具服务',
        en: 'Lightweight utility service'
      },
      tech: ['Web', 'API', 'Tools'],
      status: 'deployed',
      icon: '🔧'
    },
    {
      name: 'qtelogo.com',
      type: 'Logo Generator',
      description: {
        zh: 'AI Logo生成器',
        en: 'AI logo generator'
      },
      tech: ['AI', 'React', 'Design'],
      status: 'deployed',
      icon: '🎨'
    },
    {
      name: 'jellyvai.com',
      type: 'AI Platform',
      description: {
        zh: 'AI应用平台',
        en: 'AI application platform'
      },
      tech: ['AI', 'LLM', 'Platform'],
      status: 'deployed',
      icon: '🤖'
    },
    {
      name: 'OCR Recognition System',
      type: 'Concept',
      description: {
        zh: '全自动OCR识别系统',
        en: 'Fully automated OCR recognition system'
      },
      tech: ['AI', 'OCR', 'Automation'],
      status: 'concept',
      icon: '👁️'
    },
    {
      name: 'Desktop Robot',
      type: 'Concept',
      description: {
        zh: '智能桌面机器人',
        en: 'Intelligent desktop robot'
      },
      tech: ['Robotics', 'AI', 'Hardware'],
      status: 'concept',
      icon: '🤖'
    },
    {
      name: 'Auto Reminder System',
      type: 'Concept',
      description: {
        zh: '自动提醒呼叫机',
        en: 'Automatic reminder calling system'
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
            <span data-zh>项目展示</span>
            <span data-en>Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            <span data-zh>虽然收入微薄，但持续探索的脚步从未停止</span>
            <span data-en>Though income is minimal, the journey of exploration never stops</span>
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
                    (<span><span data-zh>已部署</span><span data-en>Deployed</span></span>) : 
                    (<span><span data-zh>概念</span><span data-en>Concept</span></span>)
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
