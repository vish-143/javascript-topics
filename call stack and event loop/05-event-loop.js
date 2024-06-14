console.log("start");

setTimeout(() => {
  console.log("Bye");
}, 0);

// microtask
Promise.resolve().then(() => {
    console.log("Promise");
  });

console.log("end");
