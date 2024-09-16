---
layout: home

title: Electron
titleTemplate: JavaScript, HTML, and CSS

hero:
  name: Electron
  text: JavaScript, HTML, and CSS
  tagline: Build cross-platform desktop apps
  image:
    src: /electronlogo.png
    alt: Vite
  actions:
    - theme: brand
      text: Started
      link: /guide/
    - theme: alt
      text: Why Electron？
      link: /guide/why
    - theme: alt
      text: View GitHub
      link: https://github.com/hyaliyun/electron
    - theme: brand
      text: ⚡ btcConf 24!
      link: https://www.543x.com

features:
  - icon: 💡
    title: Web Technologies
    details: Electron embeds Chromium and Node.js to enable web developers to create desktop applications.
  - icon: ⚡️
    title: Cross Platform
    details: Compatible with macOS, Windows, and Linux, Electron apps run on three platforms across all supported architectures.
  - icon: 🛠️
    title: Open Source
    details: Electron is an open source project maintained by the OpenJS Foundation and an active community of contributors.
  - icon: 📦
    title: Desktop development
    details: made easy Electron takes care of the hard parts so you can focus on the core of your application.
  - icon: 🔩
    title: Native graphical
    details: Interact with your operating system's interfaces with Electron's main process APIs. Customize your application window。
  - icon: 🔑
    title: Application installers
    details: Use community-supported tooling to generate platform-specific tooling like Apple Disk Image (.dmg) on macOS, Windows.
---


<script setup>
import { onMounted } from 'vue'
import { fetchReleaseTag } from './.vitepress/utils/fetchReleaseTag.js'

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('uwu') != null) {
    const img = document.querySelector('.VPHero .VPImage.image-src')
    img.src = '/logo-uwu.png'
    img.alt = 'Vite Kawaii Logo by @icarusgkx'
  }

  fetchReleaseTag()
})
</script>
