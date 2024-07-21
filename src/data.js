export const API_KEY = "AIzaSyBRO0gEK_PmKOwFC_hEZA2iDAJIv9f1Dqg";

export const value_convertor = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000000) + "K";
  } else {
    return value;
  }
};
