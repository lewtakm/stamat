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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Hasła muszą być takie same. ")
    .required("Potwierdź hasło."),
  email,
  name: yup.string().required("Wpisz imie i nazwisko."),
  password,
});

export const exerciseSchema = yup.object().shape({
  category: yup.number().required("Kategoria jest wymagana."),
  exercise: yup
    .object()
    .shape({
      answer: yup.string().required("Odpowiedź jest wymagana."),
      points: yup
        .number()
        .positive("Liczba punktów musi być większa od zera.")
        .required("Maksymalna liczba punktów jest wymagana."),
      question: yup.string().required("Opis zadania jest wymagany."),
    })
    .required("Treść zadania jest wymagana."),
  level: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .required("Poziom jest wymagany."),
  subExercises: yup.array().of(
    yup.object().shape({
      answer: yup.string().required("Odpowiedź jest wymagana."),
      points: yup.number().required("Maksymalna liczba punktów jest wymagana."),
      question: yup.string().required("Opis zadania jest wymagany."),
    })
  ),
  videoSolution: yup.string(),
});
