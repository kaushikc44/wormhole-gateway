import Sidebar from "@/components/Sidebar";
import Link from 'next/link';

export default function WTGATEWAS(){
    return(
        <>
            <Sidebar />
              
   <div class="sm:ml-64 ">
   
   <div className="  rounded">
       <div className="flex flex-col md:pl-[200px] md:pr-[150px] md:pt-10 bg-figma-500 min-h-screen items-center justify-center">
           <h1 className="text-5xl  font-bold text-white sm:pt-4">QuickStart</h1>
           <p className="pt-5  text-white text-xl">In the ever-expanding landscape of blockchain and cryptocurrency, interoperability and cross-chain connectivity have become the buzzwords that resonate with enthusiasts and experts alike. Just as the internet connected the world's information, cross-chain technology aims to unite diverse blockchains, making it possible for your assets and messages to flow seamlessly from one blockchain to another. 
</p>
           <p className="pt-5 text-white text-xl">Further, we will delve into the Wormhole Gateway and explore how it is extending connections within the blockchain world, ultimately taking forward the mission of Wormhole and enhancing interoperability.
</p>
           <p className="pt-5 text-white text-xl">Firstly, we will start by covering the basics that one need to grasp before diving into Gateway. This means getting a good understanding on the fundamentals of Cosmos and Wormhole. Once we have got that foundation, we will then plunge headfirst into Gateway, exploring its architecture, security aspects, some potential use-cases, and how one can kickstart their journey in building with Gateway.

</p>
        <p className="pt-5 text-white text-xl">The goal is to raise awareness about Gateway, instill confidence in users, and
provide a possible guide on how to start building with Gateway. </p>

        <p className="pt-5 text-white text-xl italic">Note: If you have a basic understanding of the Cosmos Ecosystem and Wormhole, you can jump directly to "About Gateway."
 </p>
           
           <div className="pt-10">
               <Link href="Intro-to-cosmos"><button className="btn  text-white w-[150px] items-center justify-center mt-2 text-center mb-4 tarnsition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Continue</button></Link>
           </div>
       </div>
        
       
    
   </div>

   
  
</div>

        </>
    )
}