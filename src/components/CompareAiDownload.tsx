import React from 'react';

const CompareAiDownload: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            立即下载
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent ml-2">
              Compare AI
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            开始您的AI模型对比之旅，找到最适合您需求的AI解决方案
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {/* Google Play Button */}
            <a 
              href="#" 
              className="group bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl flex items-center space-x-3 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300">下载于</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>

            {/* Coming Soon for App Store */}
            <div className="group bg-gray-600 text-white px-6 py-3 rounded-xl flex items-center space-x-3 opacity-50 cursor-not-allowed">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">即将上线</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </div>
          </div>

          {/* Features Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">免费下载</h4>
                <p className="text-slate-400 text-sm">无需付费下载，免费试用次数</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">隐私保护</h4>
                <p className="text-slate-400 text-sm">不滥用个人信息，保护用户隐私</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">定期更新</h4>
                <p className="text-slate-400 text-sm">持续更新AI模型数据和功能</p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <a href="/compare-ai/privacy" className="hover:text-white transition-colors duration-200">
                隐私政策
              </a>
              <a href="/compare-ai/terms" className="hover:text-white transition-colors duration-200">
                服务条款
              </a>
              <a href="/compare-ai/delete-account" className="hover:text-white transition-colors duration-200">
                账号注销说明
              </a>
              <a href="mailto:me@painterner.me" className="hover:text-white transition-colors duration-200">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareAiDownload;
