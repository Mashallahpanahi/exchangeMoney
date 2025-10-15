
'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AppPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

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


      if (data.message && data.message.includes("پسورد یا ایمل شما اشتباه است")) {
        alert("You are not registered or password is incorrect");
        return;
      }


      if (data.errors) {
        const errorMessages = Object.values(data.errors).flat();
        alert(errorMessages.join('\n'));
        return;
      }


      if (data.success || (Array.isArray(data) && data.length > 0)) {
        // alert("Login successful!");
        router.push('/dashboard')
        console.log("Successful login", data);


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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-[100vh] flex items-center bg-[#348BC3]">

      <div className="sm:w-[320] md:w-[350px] rounded-lg h-[400px] bg-[#348BC3] border border-[#5EB1E5] shadow-inner shadow-white mx-auto flex flex-col items-center">
        <div className="flex flex-col p-4 items-center justify-center">
          <span className="bg-[#348BC3] border border-[#5EB1E5] shadow-inner shadow-white w-16 h-16 rounded-full flex items-center justify-center">
            <CiFaceSmile className="text-white text-4xl" />
          </span>
          <h1 className="font-semibold text-white">Sign in</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2 mt-4 pl-4 pr-4 ">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className=" text-center p-2 bg-[#348BC3] border-b-2 border-[#5EB1E5] text-white placeholder-gray-300 w-full"
            type="email"
            placeholder="Email"
          />

          <div className="relative mt-8">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="w-full text-center p-2 bg-[#348BC3] border-b-2 border-[#5EB1E5] text-white placeholder-gray-300 pr-10"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          <button
            className="mt-6 text-white border-b-2 border-[#5EB1E5] w-20 font-semibold mx-auto hover:bg-[#2a6fa0] transition-colors hover:rounded-md"
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






























//origin one

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


