function wolf(name) {
  const howl = () => {
    help();
    console.log(name + ": awoooo");
  };

  const help = () => {};

  return {
    howl,
  };
}

function dog(name) {
  const bark = () => {
    console.log(name + ": woof");
  };

  return {
    ...wolf(name),
    bark,
  };
}

const vince = dog("Vincent");
vince.howl();
vince.bark();
