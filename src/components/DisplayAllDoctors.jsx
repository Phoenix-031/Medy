import { useContract,useContractRead } from '@thirdweb-dev/react'
import contractAbi from '../contracts/abi.json'

import useStore from '../store'
import Docdisplay from './Docdisplay'

const DisplayAllDoctors = () => {

    const {contractaddress} = useStore((state) => ({
        contractaddress:state.contractaddress,
    }))

    const {contract} = useContract(
        contractaddress,contractAbi.abi
    )

    const {data,isLoading,error} = useContractRead(
        contract,
        "getAllDoctors",
    )

    if(error) {
        console.log(error)
        return (
            <div>Error fetching all doctors</div>
        )
    }
    
  return (
    <div  className='flex justify-start items-baseline overflow-hidden py-2 px-2 gap-1 h-full'>
        {
            isLoading ? (
                <div className='font-semibold text-green-600 font-serif'>
                    Loading Doctors...
                </div>
            ) : (
                <div className='w-full h-full flex gap-2 overflow-x-hidden flex-wrap justify-center items-baseline overflow-y-scroll'>
                    {
                        data?.map((item,index) => (
                            item.name !== '' && <Docdisplay data={item} key={index}/>
                        )
                        )
                    }
                </div>
            )
        }
    </div>
  )
}

export default DisplayAllDoctors