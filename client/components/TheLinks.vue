<template>
  <v-card>
    <v-card-title
      class="headline cyan lighten-2"
      primary-title
    >
      Links
    </v-card-title>

    <v-card-text class="links">
      <ul class="text-xs-center">
        <li>
          <a href="https://twitter.com/mnao_305" target="_blank">
            <v-icon>fab fa-twitter</v-icon>Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/mnao305" target="_blank">
            <v-icon>fab fa-github</v-icon>GitHub
          </a>
        </li>
        <li>
          <a href="https://mnao305.hatenablog.com/" target="_blank">
            <v-icon>fa-blog</v-icon>Blog
          </a>
        </li>
        <li>
          <a href="https://qiita.com/mnao305" target="_blank">
            <v-icon>fa-search</v-icon>Qiita
          </a>
        </li>
        <li>
          <a href="https://www.flickr.com/photos/mnao305/" target="_blank">
            <v-icon>fab fa-flickr</v-icon>Flickr
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mnao305/" target="_blank">
            <v-icon>fab fa-instagram</v-icon>Instagram
          </a>
        </li>
        <li>
          <a href="http://amzn.asia/aa05E8q" target="_blank">
            <v-icon>fab fa-amazon</v-icon>Amazon Wish List
          </a>
        </li>
        <li />
      </ul>
    </v-card-text>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        flat
        @click="$store.commit('toggleLinks')"
      >
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
      font-size: 1.5rem;
    }
    a {
      display: block;
      width: 100%;
      text-decoration: none;
      color: #0097a7;
    }
    .v-icon {
      font-size: 2.5rem;
      margin-right: 5px;
    }
  }
}
</style>
