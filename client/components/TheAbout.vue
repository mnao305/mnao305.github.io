<template>
  <v-card>
    <v-card-title
      class="headline cyan lighten-2"
      primary-title
    >
      About
    </v-card-title>

    <v-card-text class="about">
      <div class="text-xs-center">
        <v-icon>fa-graduation-cap</v-icon>
        <p>情報科学専門学校 / IPFactory</p>
        <v-icon>fa-desktop</v-icon>
        <p>JavaScript / Vue.js / Nuxt.js</p>
        <v-icon>fa-certificate</v-icon>
        <p>ITパスポート / 基本情報技術者試験 / 応用情報技術者試験</p>
        <v-icon>fa-trophy</v-icon>
        <p>MBSD Cybersecurity Challenges 2018 最優秀賞</p>
      </div>
    </v-card-text>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        flat
        @click="$store.commit('toggleAbout')"
      >
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
.about {
  p {
    font-size: 2rem;
    @media screen and (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
  .v-icon {
    font-size: 2.5rem;
    @media screen and (max-width: 500px) {
      font-size: 2rem;
    }
    margin-right: 5px;
  }
}
</style>
