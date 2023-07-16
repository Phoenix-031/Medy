/* eslint-disable no-unused-vars */
import { useContractRead,useContract } from "@thirdweb-dev/react"

import contractAbi from '../../contracts/abi.json'
import DoctorCard from "./DoctorCard"

import useStore from '../../store'

const GetAllDoctors = () => {

    const {contractaddress} = useStore((state) => ({
        contractaddress:state.contractaddress,
    }))

    console.log(contractaddress)

    const {contract} = useContract(
        contractaddress,contractAbi.abi
    )

    const {data,isLoading,error} = useContractRead(
        contract,
        "getAllDoctors",
        // ['bone']
    )

    if(!isLoading)
       console.log(data)

    if(error){
        console.log(error)
    }

    
  return (
    <>
    {
        isLoading ? (
            <div>
                <p className="font-serif text-lg text-green-500 text-center">Loading...</p>
            </div>
        ) : (
            <div className="w-full flex justify-start items-center flex-nowrap overflow-scroll gap-3 mt-2 mx-2">
                {
                    data?.map((item,index) => {
                        if(item.name !== '')return <DoctorCard key={index} data={item} />
                    })
                }
            </div>
        )
    }
    </>
  )
}

export default GetAllDoctors