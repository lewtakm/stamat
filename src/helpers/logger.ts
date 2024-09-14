export const logger = (msg: string | unknown) => {
  if (typeof msg === "string") {
    console.log(msg);
  }

  console.error(msg);
};
