import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import Tabs from '../../../components/ui/Tabs.jsx'
import Header from '../../../components/layout/Header.jsx'
import PageWrapper from '../../../components/layout/PageWrapper.jsx'
import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";
import { BsClock } from "react-icons/bs";

const mockReservations = [
  {
    reservationId: "RES-001",
    boxName: "Chicken Pasta Box",
    restaurantName: "Bella Ciao Restaurant",
    boxImageUrl: "https://via.placeholder.com/64",
    status: "Reserved",
    pickupDate: "Nov 28",
    pickupStartTime: "5:00 PM",
    pickupEndTime: "7:00 PM",
    pickupAddress: "Bella Ciao Restaurant, Al Mina Street, Tripoli",
  },
  {
    reservationId: "RES-002",
    boxName: "Vegan Surprise Box",
    restaurantName: "Green Bowl",
    boxImageUrl: "https://via.placeholder.com/64",
    status: "Picked Up",
    pickupDate: "Nov 20",
    pickupStartTime: "6:00 PM",
    pickupEndTime: "8:00 PM",
    pickupAddress: "Green Bowl, Azmi Street, Tripoli",
  },
];

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

        <div className="px-4 mt-6 space-y-4">
        {mockReservations.map((reservation) => (
          <Card key={reservation.reservationId} className="p-4">
            <div className="flex gap-4">
             
              <img
                src={reservation.boxImageUrl}
                alt={reservation.boxName}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-titleMedium font-semibold text-neutral-900">
                      {reservation.boxName}
                    </h3>
                    <p className="text-bodySmall text-neutral-600 mt-1">
                      {reservation.restaurantName}
                    </p>
                  </div>

                  <Badge>{reservation.status}</Badge>
                </div>

                <div className="mt-4 text-bodySmall text-neutral-700 space-y-1">
                  <BsClock />
                  <span>
                     {reservation.pickupDate}, {reservation.pickupStartTime} – {reservation.pickupEndTime}
                 </span>
                  <p>{reservation.pickupAddress}</p>
                </div>

                <div className="mt-4">
                  <span className="text-teal-600 text-bodySmall font-medium cursor-pointer">
                    View Details &gt;
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
       
    </PageWrapper>
  )
}

export default ReservationList