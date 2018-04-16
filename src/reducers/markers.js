const markers = (state = {}, { data, type }) => {
  switch (type) {
    case 'SET_MARKERS':
      return data;
    default:
      return state;
  };
};

export default markers;