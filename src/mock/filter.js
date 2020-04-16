const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const generateFilters = () => {
  return filterNames.map((filter) => {
    return {
      title: filter,
      count: Math.floor(Math.random() * 10)
    };
  });
};

export {generateFilters};
