import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

interface AddressFormData {
    country: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    moveInDate: string;
    reasonForLeaving: string;
    isRenting: boolean;
    landlordName: string;
    landlordContactName: string;
    landlordContactPhone: string;
}

const WebPage4 = () => {
    const [formData, setFormData] = useState<AddressFormData>({
        country: "",
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
        moveInDate: "",
        reasonForLeaving: "",
        isRenting: true,
        landlordName: "",
        landlordContactName: "",
        landlordContactPhone: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleRadioChange = (value: boolean) => {
        setFormData((prevData) => ({
            ...prevData,
            isRenting: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
    };

    return (
        <div className=" flex items-center justify-center  ">

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=" shadow-2xl bg-white w-[75vw]  p-6 border rounded-2xl"
            >
                <form onSubmit={handleSubmit} className="p-4   mx-auto space-y-4">
                    <h1 className="text-3xl font-bold text-center mb-6 text-black">ADDRESSES</h1>

                    <div className="bg-white p-4 rounded-md">
                        <h3 className="font-bold text-purple-700 mb-4">Current Address</h3>
                        <hr className="bg-gray-900 mb-4" />

                        <div className=" sm:flex gap-4 ">

                            <div className="flex-1">

                                <div className="flex flex-col gap-4  ">
                                    <div>
                                        <label className="font-bold block text-gray-700">Country*</label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>


                                    <div>
                                        <label className="font-bold block text-gray-700">Street Address*</label>
                                        <input
                                            type="text"
                                            name="streetAddress"
                                            value={formData.streetAddress}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="font-bold block text-gray-700">City*</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="font-bold block text-gray-700">State*</label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="font-bold block text-gray-700">Zip*</label>
                                        <input
                                            type="text"
                                            name="zip"
                                            value={formData.zip}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="font-bold block text-gray-700">Current Residence Move-in Date*</label>
                                        <input
                                            type="date"
                                            name="moveInDate"
                                            value={formData.moveInDate}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="font-bold block text-gray-700">Reason for Leaving</label>
                                        <input
                                            type="text"
                                            name="reasonForLeaving"
                                            value={formData.reasonForLeaving}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1">

                                <div className="flex flex-col gap-4   ">

                                    <div className="flex flex-col w-fit">
                                        <span className="mr-4 text-gray-700">Are you renting?</span>
                                        <br />
                                        <div className="flex w-fit">
                                            <button
                                                type="button"
                                                onClick={() => handleRadioChange(true)}
                                                className={`px-4 py-2 border ${formData.isRenting ? "bg-purple-500 text-white" : "bg-white"
                                                    } rounded-l-md`}
                                            >
                                                Yes
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleRadioChange(false)}
                                                className={`px-4 py-2 border ${!formData.isRenting ? "bg-purple-500 text-white" : "bg-white"
                                                    } rounded-r-md`}
                                            >
                                                No
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4">
                                        <div>
                                            <label className="font-bold block text-gray-700">Community or Landlord Name*</label>
                                            <input
                                                type="text"
                                                name="landlordName"
                                                value={formData.landlordName}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                required={formData.isRenting}
                                                disabled={!formData.isRenting}
                                            />
                                        </div>
                                        <div>
                                            <label className="font-bold block text-gray-700">Community or Landlord Contact Name*</label>
                                            <input
                                                type="text"
                                                name="landlordContactName"
                                                value={formData.landlordContactName}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                required={formData.isRenting}
                                                disabled={!formData.isRenting}
                                            />
                                        </div>
                                        <div>
                                            <label className="font-bold block text-gray-700">Community or Landlord Contact Phone*</label>
                                            <input
                                                type="tel"
                                                name="landlordContactPhone"
                                                value={formData.landlordContactPhone}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                required={formData.isRenting}
                                                disabled={!formData.isRenting}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <button
                    type="submit"
                    className="w-full px-4 py-2 bg-purple-500 text-white rounded-md mt-4 hover:bg-purple-600"
                >
                    Submit
                </button> */}
                    </div>
                </form>
            </motion.div>
        </div>

    );
};

export default WebPage4;
