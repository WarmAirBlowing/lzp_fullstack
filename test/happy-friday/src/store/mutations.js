export default {
  add(state) {
    state.itemNum++
  },
  remember(state, id) {
    state.answerId.push(id)
  } 
}