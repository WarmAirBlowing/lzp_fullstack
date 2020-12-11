// import axios from '../api'

// const login = (data) => {
//   return axios({
//     url: '/login',
//     method: 'post',
//     data: data
//   })
// }

// export default login
import axios from '../api'

const login = (data) => {
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}

export default {
  login
}
