import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/index.css'

// Apollo client
import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client"

const httplink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: httplink,
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
