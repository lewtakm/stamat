export const formatDate = (
  date: Date | string,
  locale: Intl.UnicodeBCP47LocaleIdentifier = "pl-PL",
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
    year: "numeric",
  }
) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString(locale, options);
};
