
import FeatherIcon from 'feather-icons-react'
import DisplayAllDoctors from '../DisplayAllDoctors'

import { Modal,Button,Input,Select,Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';


import { useContract,useContractRead } from '@thirdweb-dev/react'

import useStore from '../../store'

import contractAbi from '../../contracts/abi.json'

const AllDoctorTab = () => {

  const [opened, { open, close }] = useDisclosure(false);

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


  const handleAddDoctor = async() => {

  }
  
  return (
    <>
   <div className='w-full h-full flex justify-start items-center gap-2 flex-col overflow-hidden'>
        <div className='flex justify-center items-center gap-2 my-3 overflow-hidden cursor-pointer' onClick={open}>
            <p className='font-RobotoS text-white font-semibold'>Add Doctor</p>
            <FeatherIcon icon='plus-square' color="white" />
        </div>

        <DisplayAllDoctors />
   </div>

      <Modal opened={opened} onClose={close} title="Add Doctor">
        {/* Modal content */}
        <Flex justify='center' align='baseline' gap='sm' direction='column'>

         <Input.Wrapper label='Doctor Name'>
            <Input onChange={(e) => {
              console.log(e.target.value)
            }} />
         </Input.Wrapper>

         <Select 
         onChange={(e) => {
          console.log(e.target.value)
         }}
         label="Select Doctor Specialization"
         placeholder='Doctor Specialization'
         data={[
          {value:'bone',label:'Bone'},
          {value:'heart',label:'Heart'},
          {value:'tendons',label:'Tendons'},
          {value:'skin' ,label:'Skin'}
         ]}
         />

         <Input.Wrapper label='Doctor Fees'>
            <Input onChange={(e) => {
              console.log(e.target.value)
            }} />
         </Input.Wrapper>

         <Input.Wrapper label='Doctor wallet address'>
            <Input onChange={(e) => {
              console.log(e.target.value)
            }} />
         </Input.Wrapper>

         <Input.Wrapper label='Registration Name'>
            <Input onChange={(e) => {
              console.log(e.target.value)
            }} />
         </Input.Wrapper>

         <Input.Wrapper label='Registration Year'>
            <Input onChange={(e) => {
              console.log(e.target.value)
            }} />
         </Input.Wrapper>

         <Input.Wrapper label='Degree Name'>
            <Input onChange={(e) => {
              console.log(e.target.value)
            }} />
         </Input.Wrapper>

         <Input.Wrapper label='Medical Council'>
            <Input onChange={(e) => {
              console.log(e.target.value)
            }} />
         </Input.Wrapper>
          

        <Button className='bg-bg-primary border-gray-300 border-1' onClick={handleAddDoctor}>Add Doc</Button>
        </Flex>
      </Modal>

    </>
  )
}

export default AllDoctorTab