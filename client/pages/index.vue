<template>
  <div>
    <v-dialog v-model="about">
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
      >
        About
      </v-btn>
      <about />
    </v-dialog>
    <v-dialog v-model="historys">
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
      >
        Historys
      </v-btn>
      <historys />
    </v-dialog>
    <v-dialog v-model="links">
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
      >
        Links
      </v-btn>
      <links />
    </v-dialog>
    <v-dialog v-model="products">
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
      >
        Products
      </v-btn>
      <products />
    </v-dialog>
  </div>
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
