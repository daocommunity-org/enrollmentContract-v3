import { ethers } from "ethers";
import Database from "../../blockchain/artifacts/contracts/Database.sol/Database.json" assert { type: "json" };

const contractAddress = "0x80bff3474C93c1eA07081cEF6bb87Bc1626ae949";
const rpcUrl = "https://rpc-amoy.polygon.technology/";

function getProvider() {
  return new ethers.providers.JsonRpcProvider(rpcUrl);
}

async function getContract() {
  const provider = getProvider();
  return new ethers.Contract(contractAddress, Database.abi, provider);
}

export async function getAllMembers() {
  const contract = await getContract();
  const members = await contract.getAllMembers();
  console.log(members);
  return members.map((member) => ({
    walletAddress: member.walletAddress,
    name: member.name,
    regno: member.regno,
    message: member.message,
    enrollmentTime: timeConverter(member.enrollmentTime.toNumber()),
  }));
}

export async function isEnrolled(address) {
  const contract = await getContract();
  return await contract.isEnrolled(address);
}


function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = "0" + a.getHours();
  var min = "0" + a.getMinutes();
  var sec = "0" + a.getSeconds();
  var time =
    date +
    " " +
    month +
    " " +
    year +
    " - " +
    hour.substr(-2) +
    ":" +
    min.substr(-2) +
    ":" +
    sec.substr(-2);
  return time;
}
