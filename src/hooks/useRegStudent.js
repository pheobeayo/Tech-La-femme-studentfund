import { useCallback } from "react";
import { useWeb3ModalProvider, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { getProvider } from "../utils/constants/providers";
import { getStudentFundContract } from "../utils/constants/contracts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useRegStudent = () => {
    const { walletProvider } = useWeb3ModalProvider();
    const { address } = useWeb3ModalAccount()
    const navigate = useNavigate();


    return useCallback(async (imageIPFSHash) => {
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getStudentFundContract(signer);

        try {
            const transaction = await contract.registerStudent(imageIPFSHash, address);
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                toast.success("registered successfully!");

                // Redirect to the next page
                return navigate("/login");
            }

            toast.error("registration failed!");
        } catch (error) {
            console.log("error :", error);
            let errorCase
            if (error.reason === "Student is already registered") {
                errorCase = "Student is already registered!"
            } else {
                errorCase = "error in registration!"
            }
            toast.error(errorCase);
        }
    }, [address, navigate, walletProvider]);
}

export default useRegStudent;
