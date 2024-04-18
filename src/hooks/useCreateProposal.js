import { useCallback } from "react";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { getProvider } from "../utils/constants/providers";
import { getStudentFundContract } from "../utils/constants/contracts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useCreateProposal = () => {
    const { walletProvider } = useWeb3ModalProvider();
    const navigate = useNavigate();


    return useCallback(async (title, description, amount, imageIPFSHash, referral) => {
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getStudentFundContract(signer);

        try {
            const transaction = await contract.createProposal(title, description, amount, imageIPFSHash, referral);
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                toast.success("proposal created!");

                // Redirect to the student-details
                return navigate("/student-details");
            }

            toast.error("proposal creation failed!");
        } catch (error) {
            console.log("error :", error);
            let errorCase
            if (errorCase) {
                errorCase = "You are revoked due to offence";
                toast.error(errorCase);
            } else {
                toast.error("error in creating proposal!")
            }
        }
    }, [navigate, walletProvider]);
}

export default useCreateProposal;
