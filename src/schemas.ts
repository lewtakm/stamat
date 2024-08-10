import * as yup from "yup";

const schemas = {
  email: yup
    .string()
    .email("Wpisz poprawny adres email")
    .required("Wpisz adres e-mail."),
  password: yup
    .string()
    .min(8, "Hasło musi mieć minimum 8 znaków.")
    .matches(/[0-9]/, "Hasło musi zawierać numer.")
    .matches(/[a-z]/, "Hasło musi zawierać małe litery.")
    .matches(/[A-Z]/, "Hasło musi zawierać duże litery.")
    .required("Wpisz hasło."),
};

const { email, password } = schemas;

export const loginSchema = yup.object().shape({
  email,
  password: yup.string().required("Wpisz hasło."),
});

export const registrationSchema = yup.object().shape({
  email,
  password,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Hasła muszą być takie same. ")
    .required("Potwierdź hasło."),
  tos: yup
    .bool()
    .oneOf([true], "Musisz zaakceptować regulamin.")
    .required("Musisz zaakceptować regulamin."),
});
