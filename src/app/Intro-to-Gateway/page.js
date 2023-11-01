import Sidebar from "@/components/Sidebar";
import Image from 'next/image';
import Link from 'next/link';

export default function IntroGateway(){
    return(
        <>
            <Sidebar />
              
            <div class="sm:ml-64 ">
   
   <div className="  rounded">
       <div className="flex flex-col md:pl-[200px] md:pr-[150px] md:pt-10 bg-figma-500 min-h-screen">
       <div className=" flex flex-col items-center justify-center">
       <h1 className="text-5xl  font-bold text-white sm:pt-4">Introduction to Gateway
               </h1>
        <p className="text-white text-xl pt-5">Welcome to Gateway: A gateway to Cosmos ecosystem which is reshaping the blockchain landscape with seamless cross-chain liquidity and message routing. Whether you are a cosmos developer or a DApp buidler, join us in the world of Appchains and explore the endless possibilities through Gateway.
</p>
        <p className="text-white text-xl pt-5">In this guide, we will delve into the 'Why,' 'What,' 'How,' and 'For Whom' of the Gateway. This resource is designed for individuals with a basic understanding of blockchain, Cosmos, and Wormhole. It is strongly recommend revisiting the introductory section of Cosmos and Wormhole to ensure a comprehensive understanding before proceeding with Gateway.</p>
        <p className="text-white text-xl pt-5">The aim is to educate and raise awareness about Gateway to enhance cross-chain possibilities, leverage the Cosmos ecosystem, and ultimately explore new horizons within the blockchain ecosystem.</p>
       </div>
       <h3 className="pt-20 text-white font-bold text-2xl">Gateway:</h3>
       <p className="text-white text-xl pt-5">Cosmos being a leader in interoperability (IBC) and recognizing the growing Appchain trend, Wormhole identified several unmet opportunities and needs:</p>
       <ul className="list-decimal pt-5 pl-10">
            <li className="pt-4 ">
                <p className="text-white text-xl">
                New security and accounting features for Guardians through Cosmos stack
                </p>
            </li>
            <li className="pt-4 ">
                <p className="text-white text-xl">
                    Deep integration with Cosmos.
                </p>
            </li>
       </ul>
       <p className="text-white text-xl pt-5">Unmet Needs of Cosmos:</p>
       <ul className="list-decimal pt-5 pl-10">
            <li className="pt-4 ">
                <p className="text-white text-xl">
                Connecting cosmos with rest of the blockchain ecosystem
                </p>
            </li>
            <li className="pt-4 ">
                <p className="text-white text-xl">
                No additional bridge fees
                </p>
            </li>
            <li className="pt-4 ">
                <p className="text-white text-xl">
                Permissionless asset listing experience.
                </p>
            </li>
        </ul>
        <p className="pt-5 text-white text-xl"> Recognizing these needs, the Wormhole Foundation announced a solution at <Link href="https://youtu.be/5OFjW_zmvbw?si=O6JLcrlmO2fH10sG"><span className="underline font-bold">Osmoscon 2023: the launch of the Wormhole Gateway</span></Link> An application-specific blockchain, powered by the Cosmos SDK.</p>  
        <p className="pt-5 text-white text-xl">The primary objective of Gateway is to expand accessibility and liquidity within the Cosmos ecosystem, while simultaneously enhancing Wormhole's security and sovereignty.</p>
        <h3 className="text-2xl pt-20 text-white font-bold">How Gateway Works?</h3>
        <p className="pt-5 text-white text-xl">In practical terms, when someone moves a token from any of the 23+ blockchains connected to Wormhole to a Cosmos SDK chain through Gateway, the asset gets locked, and a new ICS-20 version is created on Gateway. This newly minted token is then sent to the destination chain via IBC. 
</p>
        <p className="pt-5 text-white text-xl">For instance:</p>
        <ul className="list-disc pt-5 pl-10">
            <li className="pt-4 ">
                <p className="text-white text-xl">
                Users can bridge Ethereum's native ETH to the Cosmos ecosystem, making it available for use in various DeFi applications on networks like Gravity DEX.
                </p>
            </li>
            <li className="pt-4 ">
                <p className="text-white text-xl">
                Users can utilize Gateway to bridge Polygon's MATIC tokens to the Cosmos network, where it can be in liquidity pools on Osmosis or staked on Akash.
                </p>
            </li>
            <li className="pt-4 ">
                <p className="text-white text-xl">
                Bridge $SOL to Cosmos via Gateway for various DeFi applications such as liquidity provision on Gravity DEX or as collateral on Mars Protocol.
                </p>
            </li>
        </ul>

        <p className="pt-5 text-white text-xl">This resulting ICS-20 token becomes interchangeable through Strangelove's packet forward middleware. Gateway also utilizes IBC Hooks for seamless integration with CosmWasm contracts. [More details to it are mentioned in the upcoming section.] </p>
        <p className="pt-5 text-white text-xl">Gateway's core function is to enhance transparency and transaction security on its public ledger.</p>
        <div className="flex flex-col items-center justify-center pt-10"> 
            <Image src="/gatewayexternal.png" width={900} height={900} alt="External Chain <-> Cosmos Supported Chain" /> 
            <p>External Chain  Cosmos Supported Chain</p>
            <Image src="/gatewayinternalchain.png" width={900} height={900} alt=" Cosmos Chain <-> Cosmos Chain" className="pt-7"/> 
            <p> Cosmos Chain Cosmos Chain</p>
        </div>
        <p className="text-2xl text-white font-bold pt-10">Benefits of Gateway:
</p>
<ul className="list-disc pt-5 pl-10">
            <li className="pt-4 ">
                <p className="text-white text-xl">
                Scalability: Guardians have to run only one full node on Gateway vs one for every Cosmos chain, unlike non-Cosmos chains.
</p>
            </li>
            <li className="pt-4 ">
                <p className="text-white text-xl">
                Fungibility: Gateway acts as router for transfers of Wormhole xAssets between Cosmos chains.

                </p>
            </li>
            <li className="pt-4 ">
                <p className="text-white text-xl">
                Security: Gateway leverages IBC light clients to facilitate asset transfers to and between Cosmos chains.

                </p>
            </li>
        </ul>
        <p className="text-xl text-white pt-5">More detailed explanations about Scalability, Fungibility, and Security are provided in the upcoming sections.
</p>
<p className="text-xl text-white pt-5">The initial phase of the Gateway will link 23 Cosmos-based chains, including prominent chains like Osmosis, Evmos, Noble and Sei. 
</p>

<p className="text-2xl text-white font-bold pt-10">Who is Gateway for?
</p>
<p className="text-xl text-white pt-5">Gateway was designed with two user groups in mind: 

</p>
<ul className="list-disc pl-10 pt-5"> 
    <li>
        <p className="text-xl text-white pt-5">Cosmos developers, aiming to seamlessly onboard users and liquidity from other ecosystems like Ethereum and Solana, and users seeking to bridge their assets to or from Cosmos.
        
        
        </p>
    </li>
    <li>
        <p className="text-xl text-white pt-5">However, Gateway allows anyone to transfer fungible assets across Cosmos chains.
        
        </p>
    </li>
</ul>
<div className="flex flex-row items-center justify-center pt-10">
            <Link href="/Intro-to-wormhole"><div className="pr-10"><button className="btn  text-white w-[150px] items-center justify-center mt-2 text-center mb-4 tarnsition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Back</button></div></Link>
            <Link href="/Gateway-architecture"><div className="pr-10"><button className="btn  text-white w-[150px] items-center justify-center mt-2 text-center mb-4 tarnsition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Continue</button></div></Link>
            
</div>

       </div>
    </div>
    </div></>
    
    
)}