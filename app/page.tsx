


'use client'

import Link from "next/link";
import { useState } from "react";
import { CiFaceSmile } from "react-icons/ci";

export default function AppPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loginData = {
      email,
      password
    };

    try {
      setLoading(true);
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      });

      const data = await res.json();

      // Check if the response contains the error message from backend
      if (data.message && data.message.includes("پسورد یا ایمل شما اشتباه است")) {
        alert("You are not registered or password is incorrect");
        return;
      }

      // Check for validation errors from backend
      if (data.errors) {
        const errorMessages = Object.values(data.errors).flat();
        alert(errorMessages.join('\n'));
        return;
      }

      // Check if login was successful
      if (data.success || (Array.isArray(data) && data.length > 0)) {
        alert("Login successful!");
        console.log("Successful login", data);
        // You can redirect or store token here
      } else {
        alert("Login failed. Please try again.");
      }

    } catch (error: any) {
      console.error("Login error:", error);

      // Handle network errors
      if (error.message) {
        alert(error.message);
      } else {
        alert("An error occurred during login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[100vh] flex items-center bg-[#348BC3]">
      <div className="w-[350px] rounded-lg h-[400px] bg-[#348BC3] border border-[#5EB1E5] shadow-inner shadow-white mx-auto flex flex-col items-center">
        <div className="flex flex-col p-4 items-center justify-center">
          <span className="bg-[#348BC3] border border-[#5EB1E5] shadow-inner shadow-white w-16 h-16 rounded-full flex items-center justify-center">
            <CiFaceSmile className="text-white text-4xl" />
          </span>
          <h1 className="font-semibold text-white">Sign in</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col w-[340px] gap-2 mt-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="text-center p-2 bg-[#348BC3] border-b-2 border-[#5EB1E5] text-white placeholder-gray-300"
            type="email"
            placeholder="Email"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="mt-8 text-center p-2 bg-[#348BC3] border-b-2 border-[#5EB1E5] text-white placeholder-gray-300"
            type="password"
            placeholder="Password"
          />

          <button
            className="mt-6 text-white border-b-2 border-[#5EB1E5] w-20 font-semibold mx-auto hover:bg-[#2a6fa0] transition-colors"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Log in"}
          </button>
        </form>

        <div className="w-full flex justify-between pr-2 pl-2 mt-8">
          <Link href={"/register"}>
            <button className="text-[#9CA1B6] border-b-2 border-[#5EB1E5] w-full font-semibold mb-4 hover:text-white transition-colors">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

















// like my code but the if the user is'nt exist theis dont show anything
// 'use client'

// import Link from "next/link";
// import { useState } from "react";
// import { CiFaceSmile } from "react-icons/ci";

// export default function AppPage() {
//   const [email, setEmail] = useState<string>(""); // Changed from name to email
//   const [password, setPassword] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent default form submission

//     const loginData = {
//       email, // Changed from name to email
//       password
//     };

//     try {
//       setLoading(true);
//       const res = await fetch("http://localhost:8000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(loginData)
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         // Handle validation errors from backend
//         if (data.errors) {
//           const errorMessages = Object.values(data.errors).flat();
//           alert(errorMessages.join('\n'));
//           return;
//         }
//         throw new Error(data.message || `Something went wrong: ${data.error}`);
//       }

//       // Check the response structure from your backend
//       if (data.success || (Array.isArray(data) && data.length > 0)) {
//         alert("Login successful!");
//         // You might want to store the token and redirect here
//         console.log("Successful login", data);
//       }

//     } catch (error: any) {
//       console.error("Login error:", error);

//       // Handle specific error cases
//       if (error.message && error.message.includes("پسورد یا ایمل شما اشتباه است")) {
//         alert("The user doesn't exist or password is incorrect");
//       } else if (error.message) {
//         alert(error.message);
//       } else {
//         alert("An error occurred during login");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-[100vh] flex items-center bg-[#348BC3]">
//       <div className="w-[350px] rounded-lg h-[400px] bg-[#348BC3] border border-[#5EB1E5] shadow-inner shadow-white mx-auto flex flex-col items-center">
//         <div className="flex flex-col p-4 items-center justify-center">
//           <span className="bg-[#348BC3] border border-[#5EB1E5] shadow-inner shadow-white w-16 h-16 rounded-full flex items-center justify-center">
//             <CiFaceSmile className="text-white text-4xl" />
//           </span>
//           <h1 className="font-semibold text-white">Sign in</h1>
//         </div>

//         <form onSubmit={handleSubmit} className="flex flex-col w-[340px] gap-2 mt-4">
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//             className="text-center p-2 bg-[#348BC3] border-b-2 border-[#5EB1E5] text-white placeholder-gray-300"
//             type="email" // Changed to email type
//             placeholder="Email" // Changed from "User Name" to "Email"
//           />

//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//             className="mt-8 text-center p-2 bg-[#348BC3] border-b-2 border-[#5EB1E5] text-white placeholder-gray-300"
//             type="password"
//             placeholder="Password"
//           />

//           <button
//             className="mt-6 text-white border-b-2 border-[#5EB1E5] w-20 font-semibold mx-auto hover:bg-[#2a6fa0] transition-colors"
//             type="submit"
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Log in"}
//           </button>
//         </form>

//         <div className="w-full flex justify-between pr-2 pl-2 mt-8">
//           <Link href={"/register"}>
//             <button className="text-[#9CA1B6] border-b-2 border-[#5EB1E5] w-full font-semibold mb-4 hover:text-white transition-colors">
//               Register
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }












//this does'nt show if the email be incorect
// 'use client'

// import Link from "next/link";
// import { useState } from "react";
// import { CiFaceSmile } from "react-icons/ci";

// export default function LoginPage() {
//   const [email, setEmail] = useState<string>(""); // Changed from 'name' to 'email'
//   const [password, setPassword] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent default form submission
//     setError("");

//     const loginData = {
//       email, // Changed to match backend expectation
//       password
//     };

//     try {
//       setLoading(true);
//       const res = await fetch("http://localhost:8000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(loginData)
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       if (data.success) {
//         alert("Login successful!");
//         // Store token in localStorage or context
//         if (data[1]?.plainTextToken) {
//           localStorage.setItem('token', data[1].plainTextToken);
//         }
//         // Redirect or handle successful login
//         console.log("Successful login", data);
//       }

//     } catch (error: any) {
//       console.error("Login error:", error);
//       setError(error.message || "Something went wrong");
//       alert(error.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-[100vh] flex items-center justify-center bg-[#348BC3]">
//       <div className="w-[350px] rounded-lg h-[450px] bg-[#348BC3] border border-[#5EB1E5] shadow-inner shadow-white mx-auto flex flex-col items-center p-4">

//         <div className="flex flex-col p-4 items-center justify-center">
//           <span className="bg-[#348BC3] border border-[#5EB1E5] shadow-inner shadow-white w-16 h-16 rounded-full flex items-center justify-center">
//             <CiFaceSmile className="text-white text-4xl" />
//           </span>
//           <h1 className="font-semibold text-white text-xl mt-2">Sign in</h1>
//         </div>

//         {error && (
//           <div className="text-red-300 text-sm mb-4 text-center">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6 mt-4">
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//             className="text-center p-3 bg-[#348BC3] border-b-2 border-[#5EB1E5] text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
//             type="email" // Changed to email type
//             placeholder="Email Address" // Updated placeholder
//           />

//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//             className="text-center p-3 bg-[#348BC3] border-b-2 border-[#5EB1E5] text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
//             type="password"
//             placeholder="Password"
//           />

//           <button
//             disabled={loading}
//             className="mt-4 text-white border-2 border-[#5EB1E5] py-2 px-4 rounded-lg font-semibold mx-auto hover:bg-[#5EB1E5] transition-colors disabled:opacity-50"
//             type="submit"
//           >
//             {loading ? "Loading..." : "Log in"}
//           </button>
//         </form>

//         <div className="w-full flex justify-center mt-8">
//           <Link href="/register" className="w-full">
//             <button className="text-[#9CA1B6] border-2 border-[#5EB1E5] py-2 px-4 rounded-lg font-semibold w-full hover:bg-[#5EB1E5] hover:text-white transition-colors">
//               Register
//             </button>
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// }


















// 'use client'



// import Link from "next/link";
// import { useState } from "react";
// import { CiFaceSmile } from "react-icons/ci";


// export default function AppPage() {

//   const [name, setName] = useState<string>("")
//   const [password, setPassword] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false)


//   const handleSubmit = async (e: React.FormEvent) => {

//     const loginData = {
//       name,
//       password
//     }

//     try {
//       setLoading(true)
//       const res = await fetch("http://localhost:8000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(loginData)
//       })
//       const data = await res.json()

//       if (!res.ok) {
//         throw new Error(`somting is worng${data.error}`)
//       }

//       if (res) {
//         alert("successs")
//       }
//       console.log("successful login", data.message)

//     } catch (error) {
//       console.error(error)
//     }
//     finally {
//       setLoading(false)
//     }
//   }



//   return (
//     <div className="h-[100vh] flex items-center bg-[#348BC3]">

//       <div className="w-[350px] rounded-lg h-[400px] bg-[#348BC3] border border-[#5EB1E5] shadow-inner shadow-white mx-auto flex flex-col items-center ">

//         <div className="flex flex-col p-4 items-center justify-center">
//           <span className="bg-[#348BC3]  border border-[#5EB1E5] shadow-inner shadow-white w-16 h-16 rounded-full flex items-center justify-center"><CiFaceSmile className="text-white text-4xl" /></span>
//           <h1 className="font-semibold text-white">Sign in</h1>

//         </div>

//         <form onSubmit={handleSubmit}
//           className="flex flex-col w-[340px] gap-2 mt-4">
//           <input
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="  text-center p-2 bg-[#348BC3] border-b-2 border-[#5EB1E5] "
//             type="text"
//             placeholder="User Name" />

//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="mt-8 text-center p-2 bg-[#348BC3] border-b-2 border-[#5EB1E5]  "
//             type="password"
//             placeholder="Password" />

//           <button className="mt-6 text-white border-b-2 border-[#5EB1E5] w-20 font-semibold mx-auto" type="submit">{loading ? "loading.." : "Log in"}</button>
//         </form>

//         <div className="w-full flex justify-between pr-2 pl-2 mt-8">
//           <Link href={"/register"}>
//             <button className=" text-[#9CA1B6] border-b-2 border-[#5EB1E5] w-full font-semibold mb-4  ">Register</button>
//           </Link>
//           {/* <Link href={"/#"}>
//             <button className=" text-[#9CA1B6] border-b-2 border-[#5EB1E5] w-full font-semibold mb-4  ">For got Password</button>
//           </Link> */}
//         </div>

//       </div>
//     </div>

//   );
// }


