/* eslint-disable no-unused-vars */
import { useContractWrite, useContract, useAddress } from "@thirdweb-dev/react"

import contractAbi from '../../contracts/abi.json'

import useStore from '../../store'

const BookDoctor = () => {

  const {contractaddress} = useStore((state) => ({
    contractaddress:state.contractaddress,
  }))

    const address = useAddress()

    const {contract} = useContract(
        contractaddress,contractAbi.abi
    )

    const {mutateAsync,isLoading,error} = useContractWrite(
        contract,
        "bookDoctor",
    )

    if(error){
        console.log(error)
    }

    // const call = async() => {
    //   try{
    //     const data = mutateAsync({
    //       args: [3, 'whatthefuck', address, 'sajkvnsdjfnvjkdsfnjasnkdjvnskjafvnkdfn']
    //     })
    //     console.log("success")
    //   } catch(err){
    //     console.error(err)
    //   }
    // }
    
    const handlebook = async() => {
        const data = await mutateAsync({
          args: ['0x03', 'whatthefuck', address, 'sajkvnsdjfnvjkdsfnjasnkdjvnskjafvnkdfn']
        })

        console.log(data)
    }

    
  return (
    <div>
      {
        isLoading? (
          <div>Booking in progress...</div>
        ) : (
          <button className="font-serif text-lg text-green-500 text-center border-red-600 border-2 py-2 px-1 rounded-md" onClick={handlebook}>Book doctor</button>
        )
      }
    </div>
  )
}

export default BookDoctor