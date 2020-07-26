const assert = require("assert");
const { bubbleChild } = require("../src/index");

console.log(bubbleChild);

const data = [
  {
    station: "Part Dieu",
    id: 2,
    shops: [
      { name: "Paul", id: "s1" },
      { name: "Brioche Doree", id: "s2" },
    ],
  },
  {
    station: "Perrache",
    id: 3,
    shops: [
      { name: "Casino", id: "s3" },
      { name: "Boulanger", id: "s4" },
    ],
  },
];

const dataConverted1 = [
  { name: "Paul", station_name: "Part Dieu", id: "s1", station_id: "2" },
  { name: "Brioche Doree", station_name: "Part Dieu", id: "s2", station_id: "2" },
  { name: "Casino", station_name: "Perrache", id: "s3", station_id: "3" },
  { name: "Boulanger", station_name: "Perrache", id: "s4", station_id: "3" },
];

const conversionSetup1 = { station: "station_name", id: "station_id" }


describe("Objects", function () {
  describe("#bubbleChild", function () {
    it("should bubble", function () {
      assert.deepEqual(
        bubbleChild(conversionSetup1, "shops", data),
        dataConverted1
      );
    });

    it("should be curried", function () {
      assert.deepEqual(
        bubbleChild(conversionSetup1)("shops")(data),
        dataConverted1
      );
    });
  });
});
