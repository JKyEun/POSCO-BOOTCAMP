const sayHello = () => {
  console.log(this);
}

const boy = {
  name: "Mike",
  sayHello
}

boy.sayHello();