import React, { useState } from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  Button,
  LinkPreview
} from "@/components/ui";
import { Check, Copy } from 'lucide-react';

interface NetworkDetailType {
  name: string;
  rpcUrl: string;
  chainId: string;
  symbol: string;
}

interface CopiedFieldsState {
  name: boolean;
  rpcUrl: boolean;
  chainId: boolean;
  symbol: boolean;
}

interface DetailFieldProps {
  label: string;
  value: string;
  field: keyof NetworkDetailType;
  onCopy: (field: keyof NetworkDetailType, value: string) => void;
  isCopied: boolean;
}

const NetworkDetails: React.FC = () => {
  const [isNetworkDetailsOpen, setIsNetworkDetailsOpen] = useState<boolean>(false);
  const [copiedFields, setCopiedFields] = useState<CopiedFieldsState>({
    name: false,
    rpcUrl: false,
    chainId: false,
    symbol: false
  });

  const networkDetails: NetworkDetailType = {
    name: "Polygon Amoy",
    rpcUrl: "https://rpc-amoy.polygon.technology/", // Replace with actual RPC URL
    chainId: "80002",
    symbol: "MATIC"
  };

  const copyToClipboard = (field: keyof NetworkDetailType, value: string): void => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedFields(prev => ({ ...prev, [field]: true }));
      setTimeout(() => setCopiedFields(prev => ({ ...prev, [field]: false })), 2000);
    });
  };

  const DetailField: React.FC<DetailFieldProps> = ({ label, value, field, onCopy, isCopied }) => (
    <div className="mb-4">
      <label className="text-sm text-gray-400">{label}</label>
      <div className="flex items-center bg-gray-800 rounded-md mt-1">
        <input 
          type="text" 
          value={value} 
          readOnly 
          className="bg-transparent flex-grow p-2 text-white"
        />
        <button 
          onClick={() => onCopy(field, value)}
          className="p-2"
        >
          {isCopied ? <Check size={20} className="text-green-500" /> : <Copy size={20} className="text-gray-400" />}
        </button>
      </div>
    </div>
  );

  return (
    <Sheet open={isNetworkDetailsOpen} onOpenChange={setIsNetworkDetailsOpen}>
      <SheetTrigger className="text-white underline cursor-pointer hover:text-blue-300 transition-colors">
        Network Details
      </SheetTrigger>
      <SheetContent className="bg-black text-white w-full sm:w-[80vw] md:w-[60vw] lg:w-[50vw] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-white text-2xl font-bold">Network Details</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          {(Object.keys(networkDetails) as Array<keyof NetworkDetailType>).map((key) => (
            <DetailField 
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={networkDetails[key]}
              field={key}
              onCopy={copyToClipboard}
              isCopied={copiedFields[key]}
            />
          ))}
        </div>
        <div className="flex justify-between mt-6 mx-4 mb-11">
          <LinkPreview url="https://amoy.polygonscan.com/" className='text-white'>
            Block Explorer
          </LinkPreview>
          <LinkPreview url="https://faucet.polygon.technology/" className='text-white'>
            Polygon Faucets
          </LinkPreview>
        </div>
        {/* <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Sign Message Details</h3>
          <div className="space-y-2">
            <input placeholder="Enter your name" className="w-full p-2 bg-gray-800 rounded" />
            <input placeholder="Enter your VIT registration number" className="w-full p-2 bg-gray-800 rounded" />
            <input placeholder="Enter your phone number" className="w-full p-2 bg-gray-800 rounded" />
            <input placeholder="Enter your email id" className="w-full p-2 bg-gray-800 rounded" />
            <textarea 
              placeholder="Type any message you want to store in the blockchain forever. This could be your tagline, your motivation to join, your love life or anything!"
              className="w-full p-2 bg-gray-800 rounded h-24"
            />
          </div>
        </div> */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Sign Message Details</h3>
          <div className="space-y-4">

            <table>
              <tr className='mt-4'>
                <td className='w-[44%] h-[50px]'><CodeSnippet text1="name" /></td>
                <td>Enter your name</td>
              </tr>
              <tr className='mt-4'>
                <td><CodeSnippet text1="regno" /></td>
                <td>Enter your VIT registration number</td>
              </tr>
              <tr>
                <td  className='w-[44%] h-[50px]'><CodeSnippet text1="phoneNumber" /></td>
                <td>Enter your phone number</td>
              </tr>
              <tr className='mt-4 py-10 h-[10%]'>
                <td className='w-[44%] h-[50px]'><CodeSnippet text1="email" /></td>
                <td>Enter your email id</td>
              </tr>
              <tr className='mt-4'>
                <td className='w-[44%] h-[50px]'><CodeSnippet text1="message" /></td>
                <td>
                  Type any message you want to store in the blockchain forever. <br/>
                  <span className="text-sm text-gray-400 mt-2">
                    This could be your tagline, your motivation to join, rant about your love life or anything!
                  </span>
                </td>
              </tr>

            </table>

            {/* <div className="flex items-center">
              <div className="bg-gray-800 p-2 rounded-md w-36 mr-4">_name</div>
              <span>Enter your name</span>
            </div>
            <div className="flex items-center">
              <div className="bg-gray-800 p-2 rounded-md w-36 mr-4">_regno</div>
              <span>Enter your VIT registration number</span>
            </div>
            <div className="flex items-center">
              <div className="bg-gray-800 p-2 rounded-md w-36 mr-4">_phoneNumber</div>
              <span>Enter your VIT registration number</span>
            </div>
            <div className="flex items-center">
              <CodeSnippet text1="email" />
              <span>Enter your email id</span>
            </div>
            <div className="flex items-start">
              <div className="bg-gray-800 p-2 rounded-md w-36 mr-4">_message</div>
              <div className="flex flex-col">
                <span>Type any message you want to store in the blockchain forever.</span>
                
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

function CodeSnippet({text1}:{text1:string}){
  return(
      <span className="rounded-md bg-[#212121] py-1 px-2">
          {text1}
      </span>
  )
}

export default NetworkDetails;