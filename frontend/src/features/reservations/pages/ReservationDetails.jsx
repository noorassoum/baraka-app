import { useState} from 'react';
import { useNavigate } from "react-router-dom";

import Header from "../../../components/layout/Header";
import PageWrapper from "../../../components/layout/PageWrapper";
import Sidebar from '../../../components/layout/Sidebar';
import { Clock, MapPin } from "lucide-react";

const ReservationDetails = () => {
     const navigate = useNavigate();
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <Header
          title="Order Details"
          onBack={() => navigate("/reservationList")}
          showBurger
          onBurgerClick={() => setIsSidebarOpen(true)}
        />

      <PageWrapper className="bg-neutral-100 px-4 pb-6">
        {/* STATUS BLOCK */}
        <div className="mt-4 rounded-xl bg-success-100 px-4 py-3">
          <p className="text-bodyMedium font-medium text-success-700">
            Ready For Pickup
          </p>
          <p className="mt-0.5 text-bodySmall text-neutral-700">
            Order #84293
          </p>
          <div className="mt-2 flex items-center gap-2 text-bodySmall text-neutral-700">
            <Clock className="h-4 w-4 text-neutral-600" />
            <span>Nov 28, 5:00 PM – 7:00 PM</span>
          </div>
        </div>

        {/* ORDER ITEM */}
        <div className="mt-4 flex gap-3 rounded-xl bg-white p-3 shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1603133872878-684f208fb84b"
            alt="Chicken Pasta"
            className="h-14 w-14 rounded-lg object-cover"
          />

          <div className="flex flex-1 flex-col">
            <p className="text-bodyMedium font-semibold text-neutral-900">
              Chicken Pasta Box
            </p>
            <p className="text-bodySmall text-neutral-600">
              Bella Ciao Restaurant
            </p>

            <div className="mt-2 flex gap-2">
              <span className="rounded-full bg-orange-100 px-2 py-0.5 text-labelMedium text-orange-600">
                3 Left
              </span>
              <span className="rounded-full bg-teal-100 px-2 py-0.5 text-labelMedium text-teal-600">
                Meals
              </span>
            </div>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="mt-6">
          <p className="mb-3 text-bodyMedium font-medium text-neutral-900">
            Order Summary
          </p>
          <div className="w-full h-px bg-gray-300 mb-5" />

          <div className="space-y-2 text-bodySmall">
            <div className="flex justify-between text-neutral-700">
              <span>Subtotal</span>
              <span>$4.50</span>
            </div>
            <div className="flex justify-between text-neutral-700">
              <span>Quantity</span>
              <span>1</span>
            </div>
            <div className="flex justify-between text-neutral-700">
              <span>Service Fee</span>
              <span>$0.00</span>
            </div>
            <div className="w-full h-px bg-gray-300 my-5" />

            <div className="mt-3 flex justify-between">
              <span className="text-bodyMedium font-semibold text-neutral-900">
                Total
              </span>
              <span className="text-bodyMedium font-bold text-orange-500">
                $4.50
              </span>
            </div>
          </div>
        </div>

        {/* PICKUP INSTRUCTIONS */}
        <div className="mt-6">
          <p className="mb-2 text-bodyMedium font-medium text-neutral-900">
            Pickup Instructions
          </p>
          <div className="flex items-start gap-2 text-bodySmall text-neutral-700">
            <MapPin className="mt-0.5 h-4 w-4 text-teal-500" />
            <span>123 Tripoli Street, Above Bakery</span>
          </div>
        </div>
      </PageWrapper>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default ReservationDetails;
