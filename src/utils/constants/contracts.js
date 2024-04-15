import { ethers } from "ethers";
import Abi from "./StudentFund.json";
import Abi2 from "./fundStudent.json";


export const getStudentFundContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_contract_address,
        Abi,
        providerOrSigner
    );

export const getFunderNft = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_contract_address,
        Abi2,
        providerOrSigner
    );
