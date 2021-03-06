import AuthTemplate from "../templates/auth.template";
import Router from "next/router";
import { BiArrowBack } from "react-icons/bi";

const Login = () => {
  return (
    <div>
      <div
        className="absolute flex items-center left-0 ml-10 mt-5 cursor-pointer text-blue-600"
        onClick={() => Router.back()}
      >
        <BiArrowBack className="mr-2" /> back
      </div>
      <form className="w-96">
        <h1 className="mb-10 mt-16 text-5xl font-semibold">Login</h1>
        <h2>Login to your account</h2>
        <p className="mt-2 mb-5 text-gray-400 ">Happy to meet you again</p>
        <div className="flex flex-col mb-3">
          <label>Username</label>
          <input className="btn-form my-2" type="text" placeholder="John Doe" />
        </div>
        <div className="flex flex-col">
          <label>Passwod</label>
          <input
            className="btn-form my-2"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="flex items-center mb-5 text-xs">
          <input className="mr-2" type="checkbox" />
          <span className="text-gray-400"> Remember me</span>
        </div>
        <div className="btn border-2 border-blue-600 bg-blue-600 text-white my-8">
          SIGN IN
        </div>
        <p className="my-5 text-center">
          Don't have an account yet ?
          <span className="text-blue-600"> Join</span>
        </p>
      </form>
    </div>
  );
};

export default Login;

Login.Template = AuthTemplate;
