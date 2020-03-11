<template>
  <v-card>
    <v-card-title
      class="headline cyan lighten-2"
      primary-title
    >
      History
    </v-card-title>

    <v-card-text class="historys">
      <v-expansion-panel v-model="panel" expand>
        <v-expansion-panel-content value="true">
          <div slot="header">
            2019
          </div>
          <v-card>
            <v-card-text>
              <ul>
                <li>
                  11月9日 NRI Secure NetWars 2019 23/94位(<a href="https://twitter.com/mnao_305/status/1193076993337647104" target="_blank">
                    Twitter
                  </a>)
                </li>
                <li>
                  6月21日 情報処理安全確保支援士試験 合格(<a href="https://twitter.com/mnao_305/status/1141905363697975296" target="_blank">
                    Twitter
                  </a>)
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content value="true">
          <div slot="header">
            2018
          </div>
          <v-card>
            <v-card-text>
              <ul>
                <li>
                  12月21日 応用情報技術者試験 合格(<a href="https://twitter.com/mnao_305/status/1075950147421405186" target="_blank">
                    Twitter
                  </a>)
                </li>
                <li>
                  12月12日 MBSD Cybersecurity Challenges 2018 最優秀賞(<a href="https://twitter.com/mnao_305/status/1072787982413754368" target="_blank">
                    Twitter
                  </a>)
                </li>
                <li>10月6日 SECCON Beginners NEXT 参加</li>
                <li>
                  8月14-16日 セキュリティ・キャンプ全国大会2018 参加(<a href="https://twitter.com/mnao_305/status/1029200753196318727" target="_blank">
                    Twitter
                  </a>)
                </li>
                <li>
                  3月3日 セキュリティ・ミニキャンプ in 四国 2018(徳島) 参加(<a href="https://twitter.com/mnao_305/status/969858048377237505" target="_blank">
                    Twitter
                  </a>)
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <div slot="header">
            2017
          </div>
          <v-card>
            <v-card-text>
              <ul>
                <li>
                  11月15日 基本情報技術者試験 合格(<a href="https://twitter.com/mnao_305/status/930788927778123776" target="_blank">
                    Twitter
                  </a>)
                </li>
                <li>
                  8月30-31日 SANS NetWars 参加(<a href="https://twitter.com/mnao_305/status/902687218505965568" target="_blank">
                    Twitter
                  </a>)
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <div slot="header">
            2016
          </div>
          <v-card>
            <v-card-text>
              <ul>
                <li>6月25日 ITパスポート 合格</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-card-text>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        flat
        @click="$store.commit('toggleHistorys')"
      >
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      panel: [true, true]
    }
  }
}
</script>


<style lang="scss">
.historys {
  li {
    font-size: 2rem;
    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
    a {
      text-decoration: none;
      color: #0097a7;
    }
  }
  .v-expansion-panel {
    box-shadow: none;
  }
}
</style>
