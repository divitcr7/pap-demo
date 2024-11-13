import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

interface FormData {
    firstName: string;
    middleName: string;
    lastName: string;
    birthdate: string;
    phone: string;
    phoneType: string;
    email: string;
    identification: string;
    identificationType: string;
    driversLicense: string;
    driversLicenseState: string;
    notApplicableID: boolean;
    notApplicableDL: boolean;
}

const WebPage3 = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        middleName: "",
        lastName: "",
        birthdate: "",
        phone: "",
        phoneType: "Mobile",
        email: "",
        identification: "",
        identificationType: "SSN",
        driversLicense: "",
        driversLicenseState: "",
        notApplicableID: false,
        notApplicableDL: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
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

        <div className="p-4  mx-auto">
            <div className=" grid grid-cols-2 gap-4 mb-6  p-4 rounded-md">
                <div className=" border-2 border-black p-4">
                    <h2 className="font-bold text-purple-700 mb-4">Application Details</h2>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                            <p className="font-semibold">Unit Number</p>
                            <p>7304</p>
                        </div>
                        <div>
                            <p className="font-semibold">Move-In Date</p>
                            <p>7/1/2024</p>
                        </div>
                        <div>
                            <p className="font-semibold">Rent</p>
                            <p>$1,893.00</p>
                        </div>
                        <div>
                            <p className="font-semibold">Bedrooms</p>
                            <p>2</p>
                        </div>
                        <div>
                            <p className="font-semibold">Bathrooms</p>
                            <p>2.00</p>
                        </div>
                        <div>
                            <p className="font-semibold">Lease Term</p>
                            <p>18 Months</p>
                        </div>
                    </div>
                </div>


                <div className="border-2 border-black p-4">
                    <h2 className=" font-bold text-purple-700 mb-4">Household Members</h2>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="font-semibold">Current</p>
                            <p>M Kirton</p>
                        </div>
                        <div>
                            <p className="font-semibold">Spouse</p>
                            <p></p>
                        </div>
                        <div>
                            <p className="font-semibold">Roommates</p>
                            <p></p>
                        </div>
                        <div>
                            <p className="font-semibold">Dependents</p>
                            <p></p>
                        </div>
                    </div>
                </div>

            </div>

            <form onSubmit={handleSubmit} className="space-y-4  pt-2  pb-4 pl-1 pr-1">
                <h2 className="font-bold text-gray-700">APPLICANT INFORMATION</h2>


                <div className="flex bg-white gap-4 ">

                    <div className="flex-1    ">

                        <div className="flex p-1 flex-col gap-4">
                            <div>
                                <label className="font-bold block text-gray-700">First Name*</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label className="font-bold block text-gray-700">Middle Name*</label>
                                <input
                                    type="text"
                                    name="middleName"
                                    value={formData.middleName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label className="font-bold block text-gray-700">Last Name*</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>


                            <div>
                                <label className="font-bold block text-gray-700">Birthdate*</label>
                                <input
                                    type="date"
                                    name="birthdate"
                                    value={formData.birthdate}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex justify-between gap-4 ">
                                <div className="flex-1">
                                    <label className=" flex-1  font-bold block text-gray-700">Phone*</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="flex-1 font-bold block text-gray-700">Phone Type</label>
                                    <select
                                        name="phoneType"
                                        value={formData.phoneType}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    >
                                        <option>Mobile</option>
                                        <option>Home</option>
                                        <option>Work</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="font-bold block text-gray-700">Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                        </div>



                    </div>




                    <div className="flex-1 ">


                        <h2 className="font-bold text-purple-700 mb-2  text-2xl ">Identification</h2>
                        <hr />
                        <br />
                        <div className="grid grid-cols-2 gap-4">
                            <div >

                                <div className="flex ">

                                    <p className="font-bold  mr-2">Indentification</p>
                                    <input
                                        type="checkbox"
                                        name="notApplicableID"
                                        checked={formData.notApplicableID}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label className="font-bold text-gray-700">Not applicable</label>
                                </div>

                                <div className="flex  items-center  justify-between gap-[12rem]">
                                    <input
                                        type="text"
                                        name="identification"
                                        value={formData.identification}
                                        onChange={handleChange}
                                        className="px-3 py-2 border border-gray-300 rounded-md mt-2"
                                        disabled={formData.notApplicableID}
                                        placeholder="Identification*"
                                    />
                                    <select
                                        name="identificationType"
                                        value={formData.identificationType}
                                        onChange={handleChange}
                                        className="l px-3 py-2 border border-gray-300 rounded-md mt-2"
                                        disabled={formData.notApplicableID}
                                    >
                                        <option>SSN</option>
                                        <option>Passport</option>
                                        <option>Driver's License</option>
                                    </select>


                                </div>

                            </div>
                        </div>


                        <div className="flex mt-4  ">
                            <h2 className="font-bold text-purple-700 text-2xl mr-4 ">Drivers License</h2>

                            <div className="flex items-center">

                                <input
                                    type="checkbox"
                                    name="notApplicableDL"
                                    checked={formData.notApplicableDL}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label className="font-bold text-gray-700">Not applicable</label>
                            </div>

                        </div>
                        <hr />
                        <br />
                        <div className="">
                            <div>
                                <label className='font-bold' htmlFor="">Number</label>
                                <input
                                    type="text"
                                    name="driversLicense"
                                    value={formData.driversLicense}
                                    onChange={handleChange}
                                    className="w-full mb-2  px-3 py-2 border border-gray-300 rounded-md mt-2"
                                    disabled={formData.notApplicableDL}
                                    placeholder="Number*"
                                />

                                <label className="font-bold" htmlFor="">State</label>

                                <input
                                    type="text"
                                    name="driversLicenseState"
                                    value={formData.driversLicenseState}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md mt-2"
                                    disabled={formData.notApplicableDL}
                                    placeholder="State*"
                                />
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
            </form>
        </div>
      </motion.div>

      </div>


    );
};

export default WebPage3;
