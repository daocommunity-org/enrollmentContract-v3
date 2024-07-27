'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, 
    Alert,  AlertDescription,  AlertTitle,  
    Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, TableFooter,
    Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
    LinkPreview,
    Button
} from "@/components/ui";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";


export default function LandingPage() {

    const [term1,setTerm1]=useState(false)
    const [term2,setTerm2]=useState(false)
    const [alertVisible,setAlertVisible] =useState(false)
    const [OnBoardingVisible,setOnBoardingVisible] =useState(false)
    const [objectiveHovered,setObjectiveHovered]=useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setAlertVisible(true)
        },4000)
    },[])

    return (
      <div className="min-h-screen flex flex-col gap-8 items-center" >
        <div className="flex h-screen flex-col gap-10 items-center justify-center">
            {/* Hey There landing part */}
            <motion.div 
                className="w-[70vw] md:w-[60vw] lg:w-[30vw] flex flex-col items-center gap-8"
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 20, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 4 }}
            >
                <h1 className="font-bold text-7xl">Hey There! 👋</h1>
                {/* Typewritter effect */}
                <div className="flex flex-col gap-4">
                    <p>
                        Thanks for showing interest in the DAO Community. 
                    </p>
                    <p>
                        It wouldn't be possible for us to bring this revolutionary idea up and running if you aren't a part of it. Decentralization and Inclusion is the core value around which a DAO survives!
                    </p>
                </div>
            </motion.div>

            {/* Accordion Part */}
            <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 20, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 6 }}
            >
                <Accordion type="single" className="w-[70vw] md:w-[60vw] lg:w-[30vw]" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What we Expect in you</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex gap-2 items-center ">
                                <input type="radio" onChange={()=>setTerm1(true)} />
                                🔎 Googling <br/>
                                📚 Willingness to learn<br/>
                                🧩 Basic idea of Chrome Extensions and Cryptography (Optional)<br/>
                                🏛️ Belief in Democracy<br/>
                                💫 Never-ending supply of enthusiasm<br/>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                    <AccordionTrigger>What can you expect from us</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 items-center ">
                            <input type="radio" onChange={()=>{
                                setTerm2(true)
                                if(term1) setOnBoardingVisible(true)
                                }} />
                            🔗 Work Experience in the Blockchain & Web3 domain<br/>
                            ⚖️ Equal and unbiased treatment of all members<br/>
                            🔓 Exposure to next-generation of Organizational Structures<br/>
                            🌐 Interactions with global leaders in the space<br/>
                            💰 Bountiful reward in governance tokens for every contribution<br/>
                        </div>
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </motion.div>

            {/* Alert till people check the terms */}
            {alertVisible && 
                (!term1 || !term2) &&
                    <div className="absolute bottom-10">
                        <Alert>
                            <AlertTitle>Alert 😉</AlertTitle>
                            <AlertDescription>
                                Agree to the terms in the dropdowns and you can scroll down!
                            </AlertDescription>
                        </Alert>
                    </div>  
            }
        </div>  
        {alertVisible && OnBoardingVisible && <Objective objectiveHovered={objectiveHovered} setObjectiveHovered={setObjectiveHovered}/>}
        {/* <Objective objectiveHovered={objectiveHovered} setObjectiveHovered={setObjectiveHovered}/> */}
      </div>
    );
  }

