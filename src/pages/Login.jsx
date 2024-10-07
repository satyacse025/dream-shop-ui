import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location in the login page", location);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    console.log(form);

    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Login Successful", {
          position: "top-right",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignin = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        console.log(result.user);
        toast.success("User Google Login Successful", {
          position: "top-right",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubSignin = () => {
    githubSignIn(githubProvider)
      .then((result) => {
        console.log(result.user);
        toast.success("User GitHub Login Successful", {
          position: "top-right",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="py-8 bg-white">
        <div className="flex h-full items-center justify-center">
          <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-900 flex-col flex h-full items-center justify-center sm:px-4">
            <div className="flex h-full flex-col justify-center gap-4 p-6">
              <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
                <form
                  onSubmit={handleLogin}
                  className="flex flex-col gap-4 pb-4"
                >
                  <h1 className="mb-4 text-2xl font-bold dark:text-white text-center">
                    Login your Account
                  </h1>
                  <div>
                    <div className="mb-2">
                      <label
                        className="text-sm font-medium text-gray-900 dark:text-gray-300"
                        htmlFor="email"
                      >
                        Email
                      </label>
                    </div>
                    <div className="flex w-full rounded-lg pt-1">
                      <div className="relative w-full">
                        <input
                          className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-none"
                          id="email"
                          type="email"
                          name="email"
                          placeholder="email@example.com"
                          autoComplete="on"
                          required
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <label
                        className="text-sm font-medium text-gray-900 dark:text-gray-300"
                        data-testid="flowbite-label"
                        htmlFor="password"
                      >
                        Password
                      </label>
                    </div>
                    <div className="flex w-full rounded-lg pt-1">
                      <div className="relative w-full">
                        <input
                          className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300
                           text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700
                            dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-none"
                          id="password"
                          type="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="on"
                          required
                        />
                      </div>
                    </div>
                    <p className="mt-2 cursor-pointer text-blue-500 hover:text-blue-600">
                      Forgot password?
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      type="submit"
                      className="text-white bg-blue-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                    >
                      <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                        Login
                      </span>
                    </button>


                    <button type="button" onClick={handleGoogleSignin} class="text-white bg-[#4285F4] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55">
                      <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                      </svg>
                      Sign in with Google
                    </button>


                    <button onClick={handleGitHubSignin} type="button" class="text-white bg-[#24292F] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30">
                      <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                      </svg>
                      Sign in with Github
                    </button>
                  </div>
                </form>
                <div className="min-w-[270px]">
                  <div className="mt-2 text-center dark:text-gray-200">
                    Don&apos;t Have an Account? &nbsp;
                    <Link
                      className="text-blue-500 underline hover:text-blue-600"
                      to="/register"
                    >
                      Register Here
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
