import { useState, useEffect } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { readOnlyProvider } from "../utils/constants/providers";
import { getStudentFundContract } from "../utils/constants/contracts";

const useIsStudent = () => {

    const [reg, setReg] = useState(false);
    const { address } = useWeb3ModalAccount()



    useEffect(() => {
        const contract = getStudentFundContract(readOnlyProvider);

        contract
            .isStudent(address)
            .then((res) => {
                console.log(res);
                setReg(
                    res
                );
            })
            .catch((err) => {
                console.error("error fetching registeration status: ", err);
                setReg(false);
            });
    }, [address]);

    return reg;
}

export default useIsStudent;
