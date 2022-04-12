const TodoItem = {
    props: ['todo'],
    template: `<li>{{ todo.text }}</li>`
  }
  
  const TodoList = {
    data() {
      return {
        groceryList: [
          { id: 2, text: 'Vegetables' },
          { id: 1, text: 'Cheese' },
          { id: 0, text: 'Whatever else humans are supposed to eat' }
        ]
      }
    },
    components: {
      TodoItem
    }
  }
  
  const app = Vue.createApp(TodoList)
  
  app.mount('#todo-list-app')