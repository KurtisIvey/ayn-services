import config from "../config";

const generateMailtoLink = () => {
  const encodedSubject = encodeURIComponent("AYN Services inquiry");
  const encodedBody = encodeURIComponent(
    "Hello Scott, I'd like to inquire about"
  );
  const defaultBody = encodeURIComponent(
    "Hello Scott, I'd like to inquire about"
  );
  return `mailto:${config.email}?subject=${encodedSubject}&body=${
    encodedBody || defaultBody
  }`;
};

export default generateMailtoLink;
