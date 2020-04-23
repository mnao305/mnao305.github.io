<template>
  <!-- デザインセンスをくれ -->
  <v-layout v-show="load" wrap class="index">
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
        @click="$store.commit('toggleAbout')"
      >
        About→
      </v-btn>
      <v-btn
        class="openBtn"
        color="cyan darken-2"
        large
        block
        flat
        @click="$store.commit('toggleHistorys')"
      >
        History→
      </v-btn>
      <v-btn
        class="openBtn"
        color="cyan darken-2"
        large
        block
        flat
        @click="$store.commit('toggleLinks')"
      >
        Links→
      </v-btn>
      <v-btn
        class="openBtn"
        color="cyan darken-2"
        large
        block
        flat
        @click="$store.commit('toggleProducts')"
      >
        Products→
      </v-btn>
    </v-flex>

    <v-dialog v-model="about" max-width="1000px">
      <about />
    </v-dialog>
    <v-dialog v-model="historys" max-width="1000px">
      <historys />
    </v-dialog>
    <v-dialog v-model="links" max-width="500px">
      <links />
    </v-dialog>
    <v-dialog v-model="products">
      <products />
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
      load: false
    }
  },
  computed: {
    about: {
      get () {
        return this.$store.state.about
      },
      set () {
        this.$store.commit('toggleAbout')
      }
    },
    historys: {
      get () {
        return this.$store.state.historys
      },
      set () {
        this.$store.commit('toggleHistorys')
      }
    },
    links: {
      get () {
        return this.$store.state.links
      },
      set () {
        this.$store.commit('toggleLinks')
      }
    },
    products: {
      get () {
        return this.$store.state.products
      },
      set () {
        this.$store.commit('toggleProducts')
      }
    }
  },
  mounted () {
    this.load = true
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
