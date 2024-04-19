import useGetProposals from "../../hooks/useGetProposals";
import { useNavigate } from "react-router-dom";


const Proposal = () => {
  const { loading, data: proposal } = useGetProposals();

  const getFirst20Words = (text) => {
    if (!text) return '';
    const words = text.split(' ');
    return words.slice(0, 30).join(' ');
  };
  const navigate = useNavigate();


  const handleClick = (id) => {
    navigate(`/fund/${id}`);
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
        <h2 className="text-[#091913] text-3xl font-bold leading-10">
          Proposals available to be funded
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {loading ? (
            <h3>Loading...</h3>
          ) : proposal.length !== 0 ? (
            proposal.map((item, index) => (
              <div key={index} className="content-card mb-5">
                <img
                  src={`https://green-rational-prawn-874.mypinata.cloud/ipfs/${item[7]}`}
                  alt="urgent"
                  className="object-cover h-48 w-full rounded-t-lg"
                />
                <div className="bg-white rounded-b-lg p-4 shadow-md">
                  <h3 className="font-bold text-[#091913] text-sm mb-2">
                    {item[3]}
                  </h3>
                  <p className="font-normal text-justify text-[#091913] text-xs mb-4">
                    {getFirst20Words(item[2])}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="text-[#091913] text-xs">
                        {Number(item[8])} USDT
                      </h1>
                      <h1 className="text-[#091913] text-xs">Goal</h1>
                    </div>
                    <div>
                      <h2 className="text-[#091913] text-xs">
                        {item[10] ? "Status: Approved For Sponsorship" : "Status: Pending"}
                      </h2>
                      <h2 className="text-[#091913] text-xs">
                        {Number(item[8])} USDT Amount needed
                      </h2>
                    </div>
                  </div>
                  <div className="block mt-4">
                    <button className="bg-[#D5E5DF] hover:bg-[#427142] text-[#091913] font-bold py-2 px-4 border border-[#AAAAAA] rounded w-full"
                      onClick={() => handleClick(Number(item[0]))}
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3>Could not get proposals!!</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Proposal;


// <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10">
//             <img
//               src={research1}
//               alt="research1"
//               className="object-fit-object h-2/3 w-full object-center rounded"
//             />
//             <div className="w-full h-1/2 pb-5 p-2 shadow-md">
//               <h3 className="font-bold text-[#091913] text-sm p-2">
//                 Research Materials Fund
//               </h3>
//               <p className="font-normal text-justify text-[#091913] text-xs p-2">
//                 David, a senior studying Environmental
//                 <br />
//                 Science, seeks funding for a research project
//                 <br />
//                 on local river water pollution. Your support
//                 <br />
//                 will help purchase essential materials for
//                 <br />
//                 accurate experiments.
//               </p>
//               <div className="w-full bg-[#D5E5DF]">
//                 <h1 className="text-[#091913] text-justify font-bold text-xs p-2 mt-4">
//                   1500 USDT<span className="mx-9">4</span>
//                   <span className="mx-8">30</span>
//                 </h1>
//                 <h1 className="text-[#091913] text-justify font-normal text-xs p-2">
//                   Goal<span className="mx-12">Funders</span>
//                   <span>Days left</span>
//                 </h1>
//                 <div className=" bg-white border-[#2B7C5F]  rounded-full w-3/4 h-2 mx-2 mt-2 ">
//                   <div className=" bg-[#2B7C5F] border-[#2B7C5F]  rounded-full w-1/2 h-2 "></div>
//                 </div>
//                 <h2 className="text-[#091913] text-justify font-normal text-xs mx-4">
//                   250 USDT Amount raised
//                   <br />
//                   1500 USDT Amount needed
//                 </h2>
//                 <Link
//                   to="/fund"
//                   style={{ textDecoration: "none", color: "white" }}
//                 >
//                   <button class="bg-[#D5E5DF] hover:bg-[#427142] text-[#091913] font-bold py-2 px-4 border border-[#AAAAAA] rounded w-1/2 mt-4 mb-4 md:mx-16">
//                     View details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10">
//             <img
//               src={research2}
//               alt="research2"
//               className="object-fit-object h-2/3 w-full object-center rounded"
//             />
//             <div className="w-full h-1/2 pb-5 p-2 shadow-md">
//               <h3 className="font-bold text-[#091913] text-sm p-2">
//                 Research Materials Fund{" "}
//               </h3>
//               <p className="font-normal text-justify text-[#091913] text-xs p-2">
//                 Emily, a freshman in Computer Science,
//                 <br />
//                 seeks funding to replace her broken laptop.
//                 <br />
//                 Your support will ensure uninterrupted
//                 <br />
//                 learning and help her pursue her passion for
//                 <br />
//                 programming.
//               </p>
//               <div className="w-full bg-[#D5E5DF]">
//                 <h1 className="text-[#091913] text-justify font-bold text-xs p-2 mt-4">
//                   800 USDT<span className="mx-9 ">4</span>
//                   <span className="mx-8">30</span>
//                 </h1>
//                 <h1 className="text-[#091913] text-justify font-normal text-xs p-2">
//                   Goal<span className="mx-12">Funders</span>
//                   <span>Days left</span>
//                 </h1>
//                 <div className=" bg-white border-[#2B7C5F]  rounded-full w-3/4 h-2 mx-2 mt-2 ">
//                   <div className=" bg-[#2B7C5F] border-[#2B7C5F]  rounded-full w-1/2 h-2 "></div>
//                 </div>
//                 <h2 className="text-[#091913] text-justify font-normal text-xs mx-4">
//                   100 USDT Amount raised
//                   <br />
//                   800 USDT Amount needed
//                 </h2>
//                 <Link
//                   to="/fund"
//                   style={{ textDecoration: "none", color: "white" }}
//                 >
//                   <button class="bg-[#D5E5DF] hover:bg-[#427142] text-[#091913] font-bold py-2 px-4 border border-[#AAAAAA] rounded w-1/2 mt-4 mb-4 md:mx-16">
//                     View details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div> 