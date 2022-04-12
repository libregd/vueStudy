const ListRendering = {
    data() {
      return {
        kiki: [
          { text: '- Learn JavaScript' },
          { text: '- Learn Vue' },
          { text: '- Build something awesome' }
        ]
      }
    }
  }
  
  Vue.createApp(ListRendering).mount('#list-rendering')