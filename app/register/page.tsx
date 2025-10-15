
'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
    const router = useRouter();

    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password_confirmation, setPassword_confirmation] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const [errors, setErrors] = useState<{
        name?: string[];
        email?: string[];
        password?: string[];
        password_confirmation?: string[];
        general?: string;
    }>({})

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrors({}); // error haiie qabli ra pak  nekonat

        const registerData = {
            name,
            password,
            email,
            password_confirmation
        }

        try {
            const res = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(registerData)
            })

            const data = await res.json()

            if (!res.ok) {
                // If there are validation errors from Laravel
                if (data.errors) {
                    setErrors(data.errors);
                } else if (data.message) {
                    setErrors({ general: data.message });
                }
                return;
            }

            const a = alert(`successful:${data.message}`)
            router.push("/")
            // Clear form on success
            setName("");
            setEmail("");
            setPassword("");
            setPassword_confirmation("");
            setErrors({});

        } catch (error) {
            console.error("Registration error:", error)
            setErrors({ general: "Network error. Please try again." });
        } finally {
            setLoading(false)
        }
    }

    const taggleEyePassword = () => {
        setShowPassword(!showPassword)
    }




    return (
        <div className="h-[100vh] flex items-center bg-[#348BC3]">
            <div className="w-[400px] rounded-lg h-[600px] bg-[#348BC3] border border-[#5EB1E5] shadow-inner shadow-white mx-auto flex flex-col items-center ">
                <div className="flex flex-col p-4 items-center justify-center">
                    <span className="bg-[#348BC3]  border border-[#5EB1E5] shadow-inner shadow-white w-16 h-16 rounded-full flex items-center justify-center">
                        <CiFaceSmile className="text-white text-4xl" />
                    </span>
                    <h1 className="font-semibold text-white">Sign in</h1>
                </div>

                {errors.general && (
                    <div className="w-[340px] bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {errors.general}
                    </div>
                )}

                <form className="flex flex-col w-[340px] gap-2 mt-4" onSubmit={handleSubmit}>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        name="name"
                        required
                        className={`text-center p-2 bg-[#348BC3] border-b-2 ${errors.name ? 'border-red-500' : 'border-[#5EB1E5]'
                            }`}
                        type="text"
                        placeholder="User Name"
                    />
                    {errors.name && (
                        <div className="text-red-500 text-sm text-right">
                            {errors.name[0]}
                        </div>
                    )}

                    {/* <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        name="password"
                        required
                        className={`mt-4 text-center p-2 bg-[#348BC3] border-b-2 ${errors.password ? 'border-red-500' : 'border-[#5EB1E5]'
                            }`}
                        type="password"
                        placeholder="Password"
                    /> */}
                    <div className="relative mt-8">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            className="w-full text-center p-2 bg-[#348BC3] border-b-2 border-[#5EB1E5] text-white  pr-10"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                            onClick={taggleEyePassword}
                        >
                            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                        </button>
                    </div>
                    {errors.password && (
                        <div className="text-red-500 text-sm text-right">
                            {errors.password[0]}
                        </div>
                    )}

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        name="email"
                        required
                        className={`mt-4 text-center p-2 bg-[#348BC3] border-b-2 ${errors.email ? 'border-red-500' : 'border-[#5EB1E5]'
                            }`}
                        type="email"
                        placeholder="Email"
                    />
                    {errors.email && (
                        <div className="text-red-500 text-sm text-right">
                            {errors.email[0]}
                        </div>
                    )}

                    <input
                        onChange={(e) => setPassword_confirmation(e.target.value)}
                        value={password_confirmation}
                        name="password_confirmation"
                        required
                        className={`mt-4 text-center p-2 bg-[#348BC3] border-b-2 ${errors.password_confirmation ? 'border-red-500' : 'border-[#5EB1E5]'
                            }`}
                        type="password"
                        placeholder="Password confirmation"
                    />
                    {errors.password_confirmation && (
                        <div className="text-red-500 text-sm text-right">
                            {errors.password_confirmation[0]}
                        </div>
                    )}

                    <button
                        className="mt-6 text-white border-b-2 border-[#5EB1E5] w-20 font-semibold mx-auto py-2"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
}
















