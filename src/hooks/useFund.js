import { useCallback } from "react";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { getProvider } from "../utils/constants/providers";
import { getStudentFundContract } from "../utils/constants/contracts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useFund = () => {
    const { walletProvider } = useWeb3ModalProvider();
    const navigate = useNavigate();


    return useCallback(async (amount, id) => {
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getStudentFundContract(signer);

        try {
            const transaction = await contract.donate(amount, id);
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                toast.success("funded successfully!");
                return navigate("/");
            }

            toast.error("funding failed!");
        } catch (error) {
            console.log("error :", error);
            let errorCase
            if (error.reason === "Amount must be greater than zero") {
                errorCase = "Amount must be greater than zero";

            }
            if (error.reason === "Insufficient balance") {
                errorCase = "Address insufficient balance";

            }
            if (error.reason === "Token transfer failed") {
                errorCase = "Token transfer failed";

            }
            toast.error(errorCase);
        }
    }, [navigate, walletProvider]);
}

export default useFund;
