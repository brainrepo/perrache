const R = require("ramda");

const injectFatherProps = (father, props) => {
  const invertedProps = R.invertObj(props)
  const mappedProps = R.mapObjIndexed((v,k) => father[v])(invertedProps)
  return mappedProps;
};

const bubbleChild = R.curry(
  (maps, childProp, data) => 
    R.pipe(
      R.map((x) =>
        R.map((y) => ({ ...y, ...injectFatherProps(x, maps) }))(x[childProp])
      ),
      R.flatten
    )(data) 
);

module.exports = bubbleChild;
