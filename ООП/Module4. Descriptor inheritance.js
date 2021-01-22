const wolf = {
  howl: function () {
    console.log(this.name + ": awooooooo");
  },
};

const dog = Object.create(wofl, {
  bark: {
    value: function () {
      console.log(this.name + ": wooof");
    },
  },
});

function createDog(name) {
  return Object.create(dog, {
    name: { value: name },
  });
}

const vince = createDog("Vincent");
vince.howl();
vince.bark();

//  read about descriptors
