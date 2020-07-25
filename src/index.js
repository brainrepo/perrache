const R = require("ramda");

const createObjectFromFatherProp = R.curry((father, p) =>
  R.set(R.lensProp(p), R.propOr(null)(p)(father), {})
);

const importPropsFromFather = R.curry((father, props, element) => {
  const c = createObjectFromFatherProp(father);
  return {
    ...element,
    ...R.pipe(R.map(c), R.mergeAll)(props),
  };
});

const isArrayOrEmpty = (e) => (Array.isArray(e) ? e : []);

const flattenMultiple = (fatherProps, childrenProp) => {
  const fatherPropsClean = Array.isArray(fatherProps)
    ? fatherProps
    : [fatherProps];

  return R.pipe(
    R.map((o) =>
      R.map((e) => importPropsFromFather(o)(fatherPropsClean)(e))(
        isArrayOrEmpty(o[childrenProp])
      )
    ),
    R.flatten
  );
};

module.exports = R.curry(flattenMultiple);
