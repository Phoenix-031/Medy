
import Specialty from './Specialty'

import { useContract,useContractRead } from '@thirdweb-dev/react'
import contractAbi from '../contracts/abi.json'

import useStore from '../store'

const DisplayAllSpeciality = () => {

    const {contractaddress} = useStore((state) => ({
        contractaddress:state.contractaddress,
    }))

    const {contract} = useContract(
        contractaddress,contractAbi.abi
    )

    const {data,isLoading,error} = useContractRead(
        contract,
        "getAllCategories",
    )

    if(error){
        return(
            <div>
                <p>Error occurred while fetching all the categories</p>
            </div>
        )
    }
    
  return (
    <div className='flex overflow-hidden flex-wrap justify-start items-baseline py-4 px-2 gap-3 overflow-y-scroll'>
    {
        isLoading ? (
            <div>
                <p className="font-serif text-lg text-green-500 text-center">Loading...</p>
            </div>
        ) :
         (
            data?.map((item,index) => {
                if(item.name !== '')
                    return <Specialty key={index} data={item}/>
            })
        )
    }
    </div>
  )
}

export default DisplayAllSpeciality