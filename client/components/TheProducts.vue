<template>
  <v-card>
    <v-card-title
      class="headline cyan lighten-2"
      primary-title
    >
      Products
    </v-card-title>

    <v-layout row wrap class="products">
      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img
            src="/imgFavtter.png"
            aspect-ratio="2.75"
            contain
          />

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                <a href="https://imgfavtter.mnao305.com/" target="_blank">
                  imgFavtter
                </a>
              </h3>
              <div>Twitterでいいねしてきた画像を無限に見ていけるWebアプリ(画像はモザイク処理済み)</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer />
            <v-btn flat color="cyan" href="https://github.com/mnao305/imgFavtter" target="_blank">
              <v-icon>fab fa-github</v-icon>Source code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img
            src="/VRCFriendCheck.png"
            aspect-ratio="2.75"
            contain
          />

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                <a href="https://chrome.google.com/webstore/detail/vrcfriendcheck/fkhfmlkfiaafmoaobaofhldnlgapekhl" target="_blank">
                  VRCFriendCheck
                </a>
              </h3>
              <div>VRChatのフレンドのオンライン状況やいるワールド等が確認できるChrome拡張機能</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer />
            <v-btn flat color="cyan" href="https://github.com/mnao305/VRCFriendCheck" target="_blank">
              <v-icon>fab fa-github</v-icon>Source code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img
            src="/noimage.png"
            aspect-ratio="2.75"
          />

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                ポートフォリオサイト
              </h3>
              <div>このページです</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer />
            <v-btn flat color="cyan" href="https://github.com/mnao305/mnao305.github.io" target="_blank">
              <v-icon>fab fa-github</v-icon>Source code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        flat
        @click="$store.commit('toggleProducts')"
      >
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
.v-icon {
  margin-right: 5px;
}
.products {
  .v-card {
    a {
      text-decoration: none;
      color: #0097a7;
    }
    margin: 5px;
  }
}
</style>
