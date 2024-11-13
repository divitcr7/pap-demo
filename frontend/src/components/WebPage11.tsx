import React, { useState } from 'react';

const WebPage11: React.FC = () => {
  const [formData, setFormData] = useState({
    howDidYouHear: 'Knows the Area',
    referringAgency: '',
    referringAgent: '',
    referringFriend: '',
    otherComments: '',
    reasonForMoving: 'Housing',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-8 bg-gray-100">
      {/* Application Details */}
      <div className="mb-8 p-4 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Application Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>Unit Number: <span className="font-semibold">7304</span></div>
          <div>Move-In Date: <span className="font-semibold">7/1/2024</span></div>
          <div>Rent: <span className="font-semibold">$1,893.00</span></div>
          <div>Bedrooms: <span className="font-semibold">2</span></div>
          <div>Bathrooms: <span className="font-semibold">2.00</span></div>
          <div>Lease Term: <span className="font-semibold">18 Months</span></div>
        </div>
      </div>

      {/* Household Members */}
      <div className="mb-8 p-4 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Household Members</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>Current: <span className="font-semibold">M Kirton</span></div>
          <div>Spouse: <span className="font-semibold">-</span></div>
          <div>Roommates: <span className="font-semibold">-</span></div>
          <div>Dependents: <span className="font-semibold">-</span></div>
        </div>
      </div>

      {/* Miscellaneous */}
      <div className="mb-8 p-4 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Miscellaneous</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Referral Section */}
          <div className="border-r border-gray-300 pr-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Referral</h3>
            <div className="mb-4">
              <label className="block font-semibold mb-1">How did you hear about us?*</label>
              <select
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded w-full"
              >
                <option value="Knows the Area">Knows the Area</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Referring agency</label>
              <input
                type="text"
                name="referringAgency"
                value={formData.referringAgency}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Referring agent</label>
              <input
                type="text"
                name="referringAgent"
                value={formData.referringAgent}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Referring friend or person</label>
              <input
                type="text"
                name="referringFriend"
                value={formData.referringFriend}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Other comments</label>
              <textarea
                name="otherComments"
                value={formData.otherComments}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded w-full"
                rows={3}
              ></textarea>
            </div>
          </div>

          {/* Other Section */}
          <div className="pl-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Other</h3>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Reason for moving</label>
              <select
                name="reasonForMoving"
                value={formData.reasonForMoving}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded w-full"
              >
                <option value="Housing">Housing</option>
                <option value="Job Relocation">Job Relocation</option>
                <option value="Education">Education</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-300 text-black rounded">Back</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default WebPage11;
