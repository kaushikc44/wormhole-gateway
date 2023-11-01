import Sidebar from "@/components/Sidebar";
import Image from 'next/image';
import Link from 'next/link';

export default function GatewayArchitecture(){
    return(
        <>
            <Sidebar />
              
            <div class="sm:ml-64 ">
   
   <div className="  rounded">
       <div className="flex flex-col md:pl-[200px] md:pr-[150px] md:pt-10 bg-figma-500 min-h-screen">
        
           <div className=" flex flex-col items-center justify-center">
               <h1 className="text-5xl  font-bold text-white sm:pt-4">Deep Dive into Gateway’s Architecture
               </h1>
               <p className="pt-5  text-white text-xl">As discussed earlier, Wormhole Gateway is a Cosmos-SDK chain for bridging external assets into the Cosmos ecosystem and ensuring unified liquidity across Cosmos chains. However, how does it accomplish this feat? What's the underlying architecture? And, most importantly, is it secure and user-friendly?
               </p>
               <p className="pt-5 text-white text-xl">In this guide, we'll explore the inner workings of Wormhole Gateway, shedding light on what's happening under the hood. This will answer the common questions that curious minds may have while delving into its usage.

               
               </p>
               <p className="pt-5 text-white text-xl">The aim is to boost confidence by educating and increasing awareness about Gateway's inner workings, enabling everyone to experiment with it and expand cross-chain possibilities.
               
</p>
</div>
<h3 className="pt-10 text-2xl  font-bold text-white">Architecture
               </h3>
               <p className="pt-5 text-white text-xl">Wormhole Gateway comprises several components. However, let's get to know the major ones and how they work together.
               
</p>
<p className="pt-5 text-white text-xl">Largely, we can say Wormhole Gateway is built using these three components:

               
</p>
<ul className="list-disc pl-10">
                <li>
                    <p className="pt-5 text-white text-xl">
                    Cosmos SDK: An SDK that is equipped with several modules and a simple framework for development of custom Chain logic, basically it simplifies blockchain development.

                    </p>
                </li>

                <li>
                    <p className="pt-5 text-white text-xl">
                    IBC Module: Module that simplifies connections with the rest of the Cosmos ecosystem via IBC
                    </p>
                </li>
                <li>
                    <p className="pt-5 text-white text-xl">
                    Proof-of-Authority-Valset: Wormhole’s 19 Guardians which also acts as Gateway’s Validators.

                    </p>
                </li>
            </ul>
            <p className="pt-10 text-white text-xl">Further, Wormhole Gateway is structured through a set of contracts and modules. Specifically, under the hood, Gateway consists of three Wormhole’s Cosmwasm Smart Contracts and three IBC Middlewares.	

               
</p>    
<p className="pt-10 text-white text-xl">The contracts are:

               
</p>    
<ul className="list-decimal pl-10">
                <li>
                    <p className="pt-5 text-white text-xl">
                    The Wormhole Core Bridge: Handles everything related to Wormhole functionality that involves maintaining the current guardian set to publishing and verifying messages.


                    </p>
                </li>

                <li>
                    <p className="pt-5 text-white text-xl">
                    <Link href="https://docs.wormhole.com/wormhole/explore-wormhole/core-contracts#token-bridge" ><span className="underline font-bold">The Wormhole Token Bridge:</span></Link> The Token Bridge contract allows token transfers between blockchains through a lock and mint mechanism, however as a Cosmwasm Smart Contract it does burning and minting of CW20 tokens.

                    </p>
                </li>
                <li>
                    <p className="pt-5 text-white text-xl">
                    IBC Translator Contract: The IBC Translator contract handles the job of translating Wormhole Token Bridge messages into <Link href="https://github.com/cosmos/ibc/blob/main/spec/app/ics-020-fungible-token-transfer/README.md"><span className="underline font-bold">ICS-20</span></Link> messages and vice versa

                    </p>
                </li>
            </ul>
            <p className="pt-5 text-white text-xl">
            Here, is the logical flow of the <span className="font-bold">token transfer:</span>

                    </p>
                <ul className="list-decimal pl-10">
                <li>
                    <p className="pt-5 text-white text-xl">
                    
                    Token Transfer into Cosmos Ecosystem:
                    <ul className="list-disc pl-10">
                        <li>
                        <p className="pt-5 text-white text-xl">
                        Redeem the <Link href="https://docs.wormhole.com/wormhole/explore-wormhole/vaa"><span className="underline font-bold">VAA</span></Link> from the <Link href="https://docs.wormhole.com/wormhole/explore-wormhole/core-contracts#token-bridge"><span className="underline font-bold">Token Bridge </span></Link>to initiate the lock and mint process for token transfer.
                        </p>
                        </li>

                        
                        <li>
                            <p className="pt-5 text-white text-xl">Mint tokens using <Link href="https://github.com/CosmosContracts/juno/tree/v14.1.1/x/tokenfactory#readme"><span className="underline font-bold">Token Factory</span></Link> (a Custom Token-Creation Module)
                            
                            </p>
                        </li>
                        <li>
                            <p className="pt-5 text-white text-xl">
                            Decode the added information, known as <span className="font-bold">GatewayIbcTokenBridgePayload</span>, which provides essential details for the Gateway to carry out the transfer.
                            </p>
                        </li>
                        <li>
                            <p className="pt-5 text-white text-xl">
                            Send tokens via IBC to destination cosmos chain.
                            </p>
                        </li>
                        
                        

                    </ul>


                    </p>

                </li>

                <li>
                    <p className="pt-5 text-white text-xl">
                    Token Transfer out of Cosmos Ecosystem:
                    <ul className="list-disc pl-10">
                        <li>
                        <p className="pt-5 text-white text-xl">
                        Burn the Token Factory tokens.
                        </p>
                        </li>

                        
                        <li>
                            <p className="pt-5 text-white text-xl">Unlock the CW20 tokens.
                            
                            </p>
                        </li>
                        <li>
                            <p className="pt-5 text-white text-xl">
                            Give approval to the Token Bridge to utilize the CW20 tokens.
                            </p>
                        </li>
                        <li>
                            <p className="pt-5 text-white text-xl">
                            Call <span className="font-bold">InitiateTransfer</span> or <span className="font-bold">InitiateTransferWithPayload</span> based on whether the <span className="font-bold"> GatewayIbcTokenBridgePayload</span> is of type Simple or  <span className="font-bold">ContractControlled.</span>.


                            </p>
                        </li>
                        
                        

                    </ul>
                    </p>
                </li>
                
            </ul>
            <p className="text-white text-xl pt-5">The 3 <Link href="https://tutorials.cosmos.network/academy/3-ibc/9-ibc-mw-intro.html"><span className="underline font-bold">IBC</span></Link> Middlewares are:</p>
            <ul className="list-decimal pl-10">
                <li>
                    <p className="text-white text-xl pt-5 ">
                    Strangelove’s Packet Forward Middleware: The packet-forward-middleware is an IBC middleware module designed for Cosmos blockchains that make use of the IBC protocol. It allows a chain, incorporating this middleware, to route incoming IBC packets from one chain to another. Simply in Gateway, it facilitates Cosmos-to-Cosmos transfers.
                    </p>
                </li>
                <li>
                    <p className="text-white text-xl pt-5 ">
                    Osmosis’ IBC Hooks: The IBC Hooks middleware is employed for transfers from Cosmos to external chains. The wasm hook, an IBC middleware, enables ICS-20 token transfers to initiate contract calls, allowing contracts to interact across different chains while moving tokens. This versatile functionality has various applications, with cross-chain swaps being notably powerful.

                    </p>
                </li>
                <li>
                    <p className="text-white text-xl pt-5 ">
                    <Link href="https://docs.wormhole.com/wormhole/explore-wormhole/gateway#ibc-composability-middleware"><span className="underline font-bold">IBC Composability Middleware:</span></Link> The newly developed IBC Composability middleware by Wormhole enhances the developer experience. It offers Gateway integrators a single message format for memos, which is then directed to either the Packet Forward Middleware (PFM) or the IBC Hooks middleware, depending on the destination chain.

                    </p>
                </li>

            </ul>
            <p className="pt-5 text-white text-xl">Gateway streamlines access for any Cosmos chain to Wormhole's network of 23+ connected blockchains using just one simple IBC connection. </p>
            <p className="pt-5 text-white text-xl">When an entity bridges a token from Wormhole's connected blockchains to a Cosmos SDK chain through Gateway, the token is locked in a wormhole contract on the source chain. It is then minted as an ICS-20 compatible asset on the Gateway chain, triggered by a VAA message via a relayer. This asset is further locked in Gateway's IBC module and subsequently minted on the destination chain through IBC messages. The resulting ICS-20 asset becomes fungible via Strangelove's packet forward middleware. Additionally, Gateway efficiently utilizes IBC Hooks for seamless integration with CosmWasm contracts.
</p>
            <p className="pt-5 text-white text-xl">For Wormhole xAssets transfers between Cosmos chains, the process involves IBC messages from the source chain to Gateway and forwarding from Gateway to the destination Cosmos chain.
</p>

<div className="flex flex-row items-center justify-center pt-10">
            <Link href="/Intro-to-Gateway"><div className="pr-10"><button className="btn  text-white w-[150px] items-center justify-center mt-2 text-center mb-4 tarnsition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Back</button></div></Link>
            <Link href="/Security-Aspects"><div className="pr-10"><button className="btn  text-white w-[150px] items-center justify-center mt-2 text-center mb-4 tarnsition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Continue</button></div></Link>
            
        </div>
        </div>
        </div>
        </div>
        </>
        )}