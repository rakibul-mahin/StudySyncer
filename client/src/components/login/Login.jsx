import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>
            Welcome back to StudySyncer! Login to dive into your learning
            adventure. 🌟 Your success story continues here. 🚀💻
          </p>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
              <label className='label'>
                <div className='flex flex-col w-full border-opacity-50'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                  <div className='divider'>OR</div>
                  <Link to={"/signup"}>
                    <a className='label-text-alt link link-hover'>
                      Don't have an account?
                    </a>
                  </Link>
                </div>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
