// TASK DESCRIPTION
// Your goal is to write an Event constructor function, which can be
// used to make event objects.
//
//   An event object should work like this:
//
// it has a .subscribe() method, which takes a function and stores
// it as its handler
// it has an .unsubscribe() method, which takes a function and removes
// it from its handlers
// it has an .emit() method, which takes an arbitrary number of arguments
// and calls
// all the stored functions with these arguments
// As this is an elementary example of events, there are some
// simplifications:
//
//   all functions are called with correct arguments (e.g. only
//   functions will be passed to unsubscribe)
// you should not worry about the order of handlers' execution
// the handlers will not attempt to modify an event object (e.g.
// add or remove handlers)
// the context of handlers' execution is not important
// each handler will be subscribed at most once at any given moment
// of time. It can still
// be unsubscribed and then subscribed again
// Also see an example test fixture for suggested usage

function Event() {
  this.handlerFunction = []

  this.subscribe = function (fn) {
    if (!this.handlerFunction.includes(fn)) {
      Object.keys(fn).forEach(function (key) {
        console.log('no such a function')
        delete fn[key];
      })
    }
    this.handlerFunction.push(fn)
  }
  this.unsubscribe = function (fn) {
    this.handlerFunction = this.handlerFunction.filter((item) => item.name !== fn.name);
  }
  this.emit = function (...args) {
    for (let i = 0; i < this.handlerFunction.length; i++) {
      this.handlerFunction[i](...args)
      // console.log(arguments)
    }
  }
}

//TESTS are BELOW

// var event = new Event();
//
// function f() {
//   f.calls = (f.calls || 0) + 1;
//   f.args = Array.prototype.slice.call(arguments);
//   console.log(f.args)
// }
//
// event.subscribe(f);
// event.emit(1, 'foo', true);

