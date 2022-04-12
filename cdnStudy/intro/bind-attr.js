const AttributeBinding = {
    data() {
      return {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        hello:"hello",
        bye:"byebye"+(1+5)
      }
    }
  }
  
  Vue.createApp(AttributeBinding).mount('#bind-attribute')