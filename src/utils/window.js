// detect is mobile
function detectMobile() {
  let windowMaxWidth = window.innerWidth <= 414;
  let windowMaxHeight = window.innerHeight <= 812;
  let isMobileDevice =
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    (windowMaxHeight && windowMaxWidth);

  // Check if is mobile devices
  if (isMobileDevice) {
    return true
  }

  return false;
}

export default detectMobile;
