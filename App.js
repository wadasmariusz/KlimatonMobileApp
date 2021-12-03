import React, { Suspense } from 'react'
import AppNavigator from '@navigators/AppNavigator'
import store from '@store/index'
import { Provider } from 'react-redux'
import { Text } from 'react-native'
import { QueryClient, QueryClientProvider } from 'react-query'
import setupAxios from './setupAxios'

setupAxios(store);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    }
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Text>Loading...</Text>}>
          <AppNavigator />
        </Suspense>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
