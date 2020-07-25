const assert = require("assert");
const bubbleChild = require("../src/index");

const data = [
  {
    data: [{ id: 1, zolla:56 }, { id: 2 }],
    categoria: "nuoro",
    miao: "pippo",
    sss: "www",
  },
  {
    data: [{ id: 3 }, { id: 4 }],
    categoria: "olbia",
    miao: "pluto",
    suca: "dads",
  },
];

const dataConverted = [
  {
    categoria: "nuoro",
    id: 1,
    sss: "www",
    zolla:56
  },
  {
    categoria: "nuoro",
    id: 2,
    sss: "www",
  },
  {
    categoria: "olbia",
    id: 3,
    sss: null,
  },
  {
    categoria: "olbia",
    id: 4,
    sss: null,
  },
];


describe("Objects", function () {
  describe("#bubbleChild", function () {
    it("should emerge by parent props", function () {
      assert.deepEqual(
        bubbleChild(["categoria", "sss"], "data")(data),
        dataConverted
      );
    });
    it("it should be called curried", function () {
      assert.deepEqual(
        bubbleChild(["categoria", "sss"])("data")(data),
        dataConverted
      );
    });
  });
});
