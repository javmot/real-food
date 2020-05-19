export const getProps = (test) => (props) => {
  const next = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in props) {
    if (test(key || "")) next[key] = props[key];
  }
  return next;
};

const MRE = /^m[trblxy]?$/;

export const getMargin = getProps((k) => MRE.test(k));
export const omitMargin = getProps((k) => !MRE.test(k));
