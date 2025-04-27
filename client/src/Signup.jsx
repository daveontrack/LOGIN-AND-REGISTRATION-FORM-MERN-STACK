import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
    // console.log("Form submitted with:", { name, email, password });
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Add email input field here */}
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p className="mt-2 text-center">Already Have an Account?</p>
        {/* Corrected Link Component */}
        <Link
          to="/Login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;

// import { useState } from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState(""); // Added email state
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//     console.log("Form submitted with:", { name, email, password });
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-4 rounded w-25 shadow-lg">
//         <h2 className="text-center mb-4">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               <strong>Name</strong>
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               autoComplete="off"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="form-control rounded-0"
//             />
//           </div>

//           {/* Email input added here */}
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               autoComplete="off"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control rounded-0"
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control rounded-0"
//             />
//           </div>
//           <button type="submit" className="btn btn-success w-100 rounded-0">
//             Register
//           </button>
//         </form>
//         <p className="mt-2 text-center">Already Have an Account?</p>
//         {/* Use Link component from react-router-dom */}
//         <Link
//           to="/login" // Correct path
//           className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//         >
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Signup;
