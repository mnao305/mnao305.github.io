import Vue from 'vue'
import Vuetify, {
  VApp,
  VContent,
  VContainer,
  VLayout,
  VFlex,
  VBtn,
  VDialog,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VDivider,
  VSpacer,
  VImg,
  VMenu,
  VList,
  VListTile,
  VListTileTitle,
  VExpansionPanel,
  VExpansionPanelContent
} from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  component: {
    VApp,
    VContent,
    VContainer,
    VLayout,
    VFlex,
    VBtn,
    VDialog,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VDivider,
    VSpacer,
    VImg,
    VMenu,
    VList,
    VListTile,
    VListTileTitle,
    VExpansionPanel,
    VExpansionPanelContent
  },
  theme: {
    primary: '#121212', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
