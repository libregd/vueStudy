const ConditionalRendering = {
    data() {
      return {
        seen: true,
        kill:false,
        none:1
        // none可以是null，0,undefined的时候不出现，是1的时候出现
      }
    }
  }
  
  Vue.createApp(ConditionalRendering).mount('#conditional-rendering')