function Objective({objectiveHovered, setObjectiveHovered}:{objectiveHovered:boolean, setObjectiveHovered:any}){
    return(
        <div className="w-[70vw] md:w-[60vw] lg:w-[40vw] flex flex-col gap-16">
            <h1 className="w-[70vw] md:w-[60vw] lg:w-[30vw] text-2xl">Now that you know what it takes, lets get you onboarded!</h1>

            {/* Objective Section */}
            <div className="flex flex-col items-baseline w-[80%] gap-4">
                {/* Heading and tooltip */}
                <div className="flex gap-2 items-baseline">
                    {objectiveHovered && <span className={`text-3xl font-extrabold`}>{"->"}</span>}
                    <h2 onMouseEnter={()=>setObjectiveHovered(true)} onMouseLeave={()=>setObjectiveHovered(false)} className="text-3xl font-bold">Objective : </h2>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                    <path fill="white" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                                </svg>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Methods can be called through the explore</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>


                <div className="pl-16">
                    <ul className="flex flex-col gap-8 text-md">
                        <li className="flex items-center gap-2">
                            <p>call the function </p>
                            <CodeSnippet text1="enrollMember()" />
                        </li>
                        <li className="flex flex-col gap-8">
                            <p>with appropriate parameters </p>
                            <pre>
                            {"{"} <br/>    string_name,<br />    string_uid,<br />    string_officialEmail,<br />    string_phoneNumber,<br />    string_msg <br/> {"}"}
                            </pre>
                        </li>
                        <li className="flex flex-col gap-2 ">
                            <p>from the contract</p>
                            <CodeSnippet text1="0x23b72C97e7cD3fF54e3f35A20E99FA9Bc896D431" />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Network Details Link Preview */}
            <h2 className="text-3xl text-gray-500 ">
                Click here for {" "}
                <LinkPreview url="https://framer.com/motion" className="text-white underline">
                    Network Details
                </LinkPreview>
            </h2>
            
            {/* Detailed Tutorial Section */}
            <div className="flex flex-col items-baseline w-[80%] gap-4">
                {/* Heading */}
                <div className="flex gap-2 items-baseline">
                    <h2 className="text-3xl font-bold"> {"->"} Detailed Tutorial</h2>
                </div>

                {/* Points Section */}
                <div className="pl-8 flex gap-2">
                    <table>
                        <tbody className="flex flex-col gap-2">
                            <tr className="flex">
                                <td>1.</td>
                                <td>Download Metamask (or any EVM wallet that suits you) from the Chrome Web Store (PC) or Play Store/ App Store (Mobile)</td>
                            </tr>
                            <tr className="flex">
                                <td>2.</td>
                                <td> Follow the instructions, and take a backup.<br/>
                                    <span className="font-bold">Please note:</span>  Do not share your private key with anyone. It may cause a loss of funds
                                </td>
                            </tr>
                            <tr className="flex">
                                <td>3.</td>
                                <td>  
                                    Connect to the Custom RPC <br />
                                    <span className="text-gray-500">Check out the network details for RPC Details</span>
                                </td>
                            </tr>
                            <tr className="flex">
                                <td>4.</td>
                                <td>Head over to the faucet page to get some free testing crypto</td>
                            </tr>
                            <tr className="flex">
                                <td>5.</td>
                                <td>Open up the {" "}  
                                    <span>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger className="font-bold underline">
                                                    Sepolia testnet block explorer
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>look around this page for the link 😜</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </span>
                                    , and search  for the contract address mentioned in objective
                                </td>
                            </tr>
                            <tr className="flex">
                                <td>6.</td>
                                <td>Find and head over to contract section. Click on Write</td>
                            </tr>
                            <tr className="flex">
                                <td>7.</td>
                                <td>Connect your wallet (Use walletconnect if downloaded on mobile)</td>
                            </tr>
                            <tr className="flex">
                                <td>8.</td>
                                <td>Fill the parameters of enrollMember() function, and send!</td>
                            </tr>
                            <tr className="flex">
                                <td>9.</td>
                                <td>The network will deduct some fees for transacting, but don't worry, it's free crypto.</td>
                            </tr>
                            <tr className="flex">
                                <td>10.</td>
                                <td>
                                Once transaction is complete, head over to <button className="bg-gray-600 p-1 rounded-sm cursor-poi" onClick={()=>alert("table will be shown")}>enrolled</button> and check if your name is registered.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detailed Tutorial Section */}
            <div className="flex flex-col items-baseline w-[80%] gap-4">
                {/* Heading */}
                <div className="flex gap-2 items-baseline">
                    <h2 className="text-3xl font-bold"> {"->"} Finally</h2>
                </div>

                {/* Points Section */}
                <div className="pl-8 flex flex-col gap-4">
                    <p>Connect your wallet and check if you are registered. If you did all the steps correctly, you will receive a confetti party and be added to the community :{")"} </p>
                    <Button
                        borderRadius="1.75rem"
                        className="dark:text-white border-slate-800"
                        >
                            Moment Of Truth
                    </Button>
                </div>
                
            </div>
            
            
        </div>
    )
}
  

function CodeSnippet({text1}:{text1:string}){
    return(
        <span className="rounded-md bg-gray-600 py-1 px-2">
            {text1}
        </span>
    )
}