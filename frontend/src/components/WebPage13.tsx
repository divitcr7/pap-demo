import React from 'react';

const WebPage13: React.FC = () => {
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

      {/* Applicant Information */}
      <div className="mb-8 p-4 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Applicant Information</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">First name</h3>
            <p>Kevin</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Middle name</h3>
            <p>M</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Last name</h3>
            <p>Kirton</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Birthdate</h3>
            <p>07/24/****</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
            <p>(713) 522-1800 <span className="text-sm text-gray-500">Mobile</span></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Email</h3>
            <p>kmk@buckfund.com</p>
          </div>
        </div>
      </div>

      {/* Identification and Driver's License */}
      <div className="mb-8 p-4 bg-white shadow rounded">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Identification</h3>
            <p>Identification: ******7111</p>
            <p>SSN</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Drivers License</h3>
            <p>Number: -</p>
            <p>State: -</p>
          </div>
        </div>
      </div>

      {/* Addresses */}
      <div className="mb-8 p-4 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Addresses</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-blue-600">Current Address</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>Country: <span className="font-semibold">United States</span></p>
              <p>Street address: <span className="font-semibold">3411 Yoakum Blvd</span></p>
              <p>City: <span className="font-semibold">Houston</span></p>
            </div>
            <div>
              <p>Are you renting? <span className="font-semibold">Yes</span></p>
              <p>Community or Landlord Name: <span className="font-semibold">Hines</span></p>
              <p>Community or Landlord Contact Name: <span className="font-semibold">Eli</span></p>
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

export default WebPage13;
