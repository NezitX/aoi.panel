import Image from "next/image";
import profilePic from '../img/aoipanel-banner.png';

export default function Home() {
  return (
    <>
      <div className="poe rounded-tr-[20px] max-[600px]:rounded-r-[0px] bg-black bg-box content-around flex justify-start pl-25 max-[600px]:pl-0 max-[600px]:block">
        <div className="flex min-[600px]:full flex-col justify-center mx-4 w-[460px] max-[600px]:mx-0 max-[600px]:px-6 h-[100vh] lg:px-8 rounded-[0px]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              src={profilePic}
              alt="Picture of the author"
              className="mx-auto h-[150px] w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Login to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                  Username
                </label>
                <div className="mt-2 flex bg-login rounded-md">
                  <i className="my-1 mx-1 w-7 max-[600px]:my-3 max-[600px]:mx-1 max-[600px]:w-10 text-white" data-lucide="user"></i>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="bg-login block w-full rounded-r-md max-[600px]:py-3 min-[600px]:py-1.5 text-white shadow-sm ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
                </div>
                <div className="mt-2 flex bg-login rounded-md">
                  <i className="my-1 mx-1 w-7 max-[600px]:my-3 max-[600px]:mx-1 max-[600px]:w-10 text-white" data-lucide="lock"></i>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="bg-login block w-full rounded-r-md py-1.5 text-white shadow-sm ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Header Section */}
      <div className="header">
        {/* Content before waves */}
        <h1>
          hello
        </h1>
        <div className="inner-header flex">

          <div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
          {/* Just the logo.. Don't mind this */}

        </div>

        {/* Waves Container */}

        {/* Waves end */}
      </div>
      {/* Header ends */}

      {/* Content starts */}
      {/* Canvas for CreateJS */}

    </>
  );
}
