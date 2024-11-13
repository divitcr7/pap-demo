import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  howDidYouHear: string;
  workingWithAgent: string;
  username: string;
  password: string;
  confirmPassword: string;
  consent: boolean;
  agreePrivacyPolicy: boolean;
  agreeRentalCriteria: boolean;
}

const WebPage2 = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    howDidYouHear: "Knows the Area",
    workingWithAgent: "No",
    username: "",
    password: "",
    confirmPassword: "",
    consent: false,
    agreePrivacyPolicy: false,
    agreeRentalCriteria: false,
  });

  const [emailError, setEmailError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateEmail = () => {
    if (formData.email === "kirton@live.com") {
      setEmailError("A user with this email already exists");
    } else {
      setEmailError(null);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!emailError) {
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className=" flex items-center justify-center  ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" shadow-2xl bg-white w-[75vw]  p-6 border rounded-2xl"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-black">CREATE ACCOUNT</h1>
        <h3 className="text-center mb-8 text-gray-600">
          Create a new account. Already have an account?{" "}
          <button className="text-purple-600 underline hover:text-purple-800">Sign In</button>
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="font-bold block text-gray-700">First Name <span className="text-red-700">*</span></label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
                required
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="font-bold block text-gray-700">Last Name <span className="text-red-700">*</span></label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
                required
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="font-bold block text-gray-700">Email <span className="text-red-700">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={validateEmail}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
                required
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="font-bold block text-gray-700">Phone <span className="text-red-700">*</span></label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
                required
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="font-bold block text-gray-700">How did you hear about us? <span className="text-red-700">*</span>  </label>
              <select
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
              >
                <option>Knows the Area</option>
                <option>Online Advertisement</option>
                <option>Friend or Family</option>
                <option>Other</option>
              </select>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="font-bold block text-gray-700">Are you working with a leasing agent? <span className="text-red-700">*</span></label>
              <select
                name="workingWithAgent"
                value={formData.workingWithAgent}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </motion.div>
          </div>

          <motion.div className="flex flex-col gap-4">
            <div>
              <motion.div whileHover={{ scale: 1.03 }}>

                <label className="font-bold block text-gray-700">Username <span className="text-red-700">*</span></label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
                  required
                />
              </motion.div>
            </div>



            <div>
              <motion.div whileHover={{ scale: 1.03 }}>

                <label className="font-bold block text-gray-700">Password <span className="text-red-700">*</span></label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
                  required
                />
              </motion.div>

            </div>

            <div>
              <motion.div whileHover={{ scale: 1.03 }}>


                <label className="font-bold block text-gray-700">Confirm Password <span className="text-red-700">*</span></label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
                  required
                />
              </motion.div>
            </div>
          </motion.div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <label className="text-gray-700 font-bold">
              I consent to receive email and/or text notifications.
            </label>
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="text-gray-700 font-bold">
              <a href="#" target="_blank" className="text-indigo-600 hover:underline">Privacy Policy</a>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agreePrivacyPolicy"
                  checked={formData.agreePrivacyPolicy}
                  onChange={handleChange}
                  className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  required
                />
                <label className="font-bold text-gray-700">
                  I agree to the <span className="text-blue-500 underline">Privacy Policy</span>.
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agreeRentalCriteria"
                  checked={formData.agreeRentalCriteria}
                  onChange={handleChange}
                  className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  required
                />
                <label className="font-bold text-gray-700">
                  I agree to the Rental Criteria.
                </label>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full py-3 mt-6 bg-purple-600 text-white font-bold rounded-md focus:ring-4 focus:ring-purple-400 hover:bg-purple-700"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default WebPage2;
