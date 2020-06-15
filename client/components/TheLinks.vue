<template>
  <v-card>
    <v-card-title class="headline cyan lighten-2" primary-title>
      Links
    </v-card-title>

    <v-card-text class="links">
      <ul class="text-xs-center">
        <li>
          <a href="https://twitter.com/mnao_305" target="_blank" rel="noopener">
            <FontAwesomeIcon :icon="['fab', 'twitter']" size="lg" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/mnao305" target="_blank" rel="noopener">
            <FontAwesomeIcon :icon="['fab', 'github']" size="lg" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />GitHub
          </a>
        </li>
        <li>
          <a href="https://mnao305.hatenablog.com/" target="_blank" rel="noopener">
            <FontAwesomeIcon icon="blog" size="lg" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />Blog
          </a>
        </li>
        <li>
          <a href="https://qiita.com/mnao305" target="_blank" rel="noopener">
            <FontAwesomeIcon icon="search" size="lg" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />Qiita
          </a>
        </li>
        <li>
          <a href="https://www.flickr.com/photos/mnao305/" target="_blank" rel="noopener">
            <FontAwesomeIcon :icon="['fab', 'flickr']" size="lg" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />Flickr
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mnao305/" target="_blank" rel="noopener">
            <FontAwesomeIcon :icon="['fab', 'instagram']" size="lg" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />Instagram
          </a>
        </li>
        <li>
          <a href="https://ja.foursquare.com/mnao_305" target="_blank" rel="noopener">
            <FontAwesomeIcon :icon="['fab', 'foursquare']" size="lg" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />foursquare(Swarm)
          </a>
        </li>
        <li>
          <a href="http://amzn.asia/aa05E8q" target="_blank" rel="noopener">
            <FontAwesomeIcon :icon="['fab', 'amazon']" size="lg" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />Amazon Wish List
          </a>
        </li>
        <li />
      </ul>
    </v-card-text>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" flat @click="$emit('changeLinksFlg')">
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
.links {
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    font-size: 2rem;
    margin: 10px 0;
    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
    a {
      display: block;
      width: 100%;
      text-decoration: none;
      color: #0097a7;
    }
  }
}
</style>
