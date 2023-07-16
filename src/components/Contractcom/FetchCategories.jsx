import React from 'react'

import { useContract,useContractRead,useContractWrite } from '@thirdweb-dev/react'

import useStore from '../../store'
import contractAbi from '../../contracts/abi.json'

const FetchCategories = () => {

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
    
    console.log(data)

    if(error){
        console.log(error)
    }
    
    
  return (
    <div>FetchCategories</div>
  )
}

export default FetchCategories