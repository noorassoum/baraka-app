import {
    Clock,
    MapPin,
    User,
    CreditCard,
} from "lucide-react";

export default function VendorReservationInfo() {
    return (
        <div className=" rounded-2xl p-5 space-y-4">
            {/* Pickup */}
            <div className="flex gap-3">
                <Clock className="text-teal-500" size={20} />
                <div>
                    <p className="font-medium text-neutral-900">
                        Pickup Window
                    </p>
                    <p className="text-sm text-neutral-500">
                        Today · 5:00 PM – 7:00 PM
                    </p>
                </div>
            </div>

            {/* Location */}
            <div className="flex gap-3">
                <MapPin className="text-teal-500" size={20} />
                <div>
                    <p className="font-medium text-neutral-900">
                        Location
                    </p>
                    <p className="text-sm text-neutral-500">
                        Bella Ciao Restaurant, Al Mina Street, Tripoli
                    </p>
                </div>
            </div>

            {/* Customer */}
            <div className="flex gap-3">
                <User className="text-teal-500" size={20} />
                <div>
                    <p className="font-medium text-neutral-900">
                        Customer
                    </p>
                    <p className="text-sm text-neutral-500">
                        John Doe
                    </p>
                </div>
            </div>

            {/* Meta */}
            <div className="pt-2 space-y-1 text-sm">
                <div className="flex justify-between">
                    <span className="text-neutral-500">
                        Reservation ID
                    </span>
                    <span className="font-medium">
                        #48293
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-neutral-500">
                        Reserved On
                    </span>
                    <span className="font-medium">
                        Nov 27, 2:14 PM
                    </span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-neutral-500">
                        Payment Method
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                        <CreditCard size={16} />
                        Pay at Pickup
                    </span>
                </div>
            </div>
            <div className="border-b border-neutral-200 mt-4" />
        </div>
    );
}
