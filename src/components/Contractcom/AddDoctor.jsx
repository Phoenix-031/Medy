/* eslint-disable no-unused-vars */
import { useContractWrite, useContract, useAddress } from "@thirdweb-dev/react"
import { useState } from "react"

import contractAbi from '../../contracts/abi.json'

import useStore from '../../store'

const AddDoctor = () => {

  const {contractaddress} = useStore((state) => ({
    contractaddress:state.contractaddress,
  }))
//   console.log(contractaddress)

    const [docname,setDocname] = useState('')
    const [doccategory,setDoccategory] = useState('')
    const [docwallet,setDocwallet] = useState('')
    const [docfees,setDocfees] = useState('')
    const [regno,setRegno] = useState('')
    const [regyr,setRegyr] = useState('')
    const [degname,setDegname] = useState('')
    const [medconname,setMedconname] = useState('')
    
    const address = useAddress()

    const {contract} = useContract(
        contractaddress,contractAbi.abi
    )

    const {mutateAsync,isLoading,error} = useContractWrite(
        contract,
        "addDoctor",
    )

    if(error){
        console.log(error)
    }

    const handleaddDoc = async() => {
        if(docname === '' || doccategory === '' || docfees === '')return alert('Please fill all the fields')
        else
            await mutateAsync({
                args:[docname,doccategory,address,docfees,regno,regyr,degname,medconname],
            })
    }

    
  return (
    <>
        <div className="flex justify-center items-center gap-3 py-3 px-4 rounded-md border-2 border-red-500 flex-col max-w-max">
            <input className="border-2 border-black" type="text" placeholder="doctor name" value={docname} onChange={(e) => setDocname(e.target.value)} />
            <input className="border-2 border-black" type="text" placeholder="doctor category" value={doccategory} onChange={(e) => setDoccategory(e.target.value)} />
            <input className="border-2 border-black" type="text" placeholder="doctor wallet address" value={address} onChange={(e) => setDocwallet(e.target.value)}/>
            <input className="border-2 border-black" type="text" placeholder="doctor fees" value={docfees} onChange={(e) => setDocfees(e.target.value)} />
            <input className="border-2 border-black" type="text" placeholder="doctor fees" value={regno} onChange={(e) => setRegno(e.target.value)} />
            <input className="border-2 border-black" type="text" placeholder="doctor fees" value={regyr} onChange={(e) => setRegyr(e.target.value)} />
            <input className="border-2 border-black" type="text" placeholder="doctor fees" value={degname} onChange={(e) => setDegname(e.target.value)} />
            <input className="border-2 border-black" type="text" placeholder="doctor fees" value={medconname} onChange={(e) => setMedconname(e.target.value)} />
            {
                isLoading ? <p>Addying doctor...</p> : (
                    <button onClick={handleaddDoc} className="border-2 border-green-600 py-2 px-3 rounded-md">Submit</button>
                )
            }
        </div>
    </>
  )
}

export default AddDoctor