const sortByDate = (data) =>
  data.sort(({ date: a }, { date: b }) => (a < b ? -1 : a > b ? 1 : 0));

export { sortByDate };
