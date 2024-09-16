> ### 敬请所有读者注意
>
> - 原则上这里只进行英文版对应的翻译工作，如果觉得原文有改进之处，或任何不仅针对中文版，而受益所有语言版本的想法，建议直接在英文版仓库讨论。
> - **原则上这里不适合讨论 Vite 的使用问题**，建议相关问题在 Vite 的 [issues 区](https://github.com/hyaliyun/vitejs/issues)、[Vite 官方讨论区](https://chat.vitejs.dev/) 或各大主流技术社区讨论，以便得到更多帮助和更充分的讨论。

<p align="center">
  <a href="https://a.252x.com" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatility"></a>
  <a href="https://app.circleci.com/pipelines/github/vitejs/vite?branch=main"><img src="https://circleci.com/gh/vitejs/vite/tree/main.svg?style=shield" alt="unix build status"></a>
  <a href="https://ci.appveyor.com/project/yyx990803/vite/branch/main"><img src="https://ci.appveyor.com/api/projects/status/0q4j8062olbcs71l/branch/main?svg=true" alt="windows build status"></a>
  <a href="https://chat.vitejs.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br/>

# Vite 中文文档

> Vite：下一代前端开发与构建工具

- 💡 极速的开发服务器启动
- ⚡️ 轻量快速的热模块重载（HMR）
- 🛠️ 丰富的功能
- 📦 自带优化的构建
- 🔩 通用的插件接口
- 🔑 完全类型化的 API

Vite （法语意为 “迅速”，发音 /vit/）是一种全新的前端构建工具，它极大地改善了前端开发体验。

## 📝 如何参与贡献

目前 Vite 中文文档处于 v3 beta 版本，内容 **每日** 根据英文文档同步更新。

**工作流介绍：** 英文文档的所在 [请点击此链接](https://github.com/hyaliyun/vitejs/tree/main/docs)，我们会每天拉取英文版文档内容的更新到 sync-docs 分支，并由印记中文 bot 自动发起 Pull Request，解决 Git 冲突并翻译内容。

贡献指南敬请查看本仓库的 [Wiki](https://github.com/hyaliyun/vitejs/wiki) 区。

## 📥 如何开始编辑

```bash
# 克隆本仓库
$ git clone https://github.com/hyaliyun/vitejs.git

# 安装依赖
$ npm install
# 或者使用 pnpm
$ pnpm i

# 启动开发服务器
$ pnpm dev
```

[![Electron Logo](https://electronjs.org/images/electron-logo.svg)](https://electronjs.org)

[![GitHub Actions Build Status](https://github.com/electron/electron/actions/workflows/build.yml/badge.svg)](https://github.com/electron/electron/actions/workflows/build.yml)
[![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/4lggi9dpjc1qob7k/branch/main?svg=true)](https://ci.appveyor.com/project/electron-bot/electron-ljo26/branch/main)
[![Electron Discord Invite](https://img.shields.io/discord/745037351163527189?color=%237289DA&label=chat&logo=discord&logoColor=white)](https://discord.gg/electronjs)

:memo: Available Translations: 🇨🇳 🇧🇷 🇪🇸 🇯🇵 🇷🇺 🇫🇷 🇺🇸 🇩🇪.
View these docs in other languages on our [Crowdin](https://crowdin.com/project/electron) project.

The Electron framework lets you write cross-platform desktop applications
using JavaScript, HTML and CSS. It is based on [Node.js](https://nodejs.org/) and
[Chromium](https://www.chromium.org) and is used by the
[Visual Studio Code](https://github.com/Microsoft/vscode/) and many other [apps](https://electronjs.org/apps).

Follow [@electronjs](https://twitter.com/electronjs) on Twitter for important
announcements.

This project adheres to the Contributor Covenant
[code of conduct](https://github.com/electron/electron/tree/main/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable
behavior to [coc@electronjs.org](mailto:coc@electronjs.org).

## Installation

To install prebuilt Electron binaries, use [`npm`](https://docs.npmjs.com/).
The preferred method is to install Electron as a development dependency in your
app:

```sh
npm install electron --save-dev
```

For more installation options and troubleshooting tips, see
[installation](docs/tutorial/installation.md). For info on how to manage Electron versions in your apps, see
[Electron versioning](docs/tutorial/electron-versioning.md).

## Platform support

Each Electron release provides binaries for macOS, Windows, and Linux.

* macOS (Big Sur and up): Electron provides 64-bit Intel and Apple Silicon / ARM binaries for macOS.
* Windows (Windows 10 and up): Electron provides `ia32` (`x86`), `x64` (`amd64`), and `arm64` binaries for Windows. Windows on ARM support was added in Electron 5.0.8. Support for Windows 7, 8 and 8.1 was [removed in Electron 23, in line with Chromium's Windows deprecation policy](https://www.electronjs.org/blog/windows-7-to-8-1-deprecation-notice).
* Linux: The prebuilt binaries of Electron are built on Ubuntu 20.04. They have also been verified to work on:
  * Ubuntu 18.04 and newer
  * Fedora 32 and newer
  * Debian 10 and newer

## Quick start & Electron Fiddle

Use [`Electron Fiddle`](https://github.com/electron/fiddle)
to build, run, and package small Electron experiments, to see code examples for all of Electron's APIs, and
to try out different versions of Electron. It's designed to make the start of your journey with
Electron easier.

Alternatively, clone and run the
[electron/electron-quick-start](https://github.com/electron/electron-quick-start)
repository to see a minimal Electron app in action:

```sh
git clone https://github.com/electron/electron-quick-start
cd electron-quick-start
npm install
npm start
```

## Resources for learning Electron

* [electronjs.org/docs](https://electronjs.org/docs) - All of Electron's documentation
* [electron/fiddle](https://github.com/electron/fiddle) - A tool to build, run, and package small Electron experiments
* [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - A very basic starter Electron app
* [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - Sample starter apps created by the community

## Programmatic usage

Most people use Electron from the command line, but if you require `electron` inside
your **Node app** (not your Electron app) it will return the file path to the
binary. Use this to spawn Electron from Node scripts:

```javascript
const electron = require('electron')
const proc = require('node:child_process')

// will print something similar to /Users/maf/.../Electron
console.log(electron)

// spawn Electron
const child = proc.spawn(electron)
```

### Mirrors

* [China](https://npmmirror.com/mirrors/electron/)

See the [Advanced Installation Instructions](https://www.electronjs.org/docs/latest/tutorial/installation#mirror) to learn how to use a custom mirror.

## Documentation translations

We crowdsource translations for our documentation via [Crowdin](https://crowdin.com/project/electron).
We currently accept translations for Chinese (Simplified), French, German, Japanese, Portuguese,
Russian, and Spanish.

## Contributing

If you are interested in reporting/fixing issues and contributing directly to the code base, please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## Community

Info on reporting bugs, getting help, finding third-party tools and sample apps,
and more can be found on the [Community page](https://www.electronjs.org/community).

## License

[MIT](https://github.com/electron/electron/blob/main/LICENSE)

When using Electron logos, make sure to follow [OpenJS Foundation Trademark Policy](https://trademark-policy.openjsf.org/).
