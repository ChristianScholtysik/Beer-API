import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div
        className="navbar glass 
      flex justify-center">
        <button className="btn btn-ghost text-xl">
          <NavLink to="/">
            <button className="btn  bg-warning border-none text-white">
              <img src="/public/arrow_back.svg" alt="" />
              Back to Start
            </button>
          </NavLink>
        </button>
      </div>
    </>
  );
};

export default Nav;
