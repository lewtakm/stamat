"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/routes";
import { register as registerUser } from "@/actions/register";
import { registrationSchema } from "@/schemas";
import { yupResolver } from "@hookform/resolvers/yup";

type RegisterInputs = {
  email: string;
  password: string;
  confirmPassword: string;
  tos: boolean;
};

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<RegisterInputs>({ resolver: yupResolver(registrationSchema) });

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    const { email, password } = data;

    const response = await registerUser({
      email,
      password,
    });
    if (response?.error) {
      setError("email", { message: response.error.email });
      return;
    } else {
      reset();
      return router.push(ROUTES.login);
    }
  };

  return <>Register</>;
};

export default Register;
