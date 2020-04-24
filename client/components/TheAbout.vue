<template>
  <v-card>
    <v-card-title class="headline cyan lighten-2" primary-title>
      About
    </v-card-title>

    <v-card-text class="about">
      <div class="text-xs-center">
        <FontAwesomeIcon icon="graduation-cap" size="3x" :style="{ color: 'rgba(0,0,0,.54)' }" />
        <p>情報科学専門学校 / IPFactory</p>
        <FontAwesomeIcon icon="desktop" size="3x" :style="{ color: 'rgba(0,0,0,.54)' }" />
        <p>VSCode / JavaScript / Vue.js / Nuxt.js</p>
        <FontAwesomeIcon icon="certificate" size="3x" :style="{ color: 'rgba(0,0,0,.54)' }" />
        <p>
          ITパスポート / 基本情報技術者試験 / 応用情報技術者試験 /
          情報処理安全確保支援士試験
        </p>
        <FontAwesomeIcon icon="trophy" size="3x" :style="{ color: 'rgba(0,0,0,.54)' }" />
        <p>MBSD Cybersecurity Challenges 2018 最優秀賞</p>
      </div>
    </v-card-text>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" flat @click="$emit('changeAboutFlg')">
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
.about {
  p {
    font-size: 2rem;
    word-break: keep-all;
    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }
}
</style>
