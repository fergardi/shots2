<template lang="pug">
  .app
    el-container.layout
      el-header.header
        h2 {{ 'lbl_header' }}

      el-container.content
        el-aside.sidebar
          el-menu.menu(:collapse="collapsed", router)
            el-menu-item(index="index")
              i.el-icon-setting
              span {{ 'lbl_other' }}
            el-menu-item(index="world")
              i.el-icon-menu
              span {{ 'lbl_world' }}
          el-footer.footer {{ 'lbl_footer' }}

        el-container.container
          el-main.main
            router-view
</template>

<script>
  import store from '@/vuex/store'

  export default {
    name: 'app',
    computed: {
      collapsed () {
        return store.state.collapsed
      }
    }
  }
</script>

<style lang="stylus">
  html
  body
    margin 0
  html
  body
  .app
    height 100%
    overflow hidden
  .app
    display flex
    flex-flow column
  .container
  .main
    overflow auto
    height 100%
    margin 0
    padding 0
  .app
    .layout
      .header
        display flex
        justify-content center
        align-items center
      .content
        .sidebar
          width 20%
          .footer
            display flex
            justify-content center
            align-items center
        .main
          width 80%
</style>
