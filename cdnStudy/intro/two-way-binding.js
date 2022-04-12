const TwoWayBinding = {
    data() {
      return {
        message: 'two-way-binding!'
      }
    }
  }
  
  Vue.createApp(TwoWayBinding).mount('#two-way-binding')