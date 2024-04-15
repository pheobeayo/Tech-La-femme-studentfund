import { ethers } from "ethers";
import Abi from "./StudentFund.json";
import Abi2 from "./fundStudent.json";


export const getStudentFundContract = (providerOrSigner) =>
    new ethers.Contract(
        process.env.REACT_APP_STUDENT_FUND_CONTRACT,
        Abi,
        providerOrSigner
    );

export const getFunderNft = (providerOrSigner) =>
    new ethers.Contract(
        process.env.REACT_APP_FUNDERNFT_CONTRACT,
        Abi2,
        providerOrSigner
    );
