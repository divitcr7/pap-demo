







import React, { useState } from 'react';
import { motion } from "framer-motion";

interface EmergencyContact {
  name: string;
  relation: string;
  phone: string;
  city: string;
}

interface ApplicationDetails {
  unitNumber: string;
  moveInDate: string;
  rent: string;
  bedrooms: number;
  bathrooms: number;
  leaseTerm: string;
}

interface PersonalInformation {
  smoke: boolean;
  gender: string;
  maritalStatus: string;
}

const WebPage9: React.FC = () => {
  const [applicationDetails] = useState<ApplicationDetails>({
    unitNumber: '7304',
    moveInDate: '7/1/2024',
    rent: '1,893.00',
    bedrooms: 2,
    bathrooms: 2,
    leaseTerm: '18 Months'
  });

  const [personalInfo, setPersonalInfo] = useState<PersonalInformation>({
    smoke: false,
    gender: '',
    maritalStatus: ''
  });

  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>([]);
  
  const [file, setFile] = useState<File | null>(null);
file ; 
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const addEmergencyContact = () => {
    setEmergencyContacts([...emergencyContacts, { name: '', relation: '', phone: '', city: '' }]);
  };

  return (
    <div className=" flex items-center justify-center  ">


    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className=" shadow-2xl bg-white w-[75vw]  p-6 border rounded-2xl"
  >

    <div className="p-8 ">
      {/* Application Details */}
      <div className="mb-8 p-4 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Application Details</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(applicationDetails).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Household Members */}
      <div className="mb-8 p-4 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Household Members</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>Current: M Kirton</div>
          <div>Spouse: -</div>
          <div>Roommates: -</div>
          <div>Dependents: -</div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="mb-8 p-4 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Personal Information</h2>
        <div className="mb-4">
          <label className="font-semibold">Do you or any occupant smoke?</label>
          <div className="mt-2">
            <label className="mr-4">
              <input
                type="radio"
                name="smoke"
                value="true"
                checked={personalInfo.smoke === true}
                onChange={() => setPersonalInfo({ ...personalInfo, smoke: true })}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="smoke"
                value="false"
                checked={personalInfo.smoke === false}
                onChange={() => setPersonalInfo({ ...personalInfo, smoke: false })}
              />{' '}
              No
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="font-semibold">Gender:</label>
          <select
            name="gender"
            value={personalInfo.gender}
            onChange={handlePersonalInfoChange}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="font-semibold">Marital Status:</label>
          <div className="mt-2">
            {['Single', 'Married', 'Widowed', 'Separated'].map((status) => (
              <label key={status} className="block">
                <input
                  type="radio"
                  name="maritalStatus"
                  value={status.toLowerCase()}
                  checked={personalInfo.maritalStatus === status.toLowerCase()}
                  onChange={handlePersonalInfoChange}
                  className="mr-2"
                />
                {status}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="mb-8 p-4 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Emergency Contact</h2>
        {emergencyContacts.map((contact, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              value={contact.name}
              onChange={(e) =>
                setEmergencyContacts((prev) =>
                  prev.map((c, i) => (i === index ? { ...c, name: e.target.value } : c))
                )
              }
              className="p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              placeholder="Relation"
              value={contact.relation}
              onChange={(e) =>
                setEmergencyContacts((prev) =>
                  prev.map((c, i) => (i === index ? { ...c, relation: e.target.value } : c))
                )
              }
              className="p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              value={contact.phone}
              onChange={(e) =>
                setEmergencyContacts((prev) =>
                  prev.map((c, i) => (i === index ? { ...c, phone: e.target.value } : c))
                )
              }
              className="p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              placeholder="City"
              value={contact.city}
              onChange={(e) =>
                setEmergencyContacts((prev) =>
                  prev.map((c, i) => (i === index ? { ...c, city: e.target.value } : c))
                )
              }
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
        ))}
        <button
          onClick={addEmergencyContact}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Add Emergency Contact
        </button>
      </div>

      {/* File Upload */}
      <div className="p-4 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Upload Files</h2>
        <input type="file" onChange={handleFileChange} className="mb-4" />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Upload</button>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="bg-gray-300 text-black px-4 py-2 rounded mr-4">Back</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  </motion.div>
  </div>

  );
};

export default WebPage9;

