# Perrache

This library is a collection of little tools.

## Object

### Bubble Child

If you have an array of objects which have in one prop a collection of other objects (child) with this function it is possible to promote them (child) to first level objects and inherit few props from parent object.

```js

const startObj = [
    {station: "Part Dieu",
     id: 2,
     shops: [
        {name: "Paul"},
        {name: "Brioche Doree"}
    ]},
    {station: "Perrache",
     id: 3,
     shops: [
        {name: "Casino"},
        {name: "Boulanger"}
    ]}
]
```

```js
const res = bubbleChild(["station", "id"], "shops")(data)
```

You can use also the curried version

```js

const res = bubbleChild(["station", "id"])("shops")(data)
```
The result will be

```js

[
    {name: "Paul", station:"Part Dieu", id:2},
    {name: "Brioche Doree", station:"Part Dieu", id:2},
    {name: "Casino", station:"Perrache", id:3},
    {name: "Boulanger", station:"Perrache", id:3}
]

```

If you have only one father parameter to inject to child you can pass it like that

```js
const res = bubbleChild("station")("shops")(data)
```


