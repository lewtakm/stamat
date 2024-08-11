"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@/components";
import { ROUTES } from "@/routes";
import { loginSchema } from "@/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

type LoginInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver: yupResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const { email, password } = data;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log("res?.status", res?.status);
    if (res?.error) {
      setError(res.error as string);
    }

    if (res?.status === 401) {
      setError("Błedne dane logowania.");
      return;
    }

    if (res?.ok) {
      return router.push(ROUTES.user);
    }
  };

  return (
    <>
      <CardHeader>
        <h1 className="mb-5 w-full text-2xl font-bold">Zaloguj</h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <form
          className="flex flex-col justify-between items-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            isRequired
            type="email"
            label="E-mail"
            labelPlacement="outside"
            placeholder="Wpisz adres e-mail"
            autoComplete="email"
            isInvalid={Boolean(errors.email)}
            errorMessage={errors.email?.message}
            {...register("email")}
          />
          <Input
            isRequired
            type="password"
            label="Hasło"
            labelPlacement="outside"
            placeholder="Wpisz hasło"
            autoComplete="password"
            isInvalid={Boolean(errors.password)}
            errorMessage={errors.password?.message}
            {...register("password")}
          />

          <Button type="submit" color="primary">
            Zaloguj
          </Button>
        </form>
      </CardBody>
      <CardFooter>
        <Link href={ROUTES.register}>Nie masz konta? Zarejestruj się.</Link>
      </CardFooter>
    </>
  );
};

export default Login;
