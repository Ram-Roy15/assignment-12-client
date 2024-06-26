import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";

import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAxiosCommon from "../../hooks/useAxiosSecure";
import { imageUpload } from "../../utils";
import { Helmet } from "react-helmet-async";

const JoinEmployee = () => {
  const {
    createUser,
    updateUserProfile,
    loading,
    user,
    setLoading,
    signInWithGoogle,
  } = useAuth();
  console.log();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const axiosCommon = useAxiosCommon();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const img_url = await imageUpload(image);
    const date = startDate.selected;
    const employee = {
      name,
      img_url,
      email: user ? user.email : email,
      role: "employee",
      status: "Varified",
      password,
      date,
    };
    console.log(employee);
    form.reset();
    try {
      setLoading(true);
      await createUser(email, password);
      await updateUserProfile(name);
      await axiosCommon.put(`/employee`, employee);
      toast.success("Account created successfully");
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  const loginWithGoogle = async () => {
    setLoading(true);
    await signInWithGoogle();

    const employee = {
      name: user?.displayName,
      email: user?.email,
      role: "employee",
      status: "Varified",
      password: user?.uid,
      date: startDate,
    };
    console.log(employee);
    await axiosCommon.put(`/employee`, employee);
    toast.success("Account created successfully");

    setLoading(false);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Helmet>
        <title>Join Employee</title>
      </Helmet>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Join as a Employee</h1>
          <p className="text-sm text-gray-400">Welcome to Claudii</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#064694] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#064694] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#064694] bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                profile photo
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Date of Birth
              </label>
              <DatePicker
                className="min-w-80 px-3 py-2 p-2  font-semibold rounded-md bg-gray-200 focus:outline-[#064694] text-gray-900"
                placeholderText="Select Date"
                selected={startDate}
                dateFormat="dd/MM/yyyy"
                showMonthDropdown
                showYearDropdown
                scrollableMonthYearDropdown
                startDate={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#064694] w-full  rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner
                  size={24}
                  className="animate-spin font-bold  m-auto"
                />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button
          onClick={loginWithGoogle}
          disabled={loading}
          type="button"
          className="flex justify-center disabled:coursor-not-allowed coursor-pointer items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?
          <Link
            to="/login"
            className="hover:underline hover:text-[#064694] text-gray-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default JoinEmployee;
