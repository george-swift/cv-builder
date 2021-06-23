const spaceCamel = (string) => {
  const dup = string.slice();
  return dup.replace(/([a-z])([A-Z])/g, '$1 $2');
};

const camelCase = (string) => {
  const dup = string.slice();
  return dup[0].toLowerCase() + dup.slice(1);
};

const titleCase = (string) => {
  const dup = string.slice();
  return dup[0].toUpperCase() + dup.slice(1);
};

const smartIcon = (action, addIcon, deleteIcon) => {
  if (action.match('Add')) return addIcon;
  if (action.match('Delete')) return deleteIcon;
  return null;
};

export {
  spaceCamel,
  camelCase,
  titleCase,
  smartIcon,
};
