import React, { useState } from 'react';

const WebPage10: React.FC = () => {
  const [history, setHistory] = useState({
    eviction: false,
    unauthorizedMove: false,
    bankruptcy: false,
    rentLawsuit: false,
    propertyDamageLawsuit: false,
    criminalConviction: false,
    none: false,
  });

  const [criminalDetails, setCriminalDetails] = useState('');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    
    // Reset other checkboxes if "None apply to me" is selected
    if (name === 'none') {
      setHistory({
        eviction: false,
        unauthorizedMove: false,
        bankruptcy: false,
        rentLawsuit: false,
        propertyDamageLawsuit: false,
        criminalConviction: false,
        none: checked,
      });
    } else {
      setHistory((prevState) => ({
        ...prevState,
        [name]: checked,
        none: false, // Uncheck "none apply to me" if any other option is selected
      }));
    }
  };

  return (
    <div className="p-8 space-y-4 border border-gray-300">
      <h2>RENTAL/CRIMINAL HISTORY</h2>
      <p>Please respond to the following:</p>
      
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="eviction"
            checked={history.eviction}
            onChange={handleCheckboxChange}
          />
          <span>Been asked to move out or evicted?</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="unauthorizedMove"
            checked={history.unauthorizedMove}
            onChange={handleCheckboxChange}
          />
          <span>Without the owner's consent, moved prior to the end of the lease term?</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="bankruptcy"
            checked={history.bankruptcy}
            onChange={handleCheckboxChange}
          />
          <span>Declared bankruptcy?</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="rentLawsuit"
            checked={history.rentLawsuit}
            onChange={handleCheckboxChange}
          />
          <span>Been sued for rent?</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="propertyDamageLawsuit"
            checked={history.propertyDamageLawsuit}
            onChange={handleCheckboxChange}
          />
          <span>Been sued for property damage?</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="criminalConviction"
            checked={history.criminalConviction}
            onChange={handleCheckboxChange}
          />
          <span>
            Been convicted (or received an alternative form of adjudication equivalent to conviction) of a felony,
            misdemeanor involving a controlled substance, violence to another person, destruction of property, or a sex crime?
          </span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="none"
            checked={history.none}
            onChange={handleCheckboxChange}
          />
          <span>None apply to me</span>
        </label>
      </div>

      {/* Conditional Text Area */}
      {history.criminalConviction && (
        <div className="mt-4">
          <p className="text-gray-700">
            If you marked criminal information above, please provide below the year, location, and type of each felony, misdemeanor
            involving a controlled substance, violence to another person or destruction of property, or sex crime other than those
            resolved by dismissal or acquittal. These facts may need to be discussed further prior to making a decision.
          </p>
          <textarea
            value={criminalDetails}
            onChange={(e) => setCriminalDetails(e.target.value)}
            placeholder="Enter details here..."
            className="w-full p-2 border border-gray-300 mt-2"
          />
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button type="button" className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
};

export default WebPage10;





