
import Sidebar from "@/components/Sidebar";
import Image from 'next/image';
import Link from 'next/link';
// import {BsDiscord} from "react-icons/bs"

export default function GatewayArchitecture(){
    return(
        <>
            <Sidebar />
              
            <div class="sm:ml-64 ">
   
   <div className="  rounded">
       <div className="flex flex-col md:pl-[200px] md:pr-[150px] md:pt-10 bg-figma-500 min-h-screen">
        
           <div className=" flex flex-col items-center justify-center">
               <h1 className="text-5xl  font-bold text-white sm:pt-4">Getting Started
               </h1>
               <p className="pt-5  text-white text-xl">Up to this point, we've delved into Gateway, understanding its functionality and security considerations. Now, let's shift our focus to what can be created using Gateway. We'll discuss potential use-cases for Gateway, aiming to uncover its full potential. After that, we'll explore how to perform essential operations with Gateway for your DApp considering the fee structure and will guide Cosmos developers on integrating their Appchains with Gateway. 

               </p>
               
            </div>
            <p className="pt-5  text-white text-xl "> <span className="font-bold">Potential Use-Cases:</span>Before we delve into the use-cases, it's essential to acknowledge that as more Appchains integrate with Gateway, we will uncover a growing array of potential use-cases.



               </p>

               <p className="pt-5  text-white text-xl "> <span className="font-bold">IBC-Native Assets: </span>Gateway can be used to create IBC-Native version of assets by deploying Cosmwasm contracts on Gateway. This can be assets like native USDC, native DAI etc.


</p>
               <p className="pt-5  text-white text-xl "> <span className="font-bold">Decentralized Identity and Authentication:</span>Developers can leverage Gateway to build decentralized identity and authentication solutions that work across multiple Cosmos Appchains. This ensures secure and privacy-focused identity verification for various applications.



</p>
<p className="pt-5  text-white text-xl "> <span className="font-bold">Cross-Chain Data Oracles:</span> Developers can build cross-chain data oracles on Gateway, providing smart contracts and applications access to real-time data from multiple sources. This enhances the reliability and functionality of DeFi and decentralized applications.




</p>
<p className="pt-5  text-white text-xl "> <span className="font-bold">Interchain Staking:</span>Users can stake assets bridged through Gateway on Osmosis, participating in network security and governance activities while earning staking rewards.



</p>
<p className="pt-5  text-white text-xl "> 
These are just a few examples of the many potential use-cases to kickstart your journey with Gateway. The possibilities are vast, and now, let's explore how you can begin building with Gateway.


</p>
<p className="pt-10  text-white text-xl font-bold"> 
Integrating Wormhole Gateway with your dApp:


</p>
<p className="pt-5  text-white text-xl "> 
Integration with Wormhole Gateway can be accomplished with a few lines of code


</p>
<ul className="list-disc pl-10">
        <li>
            <p className="text-white text-xl pt-5">
            Transfers from an External Chain to any supported Cosmos Chain, <Link href="https://docs.wormhole.com/wormhole/explore-wormhole/gateway#into-cosmos"><span className="underline font-bold">see Into Cosmos</span></Link>

            </p>
            
        </li>
        <li>
            <p className="text-white text-xl pt-5">
            Transfers from any supported Cosmos Chain to an External Chain, <Link href="https://docs.wormhole.com/wormhole/explore-wormhole/gateway#out-of-cosmos"><span className="underline font-bold">see Out of Comsos </span></Link>

            </p>
            
        </li>
        <li>
            <p className="text-white text-xl pt-5">
            Transfers between any supported Cosmos Chains, <Link href="https://docs.wormhole.com/wormhole/explore-wormhole/gateway#between-cosmos-chains"><span className="underline font-bold">see Between Cosmos Chains
</span></Link>

            </p>
            
        </li>
</ul>
<p className="text-white font-bold text-xl pt-10">Fee Structure:</p>  
<p className="text-white text-xl pt-5">Gateway, fees are designed to be minimal. Currently, the primary cost to consider is the source chain gas fee, especially when transferring assets from blockchains. Here is a breakdown of the fees you may encounter when using Gateway:
</p>
<p className="text-white text-xl pt-5">Fee Required:</p>      
<ul className="list-decimal pl-10">
    <li>
        <p className="text-white text-xl pt-5">
        Source Chain Gas: This pertains to the gas fees incurred on the source chain, such as Ethereum. Users must cover these fees when initiating transactions.

        </p>
    </li>
    <li>
    <p className="text-white text-xl pt-5">
  Relayer Fee [Source Chain &rarr; Gateway]: As of now, the cost for processing a Wormhole message from the source chain to Gateway is zero. However, it's worth noting that this fee structure might evolve in the future.
</p>

    </li>
    <li>
        <p className="text-white text-xl pt-5">
        Destination Chain Gas [Non-Cosmos]: Gas fees on a destination chain (e.g., Ethereum) must be covered by either the relayer or, the user
        </p>
    </li>
</ul>
<p className="text-white text-xl pt-5">Fee Not Required:</p>   
<ul className="list-decimal pl-10">
    <li>
        <p className="text-white text-xl pt-5">
        Gateway: Gateway does not have token-priced metering or require gas fees to be paid by the user 
        </p>
    </li>
    <li>
    <p className="text-white text-xl pt-5">
    Relayer Fee [Gateway &rarr; Cosmos]: Relayers are not incentivized by user fees.

</p>

    </li>
    <li>
        <p className="text-white text-xl pt-5">
        Destination Chain [Cosmos]: The processing cost on the destination chain within the Cosmos ecosystem is covered by IBC relayers.

        </p>
    </li>
</ul>

<p className="text-white text-xl pt-5">
For more deep understanding you can visit <Link href="https://docs.wormhole.com/wormhole/explore-wormhole/gateway"><span className="underline font-bold">this.</span></Link>
        </p>

        <p className="text-white text-xl pt-5">For Cosmos developers eager to integrate their Appchain with Gateway, here's the step-by-step process:
        </p>

        <Image src="/integration.png" alt="Integration Guide" width={800} height={800} className="pt-2"/>
        <ul className="list-decimal pl-10 pt-5">
            <li>
                <p className="pt-5 text-white text-xl">
                Get in touch with Wormhole Contributors
                </p>
            </li>
            <li>
                <p className="pt-5 text-white text-xl">
                Wormhole governance proposal to add your chain.
                </p>
            </li>
            <li>
                <p className="pt-5 text-white text-xl">
                Your chain approved and relaying goes live.
                </p>
            </li>

        </ul>
        <p className="text-white text-xl pt-5">Here, you can find the more details regarding chain <Link href="https://docs.wormhole.com/wormhole/explore-wormhole/gateway/onboard"><span className="underline font-bold">onboarding process.</span></Link></p>
        
        <p className="text-white text-xl pt-5">To conclude, here's a call to action for you: Feel free to join Wormhole Discord for any questions, engaging discussions, and further insights. Additionally, you can become part of Wormhole India, a community focused on supporting regional projects that are harnessing Wormhole's cross-chain capabilities.
</p>

<div className="flex flex-row items-center justify-between ">
        {/* {BsDiscord} */}
</div>

<p className="pt-5 text-white text-xl ">Join   <Link href="https://discord.gg/wormholecrypto"><span className="font-bold underline"> Wormhole Discord</span></Link>
 </p>
 
<p className="pt-5 text-white text-xl ">Connect with  <Link href="https://x.com/wormholeIndia"><span className="font-bold underline">Wormhole India </span></Link>
 </p>
 
<p className="pt-5 text-white text-xl ">Join   <Link href="https://t.me/wormholeindia"><span className="font-bold underline">Wormhole India</span></Link>
 </p>

<div className="flex flex-row items-center justify-center pt-10">
               <Link href="/Security-Aspects"><button className="btn  text-white w-[150px] items-center justify-center mt-2 text-center mb-4 tarnsition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Back</button></Link>
</div>
        </div>
    </div>
    </div>
    </>
    )}
