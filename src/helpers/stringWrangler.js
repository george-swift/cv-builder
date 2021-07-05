const spaceCamel = (string) => string.slice().replace(/([a-z])([A-Z])/g, '$1 $2');

const camelCase = (string) => {
  const dup = string.slice();
  return dup[0].toLowerCase() + dup.slice(1);
};

const titleCase = (string) => {
  const dup = string.slice();
  return dup[0].toUpperCase() + dup.slice(1);
};

export {
  spaceCamel,
  camelCase,
  titleCase,
};
