# Perrache

This library is a collection of little tools.

## Object

### Bubble Child

If you have an array of objects which have in one prop a collection of other objects (child) with this function it is possible to promote them (child) to first level objects and inherit few props from parent object.

```js

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
```

```js
const res = bubbleChild({ station: "station_name", id: "station_id" }, "shops", data)
```

You can use also the curried version

```js

const res = bubbleChild({ station: "station_name", id: "station_id" })("shops")(data)
```
The result will be

```js

[
  { name: "Paul", station_name: "Part Dieu", id: "s1", station_id: "2" },
  { name: "Brioche Doree", station_name: "Part Dieu", id: "s2", station_id: "2" },
  { name: "Casino", station_name: "Perrache", id: "s3", station_id: "3" },
  { name: "Boulanger", station_name: "Perrache", id: "s4", station_id: "3" },
];

```
