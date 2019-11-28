/**
 * Only number
 * @param {*} number
 */
const isPhoneNumber = number => {
  return number.replace(/\D/g, "");
};

/**
 * Only email
 * @param {*} email
 */
const isEmail = email => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export { isPhoneNumber, isEmail };
