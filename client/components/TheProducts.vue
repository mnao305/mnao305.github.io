<template>
  <v-card>
    <v-card-title class="headline cyan lighten-2" primary-title>
      Products
    </v-card-title>

    <v-layout row wrap class="products">
      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img src="/imgFavtter.png" aspect-ratio="2.75" contain />

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                <a href="https://imgfavtter.mnao305.com/" target="_blank">
                  imgFavtter
                </a>
              </h3>
              <div>Twitterでいいねしてきた画像を無限に見ていけるWebアプリ</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer />
            <v-btn
              flat
              color="cyan"
              href="https://github.com/mnao305/imgFavtter"
              target="_blank"
            >
              <FontAwesomeIcon :icon="['fab', 'github']" size="2x" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />Source code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img src="/VRCFriendCheck.png" aspect-ratio="2.75" contain />

          <v-card-title primary-title>
            <div>
              <v-menu offset-y>
                <h3 slot="activator" class="headline mb-0">
                  <a>VRCFriendCheck</a>
                </h3>
                <v-list class="listLink">
                  <v-list-tile
                    color="#0097a7"
                    href="https://chrome.google.com/webstore/detail/vrcfriendcheck/fkhfmlkfiaafmoaobaofhldn2xapekhl"
                    target="_blank"
                  >
                    <v-list-tile-title class="text-xs-center">
                      Chrome版
                    </v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile
                    color="#0097a7"
                    href="https://addons.mozilla.org/ja/firefox/addon/vrcfriendcheck/"
                    target="_blank"
                  >
                    <v-list-tile-title class="text-xs-center">
                      Firefox版
                    </v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <div>
                VRChatのフレンドのオンライン状況やいるワールド等が確認できるChrome拡張機能
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer />
            <v-btn
              flat
              color="cyan"
              href="https://github.com/mnao305/VRCFriendCheck"
              target="_blank"
            >
              <FontAwesomeIcon :icon="['fab', 'github']" size="2x" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />Source code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img src="/noimage.png" aspect-ratio="2.75" />

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                <a href="https://mai-score.com/" target="_blank">
                  舞スコア
                </a>
              </h3>
              <div>maimaiでらっくす対応スコアツール</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer />
            <v-btn
              flat
              color="cyan"
              href="https://github.com/mnao305/mai-score"
              target="_blank"
            >
              <FontAwesomeIcon :icon="['fab', 'github']" size="2x" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />Source code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img src="/noimage.png" aspect-ratio="2.75" />

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                <a
                  href="https://chrome.google.com/webstore/detail/exbeak/ppccoilacanjcjljekaggmeaeakdfhce"
                  target="_blank"
                >
                  exbeak
                </a>
              </h3>
              <div>
                ツイート専用のシンプルTwitterクライアントブラウザ拡張機能
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer />
            <v-btn
              flat
              color="cyan"
              href="https://github.com/mnao305/mai-score"
              target="_blank"
            >
              <FontAwesomeIcon :icon="['fab', 'github']" size="2x" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />Source code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img src="/noimage.png" aspect-ratio="2.75" />

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                <a
                  href="https://chrome.google.com/webstore/detail/video-screenshot/okbncahhjihmnjpiadepoioodfnfanjk"
                  target="_blank"
                >
                  video-screenshot
                </a>
              </h3>
              <div>
                YouTube等動画サイトで簡単にスクリーンショットを撮ることができるブラウザ拡張機能
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer />
            <v-btn
              flat
              color="cyan"
              href="https://github.com/mnao305/video-screenshot"
              target="_blank"
            >
              <FontAwesomeIcon :icon="['fab', 'github']" size="2x" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />Source code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img src="/noimage.png" aspect-ratio="2.75" />

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
            <v-btn
              flat
              color="cyan"
              href="https://github.com/mnao305/mnao305.github.io"
              target="_blank"
            >
              <FontAwesomeIcon :icon="['fab', 'github']" size="2x" :style="{ color: 'rgba(0,0,0,.54)', marginRight: '5px' }" />Source code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" flat @click="$store.commit('toggleProducts')">
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
.products {
  .v-card {
    a {
      text-decoration: none;
      color: #0097a7;
    }
    margin: 5px;
  }
  a {
    color: #0097a7;
  }
}
</style>
