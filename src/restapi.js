import axios from 'axios'

export default class RestAPI {
  static fetch() {
    return axios.get('/context-path/url').then(({data}) => data)
  }
}
