// Imports
// ========================================================
import React from 'react';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'

import { publicProvider } from '@wagmi/core/providers/public'
   
  
// Config
// ========================================================
const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [publicProvider()],
  )
   
  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
  })
  
  
// Provider
// ========================================================
const WagmiProvider = ({ children }: { children: React.ReactNode }) => {
    return <WagmiConfig config={config}>{children}</WagmiConfig>
};

// Exports
// ========================================================
export default WagmiProvider;