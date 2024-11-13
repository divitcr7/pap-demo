import React from 'react';

const WebPage14: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      {/* Miscellaneous Section */}
      <div className="border border-gray-300 p-4 rounded-lg mb-4">
        <h2 className="font-semibold text-lg mb-4">MISCELLANEOUS</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Referral Section */}
          <div>
            <h3 className="text-blue-600 font-semibold mb-2">Referral</h3>
            <div className="mb-2">
              <label className="block font-medium text-gray-700">How did you hear about us?</label>
              <p className="text-gray-600">Knows the Area</p>
            </div>
            <div className="mb-2">
              <label className="block font-medium text-gray-700">Referring agency</label>
              <p className="text-gray-600">—</p>
            </div>
            <div className="mb-2">
              <label className="block font-medium text-gray-700">Referring agent</label>
              <p className="text-gray-600">—</p>
            </div>
            <div className="mb-2">
              <label className="block font-medium text-gray-700">Referring friend or person</label>
              <p className="text-gray-600">—</p>
            </div>
            <div className="mb-2">
              <label className="block font-medium text-gray-700">Other comments</label>
              <p className="text-gray-600">—</p>
            </div>
          </div>

          {/* Other Section */}
          <div>
            <h3 className="text-blue-600 font-semibold mb-2">Other</h3>
            <div className="mb-2">
              <label className="block font-medium text-gray-700">Reason for moving</label>
              <p className="text-gray-600">Housing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fee and Deposit Section */}
      <div className="border border-gray-300 p-4 rounded-lg mb-4">
        <h2 className="font-semibold text-lg mb-4">FEE AND DEPOSIT</h2>
        <p className="text-gray-600 mb-4">
          We are so happy you are ready to lease your new home with us. You will need to have your payment information available for your application fee and deposit online as it will be required at the completion of the application to reserve your apartment.
        </p>
        <div className="text-blue-600 font-semibold mb-2">Fee Breakdown</div>
        <p className="text-gray-600 mb-4">Please review the fees below. You will be redirected to a page to complete your payment.</p>
        
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Application Fee</span>
          <span className="text-gray-700">$75.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Unit Fee</span>
          <span className="text-gray-700">$150.00</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span className="text-gray-900">Total</span>
          <span className="text-gray-900">$225.00</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded">
          Back
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default WebPage14;
