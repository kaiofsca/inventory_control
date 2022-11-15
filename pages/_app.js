import { ChakraProvider } from '@chakra-ui/react'
import { SidebarProvider } from '../src/context/SidebarContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </ChakraProvider>
  )
}

export default MyApp
