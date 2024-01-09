import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        <Link to={"/"}>
          <div className='flex justify-center items-center gap-2'>
            <div className='rounded-full bg-green-500 p-1'>
              <span className='text-sky-950 font-bold'>{"</>"}</span>
            </div>
            <a className='text-xl'>studysyncer.</a>
          </div>
        </Link>
      </div>
      <div className='navbar-end'></div>
    </div>
  );
};

export default NavBar;
