import "reflect-metadata";

// const plane = {
//   color: "red",
// };

// Reflect.defineMetadata("note", "Hi There", plane);
// Reflect.defineMetadata("height", 10, plane);
// const note = Reflect.getMetadata("note", plane);
// const height = Reflect.getMetadata("height", plane);
// console.log(height);

// console.log(note);

// Reflect.defineMetadata("note", "hi There!", plane, "color");
// const note = Reflect.getMetadata("note", plane, "color");
// console.log(note);

// apply Reflect in TypeScript class

@printMetadata
class Plane {
  color: string = "red";

  @markFunc("Hi There")
  fly(): void {
    console.log("vrrrrr");
  }
}

function markFunc(secretInfo: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  // typeof Plane = constructor func
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key); // key == 'fly', 'secret' from metadata property
    console.log(secret);
  }
}
