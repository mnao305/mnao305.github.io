<template>
  <!-- デザインセンスをくれ -->
  <v-layout wrap class="index">
    <v-flex
      xs12
      sm6
      md6
      class="iconName"
    >
      <div class="icon">
        <img src="/icon.jpg">
      </div>
      <p>mnao305</p>
    </v-flex>
    <v-flex
      xs12
      sm6
      md6
      class="btns"
    >
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
        Historys→
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

    <v-dialog v-model="about">
      <about />
    </v-dialog>
    <v-dialog v-model="historys">
      <historys />
    </v-dialog>
    <v-dialog v-model="links">
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
  computed: {
    about: {
      get() {
        return this.$store.state.about
      },
      set() {
        this.$store.commit('toggleAbout')
      }
    },
    historys: {
      get() {
        return this.$store.state.historys
      },
      set() {
        this.$store.commit('toggleHistorys')
      }
    },
    links: {
      get() {
        return this.$store.state.links
      },
      set() {
        this.$store.commit('toggleLinks')
      }
    },
    products: {
      get() {
        return this.$store.state.products
      },
      set() {
        this.$store.commit('toggleProducts')
      }
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
    .icon {
      width: 300px;
      img {
        max-width: 100%;
        height: auto;
        min-width: 15px;
        min-height: 150px;
        border-radius: 20px;
      }
    }
    p {
      font-size: 32px;
      margin: 0 auto;
      text-align: center;
    }
  }

  .btns {
    // margin: 0 auto;
    .openBtn {
      font-size: 32px;
    }
  }
}
</style>
