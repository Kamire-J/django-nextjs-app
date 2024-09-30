import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";


const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image 
                    fill 
                    src='/beach_1.jpg'
                    className="object-cover h-full w-full"
                    alt="Beach House"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4x">Property Name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 Guests - 2 Bedrooms - 1 Bathroom
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image 
                            src='https://avatar.iran.liara.run/public/boy'
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="the user name"
                            />

                        <p><strong>John Doe</strong> is your host</p>
                    </div>
                    <hr/>

                        <p className="mt-6 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>

                </div>
                
                <ReservationSidebar />

            </div>
        </main>
        
    )
}

export default PropertyDetailPage;