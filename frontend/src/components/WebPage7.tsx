import React, { useState } from 'react';
import { motion } from "framer-motion";

interface Pet {
  name: string;
  type: string;
  breed: string;
  color: string;
  age: number;
  weight: number;
  registrationType: string;
  issuer: string;
  number: string;
  assistanceAnimal: boolean;
}

const WebPage7: React.FC = () => {
  const [hasPet, setHasPet] = useState<boolean | null>(null);
  const [pet, setPet] = useState<Pet>({
    name: '',
    type: '',
    breed: '',
    color: '',
    age: 0,
    weight: 0,
    registrationType: '',
    issuer: '',
    number: '',
    assistanceAnimal: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setPet({
      ...pet,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleHasPetChange = (value: boolean) => {
    setHasPet(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Pet information:', pet);
  };

  return (

    <div className=" flex items-center justify-center  ">
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" shadow-2xl bg-white w-[75vw]  p-6 border rounded-2xl"
      >

    <form onSubmit={handleSubmit} className="p-4 ">
      <h2>PETS</h2>

      <div className="flex items-center mb-4">
        <label>Do you have any pets?*</label>
        <button type="button" onClick={() => handleHasPetChange(true)} className={`ml-2 ${hasPet ? 'bg-purple-500' : 'bg-gray-200'}`}>
          Yes
        </button>
        <button type="button" onClick={() => handleHasPetChange(false)} className={`ml-2 ${hasPet === false ? 'bg-purple-500' : 'bg-gray-200'}`}>
          No
        </button>
      </div>

      {hasPet && (
        <>
          <div className="mb-4">
            <label>Name*</label>
            <input type="text" name="name" value={pet.name} onChange={handleChange} required className="w-full border border-gray-300 p-2" />
          </div>

          <div className="mb-4">
            <label>Type*</label>
            <select name="type" value={pet.type} onChange={handleChange} required className="w-full border border-gray-300 p-2">
              <option value="">Select Type</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label>Breed*</label>
            <input type="text" name="breed" value={pet.breed} onChange={handleChange} required className="w-full border border-gray-300 p-2" />
          </div>

          <div className="mb-4">
            <label>Color*</label>
            <input type="text" name="color" value={pet.color} onChange={handleChange} required className="w-full border border-gray-300 p-2" />
          </div>

          <div className="mb-4">
            <label>Age (years)*</label>
            <input type="number" name="age" value={pet.age} onChange={handleChange} required className="w-full border border-gray-300 p-2" />
          </div>

          <div className="mb-4">
            <label>Weight (lbs.)*</label>
            <input type="number" name="weight" value={pet.weight} onChange={handleChange} required className="w-full border border-gray-300 p-2" />
          </div>

          <h3 className="mt-4">Registration</h3>

          <div className="mb-4">
            <label>Type</label>
            <input type="text" name="registrationType" value={pet.registrationType} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>

          <div className="mb-4">
            <label>Issuer</label>
            <input type="text" name="issuer" value={pet.issuer} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>

          <div className="mb-4">
            <label>Number</label>
            <input type="text" name="number" value={pet.number} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" name="assistanceAnimal" checked={pet.assistanceAnimal} onChange={handleChange} />
            <label className="ml-2">Assistance Animal</label>
          </div>

          <button type="submit" className="bg-purple-500 text-white p-2 rounded">Add Pet</button>
        </>
      )}
    </form>
    </motion.div>
    </div>

  );
};

export default WebPage7;
