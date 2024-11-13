import React from "react";
import { motion } from "framer-motion";

const WebPage6: React.FC = () => {
  return (
    <div className=" flex items-center justify-center  ">


    <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" shadow-2xl bg-white w-[75vw]  p-6 border rounded-2xl"
      >

    <form className="p-8 bg-white rounded-md  mx-auto space-y-6">
      
      {/* Verification Documents */}
      <div>
        <h2 className="text-lg font-semibold mb-4">VERIFICATION DOCUMENTS</h2>
        <p className="text-sm text-gray-600 mb-4">
          Please upload your proof of income documents. Income Requirements: 3.0 times the monthly rent...
        </p>
        <div className="flex items-center space-x-4">
          <input type="date" className="px-3 py-2 border rounded-md" placeholder="Date attached" />
          <input type="text" placeholder="Name" className="px-3 py-2 border rounded-md" />
          <button type="button" className="bg-purple-600 text-white px-4 py-2 rounded-md">
            Add
          </button>
        </div>
      </div>

      {/* Emergency Contact */}
      <div>
        <h2 className="text-lg font-semibold mb-4">EMERGENCY CONTACT</h2>
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Name*</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Country</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Relationship*</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Street Address</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Phone</label>
              <input type="tel" className="w-full px-3 py-2 border rounded-md" />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">City</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Email*</label>
              <input type="email" className="w-full px-3 py-2 border rounded-md" />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">State</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>

          {/* Row 5 */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Zip</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Pets Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">PETS</h2>
        <p className="text-gray-700 font-bold mb-2">Do you have any pets?*</p>
        <div className="flex space-x-4">
          <button type="button" className="bg-purple-600 text-white px-4 py-2 rounded-md">
            Yes
          </button>
          <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
            No
          </button>
        </div>
      </div>

      {/* Vehicles Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">VEHICLES</h2>
        <p className="text-gray-700 font-bold mb-2">Do you have any vehicles?*</p>
        <div className="flex space-x-4">
          <button type="button" className="bg-purple-600 text-white px-4 py-2 rounded-md">
            Yes
          </button>
          <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
            No
          </button>
        </div>
      </div>

      {/* Household Members Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">HOUSEHOLD MEMBERS</h2>
        <p className="text-gray-700 font-bold mb-2">Do you want to add any household members?*</p>
        <div className="flex space-x-4">
          <button type="button" className="bg-purple-600 text-white px-4 py-2 rounded-md">
            Yes
          </button>
          <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
            No
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-purple-600 text-white font-semibold py-3 rounded-md">
        Next
      </button>
    </form>
    </motion.div>

    </div>


  );
};

export default WebPage6;
