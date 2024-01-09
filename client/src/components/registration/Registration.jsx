import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Sign-up Here!</h1>
          <p className='py-6'>
            Ready for a learning journey tailored just for you? 🚀💡 Sign up now
            and unlock a world of educational possibilities. Your success story
            starts with StudySyncer – where learning meets innovation. Let's get
            started! 🌟💻
          </p>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>First Name</span>
              </label>
              <input
                type='text'
                placeholder='First Name'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Last Name</span>
              </label>
              <input
                type='text'
                placeholder='Last Name'
                className='input input-bordered'
                required
              />
            </div>
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
                <span className='label-text'>Student ID</span>
              </label>
              <input
                type='text'
                placeholder='Student ID'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <div className='flex justify-center items-center gap-5'>
                <div className='flex flex-col justify-center items-center'>
                  <label className='label'>
                    <span className='label-text'>Male</span>
                  </label>
                  <input
                    type='radio'
                    name='radio-7'
                    className='radio radio-info'
                    checked
                  />
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <label className='label'>
                    <span className='label-text'>Female</span>
                  </label>
                  <input
                    type='radio'
                    name='radio-7'
                    className='radio radio-info'
                    checked
                  />
                </div>
              </div>
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
                  <Link to={"/login"}>
                    <a className='label-text-alt link link-hover'>
                      Already have an account?
                    </a>
                  </Link>
                </div>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Sign-up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
