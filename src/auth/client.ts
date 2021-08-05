import { createClient } from '@urql/core'

const client = createClient({
  url: 'https://localhost:3000/graphql',
  fetchOptions: ()=>{
    const token = localStorage.getItem('token')
    return { headers: { authorization: token ? token : '' }}
  }
})
