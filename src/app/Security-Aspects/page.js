import Sidebar from "@/components/Sidebar";
import Image from 'next/image';
import Link from 'next/link';

export default function SecurityAspect(){
    return(
        <>
            <Sidebar />
              
            <div class="sm:ml-64 ">
   
   <div className="  rounded">
       <div className="flex flex-col md:pl-[200px] md:pr-[150px] md:pt-10 bg-figma-500 min-h-screen">
        
           <div className=" flex flex-col items-center justify-center">
               <h1 className="text-5xl  font-bold text-white sm:pt-4">Security Aspects
               </h1>
               
            </div>
            <p className="pt-5  text-white text-2xl font-bold">Security at the Core:
               </p>
            <p className="pt-5  text-white text-xl">Just as understanding Gateway's inner workings is crucial, comprehending its security measures is paramount. As with any blockchain technology, security is a top concern. In this section, we’ll delve into how Gateway enhances Wormhole’s security to ensure the protection of the assets and transactions? What safeguards are in place to mitigate risks? These are the questions we'll address in this section.</p>
            <p className="pt-5  text-white text-xl">To begin, let’s start with Wormhole’s security, at the core, Wormhole is secured by a network of Guardians nodes that validate and sign messages. If a super majority (e.g., 13 out of 19) Guardians sign the same message, it can be considered valid. A smart contract on the target chain will verify the signatures and format of the message before approving any transaction.

               </p>
            <p className="pt-5  text-white text-xl">Messages emitted by contracts need to be validated by the guardians before they can be sent to the target chain. Once a majority of Guardians observe the message and finality has been achieved, the Guardians sign the message.
               </p>

            <p className="pt-5  text-white text-xl">The message is wrapped up in a structure called a VAA (Verified Action Approval) which combines the message with the Guardian signatures to form a proof.
In essence, VAAs simply attest that <span className="italic">"this contract on this chain said this thing.”</span>

               </p>
            <p className="pt-5  text-white text-xl">The Guardian network consists of 19 world’s top validator companies, responsible for producing signed state attestations, or signed VAAs, upon request from Core Contract integrators. Each Guardian runs full nodes for every blockchain within the Wormhole network. This approach ensures that in the event of a consensus attack or hard fork on a particular blockchain, the network will disconnect that blockchain to prevent the potential issuance of invalid signed VAAs.

               </p>
               <p className="pt-5  text-white text-xl">Guardians running full node for each connected blockchain offer the advantage of comprehensive access to the entire state of DeFi. However, this approach comes with a drawback: running full nodes for each blockchain introduces scalability concerns, particularly in the context of the Cosmos network.

</p>
<p className="pt-5  text-white text-xl">Gateway was introduced for various reasons; however, it also leverages this advantage while addressing the corresponding drawback. As we are aware, the Gateway is an application-specific blockchain which connects the Core Wormhole Protocol with the entire suite of Cosmos Appchains, all without the need to run a full node for each individual Appchain.

</p>
<p className="pt-5  text-white text-xl">Light clients have long been the desired security solution for bridging because of their ability to accurately verify blockchain data without the need to maintain a full copy of all data on the connected, with IBC representing the gold standard.
</p>
<p className="pt-5  text-white text-xl">By utilizing IBC for transporting Wormhole messages, Gateway harnesses the proven IBC protocol, reducing the infrastructure overhead on the Guardian network. Rather than requiring a full-node on every Cosmos SDK chain, the Guardian network can run a node on Gateway and utilize IBC for seamless interchain transfers. This approach optimizes efficiency and enhances the security of the entire ecosystem.

</p>
<p className="pt-5  text-white text-xl">The Gateway, operating within the Guardian network, enhances the capabilities of Guardians. It allows them to execute smart contracts across the current state of all blockchains, as opposed to being restricted to just one blockchain. This expanded functionality introduces two crucial safeguards for the Wormhole Asset Layer in addition to the core security assumptions:

</p>
<ul className="list-decimal pl-10">
        <li>
            <p className="pt-5 text-white text-xl">
            <Link href="https://github.com/wormhole-foundation/wormhole/blob/main/whitepapers/0007_governor.md"><span className="underline font-bold">Governor:</span></Link> The Governor plays a pivotal role in monitoring the inflows and outflows of all connected blockchains. It helps identify and delay suspicious transfers that might indicate an exploit or malicious activity.
            </p>
        </li>
        <li>
            <p className="pt-5 text-white text-xl">
            <Link href="https://github.com/wormhole-foundation/wormhole/blob/main/whitepapers/0011_accountant.md"><span className="underline font-bold">Global Accountant:</span></Link>Global Accountant is a Cosmwasm accounting contract built directly into Gateway. Guardians store a record of all bridge transactions on Gateway's public ledger and run checks against this ledger to ensure that assets bridged out of one chain never exceeds the number of assets bridged in. In essence, Global Accountant keeps a close watch on the total circulating supply of Wormhole assets spanning all interconnected chains. It Prevents an exploit resulting in an infinite mint from draining the Wormhole protocol via cross-chain contagion. 

            </p>
        </li>
</ul>
<p className="pt-5  text-white text-xl">Additionally, incorporating the Interchain Stack (Cosmos SDK), into the Gateway enhances Wormhole's transparency and sovereignty. This empowers Wormhole to leverage IBC light clients for seamless liquidity transfers within the interchain.
</p>
<p className="pt-5  text-white text-xl">Moreover, this integration further amplifies transparency in Wormhole's operations. Gateway acts as an autonomous verification layer for Wormhole messages, introducing an additional layer of protection alongside Wormhole's own Guardian consensus mechanism, all on a verifiably transparent public ledger. 

</p>
<p className="pt-5  text-white text-xl">This culmination signifies the robust security infrastructure that Gateway provides in the context of Wormhole's operations.
</p>
    <div className="flex flex-row items-center justify-center pt-10">
            <Link href="/Gateway-architecture"><div className="pr-10"><button className="btn  text-white w-[150px] items-center justify-center mt-2 text-center mb-4 tarnsition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Back</button></div></Link>
            <Link href="/Getting-Started"><div className="pr-10"><button className="btn  text-white w-[150px] items-center justify-center mt-2 text-center mb-4 tarnsition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Continue</button></div></Link>
            
        </div>
        </div>
    </div>
    </div>
    </>
    )}
