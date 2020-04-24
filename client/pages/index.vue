<template>
  <!-- デザインセンスをくれ -->
  <v-layout v-show="loadFlg" wrap class="index">
    <v-flex xs12 sm6 md6 class="iconName">
      <div class="icon">
        <img src="/icon.png" alt="icon">
      </div>
      <p>mnao305</p>
    </v-flex>
    <v-flex xs12 sm6 md6 class="btns">
      <v-btn
        class="openBtn"
        color="cyan darken-2"
        large
        block
        flat
        @click="changeAboutFlg"
      >
        About→
      </v-btn>
      <v-btn
        class="openBtn"
        color="cyan darken-2"
        large
        block
        flat
        @click="changeHistorysFlg"
      >
        History→
      </v-btn>
      <v-btn
        class="openBtn"
        color="cyan darken-2"
        large
        block
        flat
        @click="changeLinksFlg"
      >
        Links→
      </v-btn>
      <v-btn
        class="openBtn"
        color="cyan darken-2"
        large
        block
        flat
        @click="changeProductsFlg"
      >
        Products→
      </v-btn>
    </v-flex>

    <v-dialog v-model="aboutFlg" max-width="1000px">
      <about @changeAboutFlg="changeAboutFlg" />
    </v-dialog>
    <v-dialog v-model="historysFlg" max-width="1000px">
      <historys @changeHistorysFlg="changeHistorysFlg" />
    </v-dialog>
    <v-dialog v-model="linksFlg" max-width="500px">
      <links @changeLinksFlg="changeLinksFlg" />
    </v-dialog>
    <v-dialog v-model="productsFlg">
      <products @changeProductsFlg="changeProductsFlg" />
    </v-dialog>
  </v-layout>
</template>

<script>
import about from '~/components/TheAbout'
import historys from '~/components/TheHistorys'
import links from '~/components/TheLinks'
import products from '~/components/TheProducts'

export default {
  components: {
    about,
    historys,
    links,
    products
  },
  data () {
    return {
      loadFlg: false,
      aboutFlg: false,
      historysFlg: false,
      linksFlg: false,
      productsFlg: false
    }
  },
  mounted () {
    this.loadFlg = true
  },
  methods: {
    changeAboutFlg () {
      this.aboutFlg = !this.aboutFlg
    },
    changeHistorysFlg () {
      this.historysFlg = !this.historysFlg
    },
    changeLinksFlg () {
      this.linksFlg = !this.linksFlg
    },
    changeProductsFlg () {
      this.productsFlg = !this.productsFlg
    }
  }
}
</script>

<style lang="scss">
.index {
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .iconName {
    margin: 0 auto;
    flex-basis: 0;
    width: 300px;
    @media screen and (max-width: 500px) {
      width: 210px;
    }
    .icon {
      width: 300px;
      @media screen and (max-width: 500px) {
        width: 210px;
      }
      img {
        max-width: 100%;
        height: auto;
        min-width: 15px;
        min-height: 150px;
        border-radius: 20px;
      }
    }
    p {
      font-size: 48px;
      margin: 0 auto;
      text-align: center;
      @media screen and (max-width: 500px) {
        font-size: 26px;
      }
    }
  }

  .btns {
    // margin: 0 auto;
    @media screen and (max-width: 500px) {
      position: relative;
      bottom: 10px;
    }
    .openBtn {
      font-size: 32px;
      @media screen and (max-width: 500px) {
        font-size: 20px;
      }
    }
  }
}
</style>
