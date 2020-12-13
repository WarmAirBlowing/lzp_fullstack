export default {
  addNum(context) {
    if(context.state.itemNum < context.state.itemDetail.length) {
      context.commit('add')
    }
  },
  rememberId( {commit}, id ) {
    commit('remember', id)
  }
}