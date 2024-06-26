import { useState, useEffect } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { readOnlyProvider } from "../utils/constants/providers";
import { getStudentFundContract } from "../utils/constants/contracts";

const useGetProposalById = (id) => {
    const [reg, setReg] = useState({
        loading: true,
        data: [],
    });
    const { address } = useWeb3ModalAccount()


    useEffect(() => {
        const contract = getStudentFundContract(readOnlyProvider);

        contract
            .getProposal(id)
            .then((res) => {
                console.log(res);
                setReg({
                    loading: false,
                    data: res
                })
            })
            .catch((err) => {
                console.error("error fetching registration status: ", err);
                setReg([]);
            });
    }, [address, id]);

    return reg;
}

export default useGetProposalById;
