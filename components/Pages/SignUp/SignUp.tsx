import React, { useEffect, useRef, useState } from "react";
import Container from "../../../Layout/Container";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
// redux
import { loginUser, logUserName } from "../authslices/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase-config";
import { RootState } from "../../../base/stores/store";

interface IFormInput {
  userName: string;
  email: string;
  password: string;
}

function SignUp() {
  const router = useRouter();

  const isLoginDetail = useSelector((state: RootState) => state.user.login);
  const islogedIn = useSelector((state: RootState) => state.user.isLogin);
  const dispatch = useDispatch();

  function handleChange(user: any) {
    dispatch(logUserName(user));
  }

  const [user, setUser] = useState<any>({});

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
      handleChange(user?.email);
      dispatch(loginUser());
      console.log(islogedIn);
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const handSignUp = async (data: any, e: any) => {
    if (data) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        toast.success(`Welcome, You have successfully Registered`);
        dispatch(loginUser());
        setTimeout(() => router.push("/"), 2500);
      } catch (error: any) {
        toast.error(error.message);
      }
      e.target.reset();
      // setTimeout(() => window.location.reload(), 2500);
    }
  };

  return (
    <div className="h-screen bg-white  w-full">
      <div className="h-screen pt-[200px] ">
        <Container>
          <div className="lg:ml-[200px] ">
            <h2 className="text-primary text-center lg:text-left text-4xl font-medium uppercase">
              Register
            </h2>
            <p className="text-textColor text-lg mt-2">
              Welcome, Enjoy more from use by registering
            </p>
            {/* 
            <p className="text-textColor text-lg mt-2">{isLoginDetail}</p>
            <p className="text-textColor text-lg mt-2">{user.email}</p> */}
            <div className="mt-12 md:max-w-md w-full  mx-auto bg-white border rounde-xl shadow-md p-6 inline-block">
              <form
                onSubmit={handleSubmit(handSignUp)}
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
                      maxLength: 20,
                      minLength: 4,
                    })}
                    className="rounded-full w-full border px-4 py-3 focus:border-primary outline-none "
                    placeholder="Password"
                  />
                </div>

                <Link href="/auth/login">
                  <a className="text-primary text-center text-lg">
                    Already Registered. Login
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

export default SignUp;

{
  /* <div className="space-y-2">
                  <label htmlFor="">Username</label>
                  <p className="text-red-500 text-lg text-left mb-3">
                    {errors.userName?.message}
                  </p>
                  <input
                    {...register("userName", {
                      required: "Username required",
                      minLength: 5,
                    })}
                    className="rounded-full w-full border px-4 py-3 focus:border-primary outline-none "
                    placeholder=" Username "
                  />
                </div> */
}
