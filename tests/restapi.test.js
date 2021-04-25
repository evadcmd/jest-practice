import axios from 'axios'
import RestAPI from '../src/restapi'

jest.mock('axios')

test('test async fetch', async () => {
  const users = [{name: 'TATA'}, {name: 'RURU'}]
  const resp = {data: users}
  axios.get.mockResolvedValue(resp)
  const data = await RestAPI.fetch()
  expect(data).toEqual(users)
})
