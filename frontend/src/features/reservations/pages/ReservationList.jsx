import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Tabs from '../../../components/ui/Tabs.jsx'
import Header from '../../../components/layout/Header.jsx'
import PageWrapper from '../../../components/layout/PageWrapper.jsx'
const ReservationList = () => {
    const navigate = useNavigate();
    const{activeTab,setActiveTab}=useState("upcoming");
  return (
    <PageWrapper>
        <Header
        title="My Order"
        onBack={()=>navigate("/reservation-success")}
        showBurger
        />
        <div className="px-4 mt-4">
            <Tabs
            tabs={[{label:"Upcoming" , value:"upcoming"} ,
                {label:"Past" , value:"past"}
            ]}
            value={activeTab}
            onChange={setActiveTab}
            />
        </div>
    </PageWrapper>
  )
}

export default ReservationList