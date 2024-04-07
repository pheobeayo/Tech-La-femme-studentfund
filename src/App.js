
import React from "react";
import AllRoutes from "./config/AllRoutes";
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'YOUR_PROJECT_ID'


const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum] 
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  
})



createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, 
  enableOnramp: true 
})

function App() {
  return (


    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
     <div>
    <AllRoutes />
    </div>
    </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
