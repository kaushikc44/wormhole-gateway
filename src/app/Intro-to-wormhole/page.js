import Sidebar from "@/components/Sidebar";
import Image from 'next/image';
import Link from 'next/link';


export default function IntroWormhole(){
    return(
        <>
            <Sidebar />
              
            <div class="sm:ml-64 ">
   
   <div className="  rounded">
       <div className="flex flex-col md:pl-[200px] md:pr-[150px] md:pt-10 bg-figma-500 min-h-screen">
       <div className=" flex flex-col items-center justify-center">
       <h1 className="text-5xl  font-bold text-white sm:pt-4">Intro to Wormhole
        </h1>
        <p className="pt-5 text-white text-xl"> In this section, we will delve into Wormhole and its inner workings, laying the foundation for a good understanding before we dive into Wormhole Gateway. We will uncover what Wormhole is, get an overview of how Wormhole handles message transfers, and gain insights into the role of Guardians.
</p>
       </div>
       <p className="pt-10 font-bold text-2xl">Wormhole:</p>
       <div className=" flex flex-col items-center justify-center">
        <p className="pt-5 text-white text-xl">Wormhole is not a blockchain itself, it provides a means of communication between blockchains or rollups. To be specific, Wormhole is a generic <span className="font-bold">message passing protocol</span>  that enables communication between blockchains.</p>
        
        
       </div>
       <p className="pt-5 text-white text-xl">Consider the following examples of potential applications that are now possible with Wormhole:</p>
       <ul className="list-disc pl-10">
            <li className="pt-4">
                <p className="text-white text-xl">Cross-Chain Exchange</p>
            </li>
            <li className="pt-4">
                <p className="text-white text-xl">Cross-Chain Identity</p>
            </li>
            <li className="pt-4">
                <p className="text-white text-xl">Cross-Chain Governance</p>
            </li>
            <li className="pt-4">
                <p className="text-white text-xl">Cross-Chain Borrow Lending</p>
            </li>
        </ul>
        <p className="pt-7 text-white text-xl">Further, there are three core pillars that Wormhole enables for the blockchain world:</p>
        <ul className="list-decimal pl-10 pt-3">
            <li className="pt-4">
                <p className="text-white text-xl">xAssests: Taking assets cross-chain which means a next-generation, chain and path agnostic wrapped token i.e., can move freely between chains.</p>
            </li>
            <li className="pt-4">
                <p className="text-white text-xl">xApps: Taking dApp cross-chain with least development effort.</p>
            </li>
            <li className="pt-4">
                <p className="text-white text-xl">xData: Shared and global reservoir of arbitrary data, enabling cross-chain data interaction.
</p>
            </li>
        </ul>
        <p className="text-white pt-10 text-xl">With this basic introduction to Wormhole behind us, let's now turn our attention to some key components of Wormhole. These components will provide insights into how Wormhole handles the message transfers.
To grasp how the message transfer works, let’s consider an entity trying to transfer assets from chain-A to chain-B as an illustrative example.
Wormhole is comprised of several noteworthy components. Let's talk about the names of the major pieces and how they fit together.
</p>

<div className=" flex flex-col items-center justify-center pt-10">
    <Image src="/wormhole.jpg" alt="wormhole chain" width={1000} height={1000}  />

</div>
<p className="pt-5 text-white text-xl">The components are classified in two parts:</p>
<ul className="list-decimal pl-10">
    <li className="pt-4">
        <p className="text-white text-xl">On-Chain Components:</p>
        <ul className="list-disc pl-10">
            <li className="pt-4 "><p className="text-white text-xl">Wormhole Core Contract: Primary Contract, which fundamentally allow for cross-chain communication.
</p></li>
<li className="pt-4 "><p className="text-white text-xl">Emitter: A contract that calls the publish message method on the core contract and emits message that chain-A wants to transfer some assets to chain-B.
</p></li>
<li className="pt-4 "><p className="text-white text-xl">Transaction Log: The core contract will write an event to the Transaction Log with details about the emitter and sequence number to identify the message.
</p></li>
        </ul>

    </li>
    <li className="pt-4">
        <p className="text-white text-xl">Off-Chain Components:</p>
        <ul className="list-disc pl-10">
            <li className="pt-4 "><p className="text-white text-xl">Guardians: A P2P network of 19 Validators, that observe the core contract and the transaction log, to validate and sign the messages emitted by the core contract on each connected chain to produce VAAs.

</p></li>
<li className="pt-4 "><p className="text-white text-xl">VAAs: The message is wrapped up in a structure called a VAA which combines the message with the guardian signatures to form a proof. Ultimately a smart contract on a chain-B must process the VAAs to receive a wormhole message.

</p></li>
<li className="pt-4 "><p className="text-white text-xl">Relayers: Relayers in the Wormhole context are off-chain processes that deliver VAAs to their destination (chain-B). They act as delivery mechanisms for VAAs without the capacity to tamper with the outcome.

</p></li>
        </ul>
    </li>
</ul>
<p className="text-white pt-5 text-xl">For a more comprehensive understanding, delving into <Link href="https://docs.wormhole.com/wormhole/explore-wormhole/guardian" ><span className="underline font-bold">Guardians</span></Link> is highly recommended.</p>
<p className="text-white pt-5 text-xl">This basic overview of how <Link href="https://docs.wormhole.com/wormhole/explore-wormhole/components" ><span className="underline font-bold">Wormhole</span></Link> handles message transfers provides a good foundation to begin with the Gateway. However, delving deeper into Wormhole would offer a richer understanding that will ultimately, in turn, provide more valuable insights into the Gateway.
</p>
    <div className="flex flex-row items-center justify-center pt-10">
            <Link href="/Intro-to-cosmos"><div className="pr-10"><button className="btn  text-white w-[150px] items-center justify-center mt-2 text-center mb-4 tarnsition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Back</button></div></Link>
            <Link href="/Intro-to-Gateway"><div className="pr-10"><button className="btn  text-white w-[150px] items-center justify-center mt-2 text-center mb-4 tarnsition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Continue</button></div></Link>
            
    </div>
       </div>
    </div>
    </div>
    </>
    
)}