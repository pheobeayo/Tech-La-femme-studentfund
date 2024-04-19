import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";


export const SUPPORTED_CHAIN = 2710;

const morph = {
    chainId: SUPPORTED_CHAIN,
    name: "Morph",
    currency: "ETH",
    explorerUrl: "https://explorer-testnet.morphl2.io",
    rpcUrl: process.env.REACT_APP_RPC_URL,
};

const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "https://mywebsite.com", // origin must match your domain & subdomain
    icons: ["https://avatars.mywebsite.com/"],
};

export const configureWeb3Modal = () =>
    createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [morph],
        projectId: process.env.REACT_APP_PROJECTID,
        enableAnalytics: false, // Optional - defaults to your Cloud configuration
        themeVariables: {
            '--w3m-accent': '#2b7c5f',
            '--w3m-color-mix': '#12ff80',
            '--w3m-color-mix-strength': 20
        },
    });
