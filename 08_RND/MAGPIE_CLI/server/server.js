const SERVER = {};
console.log("hello");
SERVER.start = function () {
  this.last = Date.now();
  this.delta = () => {
    return Math.floor((Date.now() - this.last) / 10);
  };
  this.count = 0;
  this.loop = setInterval(() => {
    while (this.delta() > 0) {
      console.log("catch up");
      this.refresh();
    }
    this.refresh();
  }, 10);
};

SERVER.refresh = function refresh() {
  this.count++;
  this.last += 10;
  console.clear();
  console.log(
    `count: ${this.count}\ndelta: ${this.delta()}\n` + `now: ${Date.now()}`,
  );
};

SERVER.start();
