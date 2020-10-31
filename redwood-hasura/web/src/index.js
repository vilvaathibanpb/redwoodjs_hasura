import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import './index.css'

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider graphQLClientConfig={{
      uri: 'https://learn-graphql.demo.hasura.app/v1/graphql'
    }}>
      <Routes />
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)