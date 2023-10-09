// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    todoList: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todoList.push(todo);
    },
    deleteTodo(state, todoId) {
      state.todoList = state.todoList.filter(todo => todo.id !== todoId);
    },
  },
  actions: {
    addNewTodo({ commit }, todo) {
      commit('addTodo', todo);
    },
    deleteItem({ commit }, todoId) {
      commit('deleteTodo', todoId);
    },
  },
});
