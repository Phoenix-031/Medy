import { useContractRead,useContract } from "@thirdweb-dev/react"

import contractAbi from '../../contracts/abi.json'

const ShowCategory = () => {


    const contractaddress = '0xec94969Bbb07201d88d02FC25eD4a3c2E49b02bb'

    const {contract} = useContract(
        contractaddress,contractAbi.abi
    )

    const {data,isLoading,error} = useContractRead(
        contract,
        "getAllDoctor"
    )

    if(!isLoading)
       console.log(data)

    if(error){
        console.log(error)
    }
    
  return (
    <div>ShowCategory</div>
  )
}

export default ShowCategory