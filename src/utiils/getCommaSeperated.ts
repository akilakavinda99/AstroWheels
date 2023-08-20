export const getCommaSeperated = (value: number | null) => {
  if (value !== null) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
