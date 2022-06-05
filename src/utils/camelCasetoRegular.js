export let convertCamelToRegular = (camelCase) => {
  let convertedString = camelCase
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (x) => x.toUpperCase());

  return convertedString;
};
