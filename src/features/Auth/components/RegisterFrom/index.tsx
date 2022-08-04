import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from 'components/FormControl/InputField';
import { RegisterPayload } from 'features/Auth/services/authSlice';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import './styles.css';
export interface RegisterFormProps {
  onSubmit: (values: RegisterPayload) => void;
  loading: boolean;
}
export function RegisterFrom({ onSubmit, loading }: RegisterFormProps) {
  const handleSubmit = async (values: RegisterPayload) => {
    onSubmit(values);
  };
  const schema = yup.object().shape({
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    username: yup.string().min(6, 'Username must be at least 6 characters').required('Username is required'),
    confirm: yup.string().oneOf([yup.ref('password'), null], 'Password incorrect!'),
  });
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      username: '',
      confirm: '',
    },
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
            <h1 className="text-white font-bold text-4xl font-sans">Login</h1>
            <p className="text-white mt-1">Come back login</p>
            <div className="flex justify-center lg:justify-start mt-6">
              <Link
                to="/auth/login"
                className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <form className="bg-white rounded-md shadow-2xl p-5" onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="text-center">
                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                <p>Enter your information to register</p>
              </div>
              <div>
                {/* username */}
                <div className="flex items-center  mb-8 py-2 px-3  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  <InputField
                    name="username"
                    label="username"
                    form={form}
                    type="text"
                    placeholder="Username"
                    disabled={form.formState.isSubmitting}
                  ></InputField>
                </div>
                {/* email */}
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
                {/* Confirm password */}
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
                    name="confirm"
                    label="confirm"
                    form={form}
                    type="password"
                    placeholder="Confirm password"
                    disabled={form.formState.isSubmitting}
                  ></InputField>
                </div>
                {/* button -submit */}
                <button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                >
                  REGISTER NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
