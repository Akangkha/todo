import { useState } from "react";
import Button from "../components/Button";
import { MdArrowOutward } from "react-icons/md";
import { register } from "../lib/auth";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    const data = {
      name: name,
      email: email,
      password: password,
    };
    const response = await register(data);
    if (response) {
      localStorage.setItem("token", response.token);
      window.location.href = "/";
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 min-h-screen overflow-x-hidden bg-[#b9ecff] ">
      <div className="xsSmall:w-[45%] flex flex-col shadow-xl p-12 bg-white w-[90%] max-w-[45rem] xsSmall:min-w-[18rem] justify-center gap-8 items-center md:items-start ">
        <section>
          <h3 className="text-3xl font-bold mt-12">SignUp</h3>
          <p className="text-xl font-semibold mb-3 ">
            We&apos;re glad to see you !
          </p>
          <p>
            Have an account?
            <Link to="/signin" className="text-green-600 m-0 px-2 ">
              Sign In!
            </Link>
          </p>
        </section>

        <form
          method="POST"
          className="w-full"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full flex flex-col gap-4">
            <label htmlFor="name">
              Name
              <span className="text-[#ff4242] px-2">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
              className="border rounded-xl py-3 w-full px-4"
            />
            <label htmlFor="name">
              Email
              <span className="text-[#ff4242] px-2">*</span>
            </label>
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="border rounded-xl py-3 w-full px-4"
            />
            <label htmlFor="name">
              Password
              <span className="text-[#ff4242] px-2">*</span>
            </label>
            <div className="border rounded-xl py-3 w-full px-4 flex items-center justify-between">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                className="outline-none w-full"
              />
              {showPassword ? (
                <FaEye size={20} onClick={() => handleShowPassword()} />
              ) : (
                <FaEyeSlash size={20} onClick={() => handleShowPassword()} />
              )}
            </div>

            <Button
              type="submit"
              className="bg-[#5BBB7B]  hover:bg-green-800 py-3 text-white font-semibold "
            >
              SignUp Now
              <MdArrowOutward />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
