/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThirdwebProvider, metamaskWallet, coinbaseWallet, rainbowWallet, walletConnect } from "@thirdweb-dev/react";
import {Goerli,Sepolia,Polygon,Mumbai, Ethereum} from "@thirdweb-dev/chains";

import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import { MantineProvider } from '@mantine/core';


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThirdwebProvider 
      activeChain={Mumbai} 
      dAppMeta={{
        name: "Thirdweb Prac",
        description: "Thirdweb Prac",
        url: "https://thirdweb.dev",
        icons: ["https://thirdweb.dev/favicon.ico"],
      }}
      supportedWallets={[metamaskWallet(), coinbaseWallet(), rainbowWallet(), walletConnect()]}
      supportedChains={[Goerli, Sepolia, Polygon,Ethereum,Mumbai]}
      >
        <BrowserRouter>
          <ChakraProvider>
            <MantineProvider withGlobalStyles withNormalizeCSS>
              <App />
            </MantineProvider>
          </ChakraProvider>
        </BrowserRouter>
    </ThirdwebProvider>
)
