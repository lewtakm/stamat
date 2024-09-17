export type OmitMongoDefaultValues<T> = Omit<
  T,
  "_id" | "createdAt" | "updatedAt"
>;

export type CommonInputProps = {
  errorMessage?: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  label?: string;
};
