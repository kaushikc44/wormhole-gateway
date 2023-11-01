import Sidebar from "@/components/Sidebar";
import Image from 'next/image';
import Link from 'next/link';

export default function IntroCosmos(){
    return(
        <>
            <Sidebar />
              
            <div class="sm:ml-64 ">
   
   <div className="  rounded">
       <div className="flex flex-col md:pl-[200px] md:pr-[150px] md:pt-10 bg-figma-500 min-h-screen">
        
           <div className=" flex flex-col items-center justify-center">
               <h1 className="text-5xl  font-bold text-white sm:pt-4">Intro to Cosmos 
               </h1>
               <p className="pt-5  text-white text-xl">Prior to delving into the intricacies of Wormhole’s Gateway, it is essential to establish a solid foundation by comprehending the key components of the Cosmos ecosystem and gaining a fundamental understanding of the Cosmos Network. This section serves as a prerequisite for exploring Wormhole’s Gateway and the possible role of Cosmos and its ecosystem in it.
               </p>
               <p className="pt-5 text-white text-xl">By the end of this section, you should have a much better idea of some key components of Cosmos, which are building blocks of Gateway and its operational mechanisms.
               
               </p>
               
           </div>

    <h3 className="text-3xl font-bold text-white sm:pt-4 items-start justify-start text-left mt-4 ">Cosmos Network:</h3>

    <div className="flex flex-col items-center justify-center">
        <p className="pt-5 text-white text-xl">In the years since Bitcoin whitepaper got published, there has been a remarkable surge in the adoption of blockchain technology. This surge has attracted the attention of developers and users alike, ushering in a new era of possibilities and challenges.
        
        
        </p>   
        
        <p className="pt-5 text-white text-xl">This increasing adoption has given rise to a fresh set of challenges and opportunities. Teams across the landscape have eagerly embraced these challenges, and working to transform them into new unique solutions.
        
        
        </p>
    </div>
<p className="pt-5 text-white text-xl">Some notable examples which have made a significant impact are:
        <div  className="flex flex-col items-center justify-center ">
            <ul className="list-disc pl-10">
                <li>
                    <p className="pt-5 text-white text-xl">
                    Solana: A highly performant layer-1 blockchain, which is getting recognized for its huge potential as a payment solution.
                    </p>
                </li>

                <li>
                    <p className="pt-5 text-white text-xl">
                    Ethereum Layer-2 Solutions: Teams are actively working on layer-2 scaling solutions like Optimistic Rollups and zk-Rollups to enhance its transaction throughput.
                    </p>
                </li>
                <li>
                    <p className="pt-5 text-white text-xl">
                    Chainlink: A decentralized oracle network that connects smart contracts with real-world data and external APIs.

                    </p>
                </li>
            </ul>
            <p className="pt-5 text-white text-xl italic">
            There has been no shortage of such impactful approaches!!

            </p>
            
        </div>

</p>   
        <div className="flex flex-col items-center justify-center ">
            <p className="pt-5 text-white text-xl">
            Continuing with this trend, in 2019, Cosmos was lunched, subsequently emerging as a leader in interoperability through IBC and pioneering the Appchain trend with the Cosmos SDK. (We will discuss IBC, Appchain and Cosmos SDK later in this section!)

            </p>
        </div>
        <p className="pt-5 text-white text-xl mt-5 font-bold">To begin with Cosmos:</p>

        <div  className="flex flex-col items-center justify-center ">
            <ul className="list-disc pl-10 ">
                <li>
                    <p className="pt-5 text-white text-xl">
                    Cosmos stands out from many other layer-1, rather than being built upon a single blockchain, it operates as a network of interconnected blockchains. So composable and interconnected, it's best to view the collective chains as one ecosystem rather than individual chains form an integration standpoint.

                    </p>
                </li>

                <li>
                    <p className="pt-5 text-white text-xl">
                    Cosmos has embraced a multi-chain future, comprising various specialized, independent blockchains that achieve interoperability through a common tech stack.
                    </p>
                </li>
                <li>
                    <p className="pt-5 text-white text-xl">
                    Cosmos tackles the challenge of allowing "multiple parallel blockchains to interoperate while retaining their security properties." Traditionally, scalability issues in Layer-1 Blockchains were approached by adding layers or increasing hardware requirements, potentially compromising decentralization, and security, while in a multi-chain framework, security can be preserved while addressing scalability by spreading computations across layer-1 networks, and it introduces the concept of <span className="font-bold">"Application-Specific Blockchains. (Appchains)"</span>
                    </p>
                </li>
            </ul>
            
        </div>
        <p className="font-bold pt-5 text-white text-xl mt-5">Appchains:
</p>

        <div className="flex flex-col items-center justify-center">
            <p className="pt-5 text-white text-xl ">Previously, decentralized applications were primarily built on existing blockchains due to their convenience and practicality. However, with Cosmos, developers can now readily create and deploy scalable, interoperable application-specific blockchains. This shift has led to the current trend of Appchains, thanks to the developer-friendly tech stack for building them.
</p>
        <p className="pt-5 text-white text-xl">In straightforward terms, <span className="font-bold">developing your DApp as a blockchain is essentially creating an Appchain.</span></p>
        <p className="pt-5 text-white text-xl"> Appchains within the Cosmos network can have their own unique governance models, consensus mechanisms, and economic parameters, tailored to the specific requirements of the decentralized applications they aim to host. 
</p>
        <Image src="/appchains.jpg" alt='Appchain Image' width={800} height={800} className="pt-4"/> 

        <p className="pt-5 text-white text-xl ">With the Cosmos-SDK & Tendermint consensus (we will discuss this in upcoming topics), developers can easily build their own blockchain (something that historically would not have been possible).
</p>

      
        </div>
        <p  className="pt-5 text-white text-xl ">Furthermore, application-specific blockchains provide additional benefits such as:
</p>
<div  className="flex flex-col items-start pl-10 ">
            <ul className="list-decimal ">
                <li>
                    <p className="pt-5 text-white text-xl">
                    Performance
                    </p>
                </li>

                <li>
                    <p className="pt-5 text-white text-xl">
                    Security
                    </p>
                </li>
                <li>
                    <p className="pt-5 text-white text-xl">
                    Sovereignty
                    </p>
                </li>
                <li>
                    <p className="pt-5 text-white text-xl">
                    Flexibility
                    </p>
                </li>
            </ul>
            
        </div>
<p className="pt-5 text-white text-xl"> Further, to gain more understanding of Cosmos, let’s look into 4 key components of Cosmos:</p>

<div  className="flex flex-col items-start pl-10 ">
            <ul className="list-decimal ">
                <li>
                    <p className="pt-5 text-white text-xl">
                    Tendermint Core Consensus Engine:
                    <ul className="list-disc pl-10">
                       
                        <li className="pt-4 text-white text-xl">
                            <p>
                            Tendermint operates as a Byzantine Fault Tolerance (BFT) consensus algorithm, designed to ensure finality, order consistency, and optional availability. Notably, Tendermint utilizes a Proof-of-Stake (PoS) consensus mechanism, often viewed as an improvement over Proof-of-Work (PoW) in terms of speed, scalability, and environmental considerations.
                            </p>
                        </li>
                        <li>
                            <p className="pt-4text-white text-xl">
                            For more in-depth information: <Link href="https://blog.cosmos.network/tendermint-explained-bringing-bft-based-pos-to-the-public-blockchain-domain-f22e274a0fdb" className="underline" >Tendermint BFT Consensus</Link>
                            </p>
                        </li>
                    </ul>
                    </p>
                </li>

                <li>
                    <p className="pt-5 text-white text-xl">
                    <Link href="https://docs.cosmos.network/v0.46/intro/overview.html" className="underline">Cosmos SDK:</Link>
                    <ul className="list-disc pl-10">
                       
                        <li className="pt-4 ">
                            <p className="text-white text-xl">
                            The Cosmos SDK offers an open-source framework that empowers developers to construct blockchain-based applications. This framework is centered around the concept of "composable modules," most of which are open-source. Notably, anyone can create a new module and integrate it into the Cosmos SDK.
                            </p>
                        </li>
                        <li>
                            <p className="pt-4  text-white text-xl">
                            This approach significantly simplifies the development of Appchains for developers. Instead of starting from scratch, they can leverage existing modules, which cover a range of commonly required functionalities such as Auth, Mint, Governance, Distribution, and more.

                            </p>
                        </li>
                    </ul>
                    </p>
                </li>
                <li>
                    <p className="pt-5 text-white text-xl">
                    <Link href="https://ibcprotocol.org/" className="underline">Inter-Blockchain Communication Protocol (IBC):</Link>
                    <ul className="list-disc pl-10">
                       
                        <li className="pt-4">
                            <p className=" text-white text-xl">
                            In simpler terms, IBC enables different blockchains to communicate with each other using a common standard. This means they can seamlessly and trustlessly transfer tokens and other data between blockchains that were previously disconnected.

                            </p>
                        </li>
                        <li>
                            <p className="pt-4  text-white text-xl">
                            The IBC application layer can be used to build a wide range of cross-chain applications, including but not limited to token transfers, interchain accounts, non-fungible token transfers and oracle data feeds.


                            </p>
                        </li>
                    </ul>
                    </p>
                </li>
                <li>
                    <p className="pt-5 text-white text-xl">
                    Cosmos Hub:
                    <ul className="list-disc pl-10">
                       
                        <li className="pt-4">
                            <p>
                            It is a blockchain, developed by the Cosmos team and notably the first of its kind in the Cosmos ecosystem, plays a vital role in maintaining a record of the total tokens within each "zone" – referring to the other blockchains within the ecosystem.

                            </p>
                        </li>
                    </ul>
                    </p>
                </li>
            </ul>
            
        </div>

        <div className="flex flex-col items-center justify-center">
            <p className="pt-5 text-white text-xl">Now that we have explored Cosmos, let’s dive into the amazing part of it, i.e., the Appchains and IBC. Within the Cosmos ecosystem, we can discover many legitimate and large sovereign blockchains, each tailored for specific purposes. Prominent examples include Osmosis, Cronos, Juno, Stargaze, and more.
</p>    
        <p className="pt-5 text-white text-xl"><span className="font-bold">Osmosis</span>, for instance, stands out as the first interchain Automated Market Maker (AMM) DEX. Unlike other DEXs, like Uniswap that trade between assets on the same chain, Osmosis allows users to swap assets between different chains! Notably, Osmosis is an application-based blockchain, finely tuned to excel as an AMM DEX, ensuring high performance in its specialized role.
</p>
        
        </div>
        <p className="pt-5 text-white text-xl"><span className="font-bold">Stargaze</span> is another noteworthy IBC blockchain, purpose-built for handling Non-Fungible Tokens (NFTs). 
</p>

        <p className="pt-5 text-white text-xl">These Appchains are meticulously designed to serve specific functions, which raises the question: What if they could harness their potential by connecting to the broader blockchain ecosystem, including EVM chains, Solana, and more? The possibilities are indeed enticing.</p>

        <div className="flex flex-row items-center justify-center pt-10">
            <Link href="/QuickStart"><div className="pr-10"><button className="btn  text-white w-[150px] items-center justify-center mt-2 text-center mb-4 tarnsition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Back</button></div></Link>
            <Link href="/Intro-to-wormhole"><div className="pr-10"><button className="btn  text-white w-[150px] items-center justify-center mt-2 text-center mb-4 tarnsition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Continue</button></div></Link>
            
        </div>
       </div>
       
       
    
   </div>
        
   
  
</div>

    
  

        </>
    )
}