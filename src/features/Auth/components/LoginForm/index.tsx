import { yupResolver } from '@hookform/resolvers/yup';
import {InputField} from 'components/FormControl/InputField';
import {Loading} from 'components/Loading';
import { LoginPayload } from 'features/Auth/services/authSlice';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import './styles.css';

export interface ILoginFormProps {
  onSubmit: (values: LoginPayload) => void;
  loading: boolean;
}
export function LoginForm({ onSubmit, loading }: ILoginFormProps) {
  const handleSubmit = async (values: LoginPayload) => {
    onSubmit(values);
  };
  const schema = yup.object().shape({
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });
  return (
    <>
      <div className="h-screen flex">
        <div
          className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center"
        >
          <div
            className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
          ></div>
          <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
            <h1 className="text-white font-bold text-4xl font-sans">Home</h1>
            <p className="text-white mt-1">The simplest app to use</p>
            <div className="flex justify-center lg:justify-start mt-6">
              <Link
                to="/"
                className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            {loading ? (
              <Loading></Loading>
            ) : (
              <form className="bg-white rounded-md shadow-2xl p-5" onSubmit={form.handleSubmit(handleSubmit)}>
                <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again !</h1>
                <p className="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
                {/* email address*/}
                <div className="flex w-full items-center mb-8 py-2 px-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <InputField
                    name="email"
                    label="Email Address"
                    form={form}
                    placeholder="Email Address"
                    disabled={form.formState.isSubmitting}
                  ></InputField>
                </div>
                {/* password */}
                <div className="flex items-center  mb-12 py-2 px-3  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 mr-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <InputField
                    name="password"
                    label="Password"
                    form={form}
                    type="password"
                    placeholder="Password"
                    disabled={form.formState.isSubmitting}
                  ></InputField>
                </div>
                {/* submit form*/}
                <button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                >
                  Login
                </button>
                <div className="flex justify-between mt-4">
                  <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                    Forgot Password ?
                  </span>

                  <Link
                    to="/auth/register"
                    className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                  >
                    Don't have an account yet?
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
