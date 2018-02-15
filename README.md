# 快速创建微信小程序

介绍小程序编码所需的基本资源，不涉及 appId 的申请和应用发布。

## 涉及到的工具/库

1. [微信开发者工具(devtool)](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html)
2. [wepy框架](https://github.com/Tencent/wepy)
3. [WeUI for 小程序](https://github.com/Tencent/weui-wxss/)

参照 wepy 文档，可以快速创建一个种子项目，对 devtool 进行一些简单的配置，即可调试。

## wepy 带来对便利和麻烦

devtool 和 WeUI 的设计目标是原生的小程序，wepy 的设计目标是优化小程序的代码组织，提供更现代化的 js 编程环境。所以这三个工具/库之间不是非常地匹配。

devtool 提供构建和 wepy 提供的构建存在冲突，需要按照 wepy 文档对 devtool 进行一些配置。

WeUI 仅提供了样式文件，并没有按照 wepy 提供的方案对组件进行封装。要实现 WeUI 组件，需要书写 template 和 script 交互，并且需要注意 WeUI 例子中的 js 代码和 wepy 框架下的 js 代码的区别。

wepy 在代码组织上参考了 vue，可以将模板、脚本、样式书写在同一个文件中，很多细节上也做了类 vue 的处理（事件绑定，props 等）。在修改 view model 上做了很多改进，这里的实现和 angular 比较类似，可以在事件处理函数中直接修改数据，无需调用 setData 方法，在其他地方修改 vm，需要显式用 $apply 方法来通知框架发生了 vm 变化。

wepy 的这些改进，有时会带来一些困扰。vue 的风格和 vue 的实现是完全两回事，开发者的 vue 知识不能安全地应用到这里。wepy 在原生小程序上做的封装，有时会让开发者在原生开发文档和 wepy 文档之间无所适从，在 wepy 框架下使用原生小程序 api 可能会带来意外的效果。我在学习 wepy 的第二天遇到了[这个问题](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=2127667306&docid=000aeee8fa0ff8b934568d69e56400)，在此之前我认为 react 和 vue 我还掌握的不错。

## redux 问题

wepy 提供了 redux 状态管理方案，但是写法比较繁琐。我试图引入 dva-core 无果（会报运行时错误 maximum call stack size exceeded，可能底层发生了循环依赖）。我这里的建议是，如果对 redux 书写感到繁琐，应该减少 redux 的使用，该用页面/组件的内部状态。

## 感想

目前我认为小程序的开发体验还不够好，和 web 平台的差距非常大，还不及 react native 成熟。微信在小程序上试图发明新的编程语言（PL），包括 wxml、wxs 和 wxss，这是个不太好的做法。PL 是威力巨大的武器，在没有带来明显收益的情况下，增加了巨大的学习成本。和 react native 的 jsx 和 css in js 相比，我是不太认可微信的做法的。然后工具链上，还有很大的提升空间。这按照微信开发者工具的进化速度来看，这个问题应该会逐步得到解决。

如果微信能力不是刚需，我建议开发 webapp 而不是微信小程序，因为目前开发小程序可能会导致你脑袋疼。