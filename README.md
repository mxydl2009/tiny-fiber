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
# reconcile过程
## 构建fiber树
- 根据虚拟DOM树来构建fiber树，并记录fiber节点之间的关系，收集fiber节点到root fiber节点上
  - 首次渲染时，所有的fiber节点的effectTag都是placement，表示要添加到DOM上
  - 更新渲染时，新的fiber节点的effectTag是和旧fiber节点进行比对而来，可以是placement, update, delete等
## 真实DOM操作
- 根据fiber树中各fiber节点的effectTag和fiber节点之间的关系，做真实的DOM操作