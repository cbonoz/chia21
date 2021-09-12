export const BASE_URL = window.location.origin;

export const APP_NAME = "Chiaspace";

export const DEMO_ADDRESS =
  "txch1slr0k27axjnhv2slnj8s4ddy079kcn2het0yeld86fpyryqdrfmsdej8c9";
export const DEMO_HASH =
  "0x36b520fd8f949a8a7466eb103b1dfadd4caf71c384533026d4ca18c2e59982c5";

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const formatRecord = (key, record) => {
  if (key === "date") {
    return new Date(record).getLocaleDateString();
  }
  return isNaN(record) || record > 10000000
    ? record
    : Math.round(record * 100) / 100;
};

export function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}

export const getCheckoutUrl = (cid) => `${BASE_URL}/pages/${cid}`;

export const getIpfsUrl = (cid) => `https://ipfs.io/ipfs/${cid}`;
