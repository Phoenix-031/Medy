import { useEffect } from 'react'
import { useState } from 'react'

import { Avatar } from '@mantine/core'

import useStore from '../../store'
import SpecialityTab from '../../components/Admin/SpecialityTab'
import AllDoctorTab from '../../components/Admin/AllDoctorTab'
import PatientsTab from '../../components/Admin/PatientsTab'
import CrowdFunding from '../../components/Admin/CrowdFunding'

const Admin = () => {

    const {admtab,setCurrentAdminTab} = useStore((state) => ({
        user: state.user,
        admtab : state.admtab,
        setCurrentAdminTab : state.setCurrentAdminTab,
    }))
    console.log(admtab)

    const [tab,setTab] = useState("f1")

    useEffect(() => {
        setCurrentAdminTab(tab)
    }, [tab])
    
  return (
    <div className='w-full bg-bg-primary justify-start items-center h-[88vh] px-3 grid grid-cols-12 grid-rows-1 overflow-hidden'>
        <div className='flex justify-center items-center flex-col overflow-hidden gap-3 col-span-1'>
            <Avatar className='cursor-pointer' onClick={() => setTab('f1')}/>
            <Avatar className='cursor-pointer' onClick={() => setTab('f2')}/>
            <Avatar className='cursor-pointer' onClick={() => setTab('f3')}/>
            <Avatar className='cursor-pointer' onClick={() => setTab('f4')}/>
        </div>

        <div className='col-span-11 h-full w-full'>
            {
                admtab === "f1" && (
                    <PatientsTab />
                )
            }

            {
                admtab === "f2" && (
                    <AllDoctorTab />
                )
            }

            {
                admtab === "f3" && (
                    <SpecialityTab />
                )
            }

            {
                admtab === "f4" && (
                    <CrowdFunding />
                )
            }
        </div>


    </div>
  )
}

export default Admin