const Rx = require('rxjs/Rx');

let observer;
let o = Rx.Observable.create(_observer => {
    observer = _observer;
});
o.subscribe(result => console.log(result));

observer.next(20);
observer.next(40);
observer.complete();
