const Gif = require("./Gif");
const seedData = require("./seeds.json");

Gif.remove({})
  .then(() => {
    return Gif.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
