import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loading, signIn, signInWithGoogle, setLoading } = useAuth();
  const navigate = useNavigate();
  const loginWithGoogle = async () => {
    await signInWithGoogle();
    navigate("/");
  };

  const handleLoin = async (e) => {
    e.preventDefault();

    // Check if the form object is defined
    if (!e.target) {
      console.error("Form object is undefined");
      return;
    }

    const form = e.target;

    const user_email = form.email.value;
    const password = form.password.value;
    console.log(user_email, password);

    try {
      setLoading(true);
      await signIn(user_email, password);
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleLoin}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label className="block mb-2 text-sm">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter Your Email Here"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#064694] bg-gray-200 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter Your Email Here"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#064694] bg-gray-200 text-gray-900"
              data-temp-mail-org="0"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#0545ab] w-full  rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner size={24} className="animate-spin m-auto" />
              ) : (
                "Log In"
              )}
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={loginWithGoogle}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?
          <Link
            to="/signup"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
