import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import './App.css';
import theme from '@style/theme';
import Routers from './router';

function App() {
  return (
    <>
      <ChakraProvider
        theme={theme}
        toastOptions={{
          defaultOptions: {
            position: 'top',
            variant: 'top-accent',
            duration: 3000,
          },
        }}
      >
        <ColorModeScript />
        <Routers />
      </ChakraProvider>
    </>
  );
}

export default App;
