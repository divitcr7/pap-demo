import React from "react";
import { motion } from "framer-motion";

const WebPage5: React.FC = () => {
  return (
    <div className=" flex items-center justify-center  ">

    
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" shadow-2xl bg-white w-[75vw]  p-6 border rounded-2xl"
    >
      <form className="p-8 bg-white rounded-md mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-center mb-6 text-black">EMPLOYMENT</h1>

          <label className="flex items-center mb-4 text-purple-600">
            <span className="font-bold mr-2">Current Employment</span>
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Not applicable</span>
          </label>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Industry</label>
              <select className="w-full px-3 py-2 border rounded-md">
                <option value="">Select industry</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Country</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Employer*</label>
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
              <label className="block text-gray-700 font-bold mb-1">Title</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">City</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col md:flex-row md:space-x-4 items-center">
            <div className="flex-1 flex flex-col">
              <label className="block text-gray-700 font-bold mb-1">Dates*</label>
              <input type="date" className="w-full px-3 py-2 border rounded-md" />
            </div>

            <div className="flex items-center mt-2 md:mt-0">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Present</span>
            </div>
          </div>

          {/* Row 5 */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">State</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Monthly Income</label>
              <input type="number" className="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>

          {/* Row 6 */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Zip</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Supervisor Name</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>

          {/* Row 7 */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Supervisor Phone</label>
              <input type="tel" className="w-full px-3 py-2 border rounded-md" />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-1">Email Address</label>
              <input type="email" className="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>
        </div>

        {/* Verification Documents Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">VERIFICATION DOCUMENTS</h2>
          <p className="text-sm text-gray-600 mb-4">
            Please upload your proof of income documents...
          </p>
          <div className="flex items-center space-x-4">
            <input type="date" className="px-3 py-2 border rounded-md" />
            <input type="text" placeholder="Name" className="px-3 py-2 border rounded-md" />
            <button type="button" className="bg-purple-600 text-white px-4 py-2 rounded-md">
              Add
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-purple-600 text-white font-semibold py-3 rounded-md">
          Submit
        </button>
      </form>
    </motion.div>
    </div>

  );
};

export default WebPage5;
