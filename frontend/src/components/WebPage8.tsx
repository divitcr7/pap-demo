import React, { useState } from 'react';
import { motion } from "framer-motion";

interface Vehicle {
  year: string;
  color: string;
  make: string;
  model: string;
  licensePlateNumber: string;
  licensePlateState: string;
}

interface HouseholdMember {
  relationship: string;
}

const WebPage8: React.FC = () => {
  const [hasVehicle, setHasVehicle] = useState<boolean | null>(null);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [hasHouseholdMember, setHasHouseholdMember] = useState<boolean | null>(null);
  const [householdMembers, setHouseholdMembers] = useState<HouseholdMember[]>([]);

  // Handlers for Vehicle section
  const handleVehicleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newVehicles = [...vehicles];
    newVehicles[index] = { ...newVehicles[index], [name]: value };
    setVehicles(newVehicles);
  };

  const handleAddVehicle = () => {
    setVehicles([...vehicles, { year: '', color: '', make: '', model: '', licensePlateNumber: '', licensePlateState: '' }]);
  };

  const handleRemoveVehicle = (index: number) => {
    setVehicles(vehicles.filter((_, i) => i !== index));
  };

  const handleHasVehicleChange = (value: boolean) => {
    setHasVehicle(value);
    if (!value) setVehicles([]);
  };

  // Handlers for Household Member section
  const handleHouseholdChange = (index: number, e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newMembers = [...householdMembers];
    newMembers[index] = { ...newMembers[index], [name]: value };
    setHouseholdMembers(newMembers);
  };

  const handleAddHouseholdMember = () => {
    setHouseholdMembers([...householdMembers, { relationship: '' }]);
  };

  const handleRemoveHouseholdMember = (index: number) => {
    setHouseholdMembers(householdMembers.filter((_, i) => i !== index));
  };

  const handleHasHouseholdMemberChange = (value: boolean) => {
    setHasHouseholdMember(value);
    if (!value) setHouseholdMembers([]);
  };

  return (

    <div className=" flex items-center justify-center  ">

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" shadow-2xl bg-white w-[75vw]  p-6 border rounded-2xl"
      >

    <div className="p-8 space-y-8">
      {/* Vehicles Section */}
      <div className="p-4 border border-gray-300">
        <h2>VEHICLES</h2>
        <div className="flex items-center mb-4">
          <label>Do you have any vehicles?*</label>
          <button type="button" onClick={() => handleHasVehicleChange(true)} className={`ml-2 ${hasVehicle ? 'bg-purple-500' : 'bg-gray-200'}`}>Yes</button>
          <button type="button" onClick={() => handleHasVehicleChange(false)} className={`ml-2 ${hasVehicle === false ? 'bg-purple-500' : 'bg-gray-200'}`}>No</button>
        </div>

        {hasVehicle && vehicles.map((vehicle, index) => (
          <div key={index} className="mb-4 border-b border-gray-300 pb-4">
            <div className="mb-2">
              <label>Year*</label>
              <input type="text" name="year" value={vehicle.year} onChange={(e) => handleVehicleChange(index, e)} required className="w-full border border-gray-300 p-2" />
            </div>
            <div className="mb-2">
              <label>Color*</label>
              <input type="text" name="color" value={vehicle.color} onChange={(e) => handleVehicleChange(index, e)} required className="w-full border border-gray-300 p-2" />
            </div>
            <div className="mb-2">
              <label>Make*</label>
              <input type="text" name="make" value={vehicle.make} onChange={(e) => handleVehicleChange(index, e)} required className="w-full border border-gray-300 p-2" />
            </div>
            <div className="mb-2">
              <label>Model*</label>
              <input type="text" name="model" value={vehicle.model} onChange={(e) => handleVehicleChange(index, e)} required className="w-full border border-gray-300 p-2" />
            </div>
            <div className="mb-2">
              <label>License plate number*</label>
              <input type="text" name="licensePlateNumber" value={vehicle.licensePlateNumber} onChange={(e) => handleVehicleChange(index, e)} required className="w-full border border-gray-300 p-2" />
            </div>
            <div className="mb-2">
              <label>License plate state*</label>
              <input type="text" name="licensePlateState" value={vehicle.licensePlateState} onChange={(e) => handleVehicleChange(index, e)} required className="w-full border border-gray-300 p-2" />
            </div>
            <button type="button" onClick={() => handleRemoveVehicle(index)} className="text-red-500">Delete</button>
          </div>
        ))}

        {hasVehicle && (
          <button type="button" onClick={handleAddVehicle} className="bg-purple-500 text-white p-2 rounded">Add Vehicle</button>
        )}
      </div>

      {/* Household Members Section */}
      <div className="p-4 border border-gray-300">
        <h2>HOUSEHOLD MEMBERS</h2>
        <div className="flex items-center mb-4">
          <label>Do you want to add any household members?*</label>
          <button type="button" onClick={() => handleHasHouseholdMemberChange(true)} className={`ml-2 ${hasHouseholdMember ? 'bg-purple-500' : 'bg-gray-200'}`}>Yes</button>
          <button type="button" onClick={() => handleHasHouseholdMemberChange(false)} className={`ml-2 ${hasHouseholdMember === false ? 'bg-purple-500' : 'bg-gray-200'}`}>No</button>
        </div>

        {hasHouseholdMember && householdMembers.map((member, index) => (
          <div key={index} className="mb-4 border-b border-gray-300 pb-4">
            <h3>Household Member {index + 1}</h3>
            <div className="mb-2">
              <label>Relationship*</label>
              <select name="relationship" value={member.relationship} onChange={(e) => handleHouseholdChange(index, e)} required className="w-full border border-gray-300 p-2">
                <option value="">Select Relationship</option>
                <option value="Parent">Parent</option>
                <option value="Sibling">Sibling</option>
                <option value="Child">Child</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button type="button" onClick={() => handleRemoveHouseholdMember(index)} className="text-red-500">Delete</button>
          </div>
        ))}

        {hasHouseholdMember && (
          <button type="button" onClick={handleAddHouseholdMember} className="bg-purple-500 text-white p-2 rounded">Add Household Member</button>
        )}
      </div>

      <button type="submit" className="bg-green-500 text-white p-2 rounded">Next</button>
    </div>
    </motion.div>
    </div>


  );
};

export default WebPage8;
