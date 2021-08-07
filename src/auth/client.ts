import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from "@urql/core";

const client = createClient({
  url: "http://localhost:3000/graphql",
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
  fetchOptions: { credentials: "include" },
});

export default client;
