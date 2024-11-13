// import { NavLink, useNavigate } from 'react-router-dom';
// import { useUser } from "../UserContext";
// import { motion } from "framer-motion";


// const Home: React.FC = () => {
//   const navigate = useNavigate();
//   const { user, logoutUser } = useUser();

//   // Define an array of page objects with paths and labels
//   const pages = Array.from({ length: 13 }, (_, i) => ({
//     path: `/webPage${i + 2}`,
//     label: `Go to WebPage${i + 2}`,
//   }));

//   const renderUserProfile = () => (
//     <div className="m-12 flex items-center justify-between gap-4 bg-white p-6 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mb-6">
//       <div>
//         <h1>Name: {user?.name}</h1>
//         <p>Email: {user?.email}</p>
//       </div>
//       <img
//         src={user?.profilePic}
//         alt="Profile"
//         className="  w-24 h-24 rounded-full object-cover mt-4"
//       />
//       <button
//         onClick={logoutUser}
//         className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600"
//       >
//         Logout
//       </button>
//     </div>
//   );

//   const renderLoginRegisterPrompt = () => (
//     <div className="bg-white p-6 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mb-6">
//       Please
//       <NavLink to="/login">
//         <button className="m-4 bg-green-400 p-2 border-2 border-black rounded-xl font-bold">Login</button>
//       </NavLink>
//       or
//       <NavLink to="/register">
//         <button className="m-4 bg-green-400 p-2 border-2 border-black rounded-xl font-bold">Register</button>
//       </NavLink>
//       sample email and password : <strong>admin@gmail.com</strong>
//     </div>
//   );

//   return (
//     <div className="max-w-7xl mx-auto p-6">

//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className=" shadow-2xl bg-white rounded-2xl"
//       >
//         {user ? renderUserProfile() : renderLoginRegisterPrompt()}

//       </motion.div>

//       <div className="mt-12 text-center mb-6">
//         <h2 className="text-xl font-bold text-gray-800">This is the home page</h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         {pages.map((page, index) => (
//           <button
//             key={index}
//             onClick={() => navigate(page.path)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
//           >
//             {page.label}
//           </button>
//         ))}
//       </div>

//       <div>

//         <NavLink to='/stepper'>
//           <button className='m-4 bg-green-400 p-2 border-2 border-black rounded-xl font-bold'>Fill the lease</button>
//         </NavLink>
//       </div>



//     </div>
//   );
// };

// export default Home;
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from "../UserContext";
import { motion } from "framer-motion";
import { useEffect } from 'react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useUser();

  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
  }, []);

  

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mt-12 text-center mb-6">
        <h2 className="text-2xl capitalize font-bold text-center">This is the home page</h2>
      </div>

      <div className='flex items-center justify-center'>
        <NavLink to="/stepper">
          <button className="m-4 bg-green-400 p-2 border-2 border-black rounded-xl font-bold">Fill the lease</button>
        </NavLink>
      </div>
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] flex items-center justify-center gap-12 border-4 bg-white rounded-3xl"
        >
          <div className="flex flex-col rounded-2xl items-center justify-around gap-4 bg-white p-6 ">
            <img
              src={user?.profilePic}
              alt="Profile"
              className="border-4 border-black w-24 h-24 rounded-full object-cover mt-4"
            />
            <div>
              <h1>Name: {user?.name}</h1>
              <p>Email: {user?.email}</p>
            </div>
            <button
              onClick={logoutUser}
              className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
