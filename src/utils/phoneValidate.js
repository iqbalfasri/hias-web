/**
 * Only number
 * @param {*} number
 */
const isPhoneNumber = number => {
  return number.replace(/\D/g, "");
};

export default isPhoneNumber;
