"use client";
import { useRouter } from "next/navigation";
import { register as registerUser } from "@/actions/register";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Checkbox,
} from "@nextui-org/react";
import { Link } from "@/components";
import { useForm, SubmitHandler } from "react-hook-form";
import { ROUTES } from "@/routes";
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

  return (
    <>
      <CardHeader>
        <h1 className="mb-5 w-full text-2xl font-bold">Stwórz konto</h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between items-center gap-4"
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

          <Input
            type="password"
            label="Powtórz hasło"
            isRequired
            labelPlacement="outside"
            placeholder="Wpisz hasło ponownie"
            autoComplete="password"
            isInvalid={Boolean(errors.confirmPassword)}
            errorMessage={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />
          <Checkbox
            isRequired
            isInvalid={Boolean(errors.tos)}
            className="w-full max-w-full"
            {...register("tos")}
          >
            Akceptuje <Link href="#">regulamin</Link> oraz{" "}
            <Link href="#">polityke prywatności</Link>.
          </Checkbox>
          <Button type="submit" color="primary" className="w-full">
            Stwórz konto
          </Button>
        </form>
      </CardBody>

      <CardFooter>
        <Link href={ROUTES.login}>Masz już konto? Zaloguj się.</Link>
      </CardFooter>
    </>
  );
};

export default Register;
