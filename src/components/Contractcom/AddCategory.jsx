/* eslint-disable no-unused-vars */
import React from 'react'

import { useContractWrite,useContract,useContractEvents } from '@thirdweb-dev/react'
import contractAbi from '../../contracts/abi.json'
import useStore from '../../store'

const AddCategory = () => {

    const [cat,setCat] = React.useState('')
    
    const {contractaddress} = useStore((state) => ({
        contractaddress:state.contractaddress,
    }))

    const {contract} = useContract(
        contractaddress,contractAbi.abi
    )

    const {mutateAsync,isLoading,error} = useContractWrite(
        contract,
        "addCategory",
    )

    if(error){
        console.log(error)
    }

    const handleaddcat = async() => {
        await mutateAsync({
            args:[cat]
        })
    }
    
  return (
    <>
        <p>Add Category field</p>
        <input type="text" value={cat} onChange={(e) => setCat(e.target.value)}/>
        <button onClick={handleaddcat}>Add</button>
    </>
  )
}

export default AddCategory