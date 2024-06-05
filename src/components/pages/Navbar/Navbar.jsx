import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const navLinks = (
    <div className="flex items-center gap-3">
      <Link to={"/"}>
        <button className="btn bg-[#0545ab] text-center w-32 text-white outline-[#0545ab] border-[#0545ab] btn-sm">
          <a>Home</a>
        </button>
      </Link>
      <Link to={"/join-employees"}>
        <button className="btn bg-[#0545ab] text-white font-bold btn-sm outline-[#0545ab] border-[#0545ab] ">
          Join as Employee
        </button>
      </Link>
      <Link to={"/join-manager"}>
        <button className="btn bg-[#0545ab] text-white font-bold btn-sm outline-[#0545ab] border-[#0545ab] ">
          Join as Manager
        </button>
      </Link>
      {user && (
        <>
          <Link to={"/"}>
            <button className="btn bg-[#0545ab] text-center w-32 text-white outline-[#0545ab] border-[#0545ab] btn-sm">
              <a>My Assets</a>
            </button>
          </Link>
          <Link to={"/"}>
            <button className="btn bg-[#0545ab] text-center w-32 text-white outline-[#0545ab] border-[#0545ab] btn-sm">
              <a>My Team</a>
            </button>
          </Link>
        </>
      )}
    </div>
  );

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login");
      Swal.fire({
        title: "Good job!",
        text: "You logged out successfully",
        icon: "success",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="navbar sticky py-4 top-0 bottom-auto  z-10 bg-slate-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 28 28"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"} className="btn text-xl">
          <img
            className="w-10 h-10 rounded-full"
            src={
              "https://i.ibb.co/vYRnLWM/Whats-App-Image-2024-06-03-at-10-21-24-PM-removebg-preview.png"
            }
            alt=""
          />
          <p className="text-[#064694] font-bold">
            Claudii<span className="text-[#f79902]">II</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2 flex items-center">
        {!user && (
          <div className="flex items-center decoration-neutral gap-2">
            <Link to={"/login"}>
              <button className="btn bg-[#0545ab] text-white font-bold btn-sm outline-[#0545ab] border-[#0545ab] ">
                Login
              </button>
            </Link>
          </div>
        )}
        {user && (
          <div className="dropdown z-10 dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  rounded-md btn-circle avatar"
            >
              <div title={user.displayName} className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  drop-shadow-md mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
            >
              <h1 className="mb-2 shadow-xl p-3 rounded-md">
                <p className="text-center uppercase font-bold">{user.email}</p>
              </h1>
              <Link
                to={"/"}
                className="btn bg-[#0545ab] text-white btn-sm font-bold"
              >
                Request for an Assets
              </Link>
              <Link
                to={"/profile"}
                className="btn bg-[#0545ab] text-white btn-sm font-bold"
              >
                Profile
              </Link>
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn bg-[#0545ab] text-white btn-sm font-bold"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
