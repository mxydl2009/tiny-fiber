模拟React中fiber机制的工作原理
# 目录介绍
## src/react
- Component: 定义组件
- CreateElement: 创建虚拟DOM
- DOM：创建真实DOM和更新DOM
- reconciliation: 虚拟DOM -> fiber树 -> 真实DOM操作的过程，是fiber工作机制的核心
- Utils：工具方法
- index.js：React API统一导出
## src/index.js
用于测试的页面脚本
## babel.config.js
babel的配置文件
## server.js
简单的服务器