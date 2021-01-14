import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 1000
})

instance.interceptors.request.use(function(config) {
  config.ha = 'hahahhah'
  return config
}, function(error) {
  return error
})
instance.interceptors.response.use(function(response) {
  return response
}, function(error) {
  return error
})
export default instance
// if (a > 1) {
//   console.log(a + '>1')
//   if (a > 3) {
//     console.log(a + '>3')
//     return
//   }
//   console.log(a + '<3')
//   return
// }
// console.log(a + '<1')
