
import DisplayAllSpeciality from '../DisplayAllSpeciality'

import FeatherIcon from 'feather-icons-react'

import { Modal,Button,Input,Select,Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';


const SpecialityTab = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleAddCategory = () => {
    console.log("afkjnjk")
  }

  return (
    <>
    <div className='w-full h-full flex justify-start items-center gap-2 flex-col'>
        <div className='flex justify-center items-center gap-2 my-3 overflow-hidden cursor-pointer'
        onClick={open}
        >
            <p className='font-RobotoS text-white font-semibold'>Add Speciality</p>
            <FeatherIcon icon='plus-square' color="white" />
        </div>

        <DisplayAllSpeciality />

    </div>

      <Modal opened={opened} onClose={close} title="Add Doctor">
        {/* Modal content */}
        <Flex justify='center' align='baseline' gap='sm' direction='column'>

         <Input.Wrapper label='Category Name'>
            <Input onChange={(e) => {
              console.log(e.target.value)
            }} />
         </Input.Wrapper>

         <Input.Wrapper label='Category Description'>
            <Input onChange={(e) => {
              console.log(e.target.value)
            }} />
         </Input.Wrapper>

        <Button className='bg-bg-primary border-gray-300 border-1' onClick={handleAddCategory}>Add Category</Button>
        </Flex>
      </Modal>
    </>
  )
}

export default SpecialityTab