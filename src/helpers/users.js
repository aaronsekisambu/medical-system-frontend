import moment from "moment";
// change badge color based on status
export const getBadge = status => {
  return status === 0
    ? "secondary"
    : status === 1
    ? "success"
    : status === 2
    ? "warning"
    : status === "Banned"
    ? "danger"
    : "primary";
};

// change status to string
export const changeStatusToString = status => {
  switch (status) {
    case 0:
      return "Inactive";
    case 1:
      return "Active";
    case 2:
      return "Pending";
    case 3:
      return "Banned";
    default:
      return "No Status";
  }
};

// format time in a readable format
export const formatTimeAndDate = time_date => {
  const checkDate = new Date(time_date);
  return moment(checkDate).format("Do MMM, YYYY - hh : mm : ss a");
};

export const removeTimeFromDate = date => {
  const getDate = new Date(date);
  return moment(getDate).format("YYYY-MM-DD");
};

export const decode_token = token => {
  if (!token) {
    return;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};

export const avatarToText = names => names.match(/\b(\w)/g).join("");

export const calculateDiscount = (price, discount) =>
  Math.ceil(price - (discount / 100) * price);

export const calculateTotal = (discountedPrice, quantity) =>
  discountedPrice * quantity;

export const calculateSavings = (actualTotal, discountedTotal) =>
  actualTotal - discountedTotal;

export const convertTextToSlug = text =>
  text
    .toLowerCase()
    .split(" ")
    .join("-");
