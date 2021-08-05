import { cacheExchange, createClient, dedupExchange, fetchExchange, } from '@urql/core'

// TODO: Cookie based authentication
export default createClient({
  url: 'http://localhost:3000/graphql',
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
  fetchOptions: {credentials: 'include'}
})
