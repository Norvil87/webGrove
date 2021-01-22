const obj1 = {
  id: 1,
  fn: function () {
    return this.id;
  },
};

const obj2 = {
  id: 2,
  fn: obj1.fn,
};

obj1.fn(); // 1
obj2.fn(); // 2

function createIdGenerator(generatorName) {
  let id = 0;

  return () => {
    return `${generatorName}_${id++}`;
  };
}

const nextDatasetId = createIdGenerator("dataset");
nextDatasetId(); // 1, 2, 3

const nextMetaId = createIdGenerator("meta");
nextMetaId(); // 1, 2, 3

// prefixer(prefix) => (content) => string // prefix + content
