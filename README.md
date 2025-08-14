# 个人作品集网站

一个现代化的个人作品集网站，展示全栈开发、AI研究和嵌入式开发经验。

## 🚀 技术栈

- **前端框架**: Astro + React
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **部署**: Serverless (支持 Vercel, Netlify, GitHub Pages)

## ✨ 特性

- 🌍 中英文双语支持，自动检测语言
- 📱 完全响应式设计
- ⚡ 极速加载 (Astro 静态生成)
- 🎨 现代化 UI 设计
- 🔄 平滑动画效果
- 📝 博客系统
- 💼 项目展示
- 📞 联系方式

## 🛠️ 开发

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 📦 部署

### Vercel
1. 连接 GitHub 仓库到 Vercel
2. 自动部署，无需额外配置

### Netlify
1. 连接 GitHub 仓库到 Netlify
2. 设置构建命令: `npm run build`
3. 设置发布目录: `dist`

### GitHub Pages
1. 在仓库设置中启用 GitHub Pages
2. 使用 GitHub Actions 自动部署

## 🎨 自定义

### 修改个人信息
编辑各个组件文件中的内容：
- `src/components/Hero.tsx` - 首页展示
- `src/components/About.tsx` - 关于我
- `src/components/Projects.tsx` - 项目展示
- `src/components/Experience.tsx` - 技术经历
- `src/components/Blog.tsx` - 博客文章

### 修改样式
- `src/styles/global.css` - 全局样式
- 各组件内的 Tailwind CSS 类名

### 添加新页面
在 `src/pages/` 目录下创建新的 `.astro` 文件

## 📝 博客

博客文章目前为静态展示，可以扩展为：
- Markdown 文件系统
- 连接 CMS (如 Strapi, Contentful)
- 使用 Astro Content Collections

## 🌐 多语言

网站支持中英文切换：
- 自动检测浏览器语言
- 手动切换语言按钮
- 使用 `data-zh` 和 `data-en` 属性

## 📊 性能

- Lighthouse 评分: 95+
- 首屏加载时间: < 1s
- 静态生成，CDN 友好

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

*"虽然收入微薄，但技术探索的热情从未减退 🚀"*
