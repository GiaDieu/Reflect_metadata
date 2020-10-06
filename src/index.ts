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

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrrr");
  }
}

function get(path: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  // typeof Plane = constructor func
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key); // key == 'fly', 'secret' from metadata property
    console.log(path);
  }
}
