import React, { useRef, useState } from "react";
import Container from "../../../Layout/Container";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
// redux
import { loginUser, logUserName } from "../authslices/counterSlice";
import { RootState } from "../../../base/stores/store";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";

interface IFormInput {
  email: string;
  password: string;
}

function Login() {
  const router = useRouter();

  const count = useSelector((state: RootState) => state.user.login);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();


  function handleChange(user: any) {
    dispatch(logUserName(user));
  }
  
  const [user, setUser] = useState<any>({});

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
      handleChange(user?.email);
      dispatch(loginUser());
      console.log(user);
    }
  });

  


  const handleLogin = async (data: any, e: any) => {
    if (data) {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        
        toast.success(`successfully  Login`);
        dispatch(loginUser());
        setTimeout(() => router.push("/"), 1500);
        // setTimeout(() => window.location.reload(), 3500);
      } catch (error: any) {
        toast.error(error.message);
        console.log(error.message);
        
      }
      e.target.reset();
    }
  
  };

  return (
    <div className="h-screen bg-white  w-full">
      <div className="h-screen pt-[200px] ">
        <Container>
          <div className="lg:ml-[200px] ">
            <h2 className="text-primary text-center lg:text-left text-4xl font-medium uppercase">
              Login
            </h2>

            <p className="text-textColor text-lg mt-2">
              Input Your Dummy login form
            </p>

            <div className="mt-12 md:max-w-md w-full  mx-auto bg-white border rounde-xl shadow-md p-6 inline-block">
              <form
                onSubmit={handleSubmit(handleLogin)}
                className="grid md:w-[400px] mx-auto space-y-6"
              >
                <div className="space-y-2">
                  <label htmlFor="">Email</label>
                  <p className="text-red-500 text-lg text-left mb-3">
                    {errors.email?.message}
                  </p>
                  <input
                    {...register("email", {
                      required: "Email required",
                    })}
                    className="rounded-full w-full border px-4 py-3 focus:border-primary outline-none "
                    placeholder="Email"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="">Password</label>
                  <p className="text-red-500 text-lg text-left mb-3">
                    {errors.password?.message}
                  </p>
                  <input
                    {...register("password", {
                      required: "Password required",
                      maxLength: 18,
                      minLength: 4,
                    })}
                    className="rounded-full w-full border px-4 py-3 focus:border-primary outline-none "
                    placeholder="Password"
                  />
                </div>

                <Link href="/auth/register">
                  <a className="text-primary text-center text-lg">
                    Create Account
                  </a>
                </Link>

                <input
                  className="py-3 px-4 text-lg capitalize hover:bg-primary/70 cursor  bg-primary text-white rounded-full"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </Container>
        <Toaster position="top-center" reverseOrder={false} />
      </div>

      <div className="h-screen hidden lg:block z-10 xl:w-[30vw] absolute top-0 right-0 bgGradient w-[35vw]"></div>
    </div>
  );
}

export default Login;
