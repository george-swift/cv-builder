const spaceCamel = (string) => {
  const dup = string.slice();
  return dup.replace(/([a-z])([A-Z])/g, '$1 $2');
};

const camelCase = (string) => {
  const dup = string.slice();
  return dup[0].toLowerCase() + dup.slice(1);
};

export { spaceCamel, camelCase };
