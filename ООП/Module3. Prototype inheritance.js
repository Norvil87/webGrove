// function inherit(proto) {
//   function ChainLink() {}
//   ChainLink.prototype = proto;
//   return new ChainLink();
// }

function Wolf(name) {
  this.name = name;
}

Wolf.prototype.howl = function () {
  console.log(this.name + ": awooo");
};

function Dog(name) {
  Wolf.call(this, name + " the dog");
}

// Dog.prototype = inherit(Wolf.prototype);
Dog.prototype = Object.create(Wolf.prototype);

Dog.prototype.bark = function () {
  console.log(this.name + ": woof");
};

Object.setPrototypeOf(Dog, Wolf);

const vince = new Dog("Vincent");
vince.howl();
vince.bark();

// leopard => { hsss }
// lynx => { prrr }
// cat => { meow }
