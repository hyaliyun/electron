---
layout: page
title: Meet the Team
description: The development of Vite is guided by an international team.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { core, emeriti, cnTranslator } from './_data/team'
</script>
<style>
.sectionContainer {
    text-align: center;
    padding: 40px 20px;
    border-radius: 12px 12px 0 0;
    margin-bottom: 30px;
  }
  .sectionContainer h1 {
    font-size: 2.5em;
    margin-bottom: 15px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
  .formButton {
    display: inline-block;
    padding: 10px 20px;
    background-image: linear-gradient(to right, #007bff, #27ae60);
    color: white;
    border: none;
    border-radius: 25px;
    font-weight: bold;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .formButton:hover {
    background-color: #007bff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .formButton:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>TOKEN SHOWCASE</template>
    <template #lead>
      List of tokens people are building with Solana<br>
        <a class="formButton" href="https://github.com/hyaliyun/vuejs/discussions/2" target="_blank">
          🙏 Please add your token
        </a>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="core" />
  <VPTeamPageSection>
    <template #title>What do your tokens look like?</template>
    <template #lead>
      Hey, can you show us what your tokens look like?
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="cnTranslator" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Please show the current token type</template>
    <template #lead>
      Including its technical characteristics, application scenarios and market circulation.
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="emeriti" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
