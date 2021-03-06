export const generateId = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + s4() + s4(); // Example => 'e014026082e6237b'
};

export const findIndexById = (list, id) => {
  var result = -1;
  list.forEach((list, index) => {
    if (list.id === id) {
      result = index;
    }
  });
  return result;
};
