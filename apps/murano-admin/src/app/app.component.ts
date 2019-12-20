import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as Comlink from 'comlink';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public avatarData = {
    date: '2019-11-26',
    image: {
      alt: 'Avatar de Sebastian',
      value: 'https://avatars3.githubusercontent.com/u/17608169?s=460&v=4',
    },
    name: 'Jhon Doe',
  };

  public headerData = {
    description: 'Sample Description',
    title: 'Sebastian',
  };

  public async init() {
    const worker = new Worker('/assets/worker.js');
  // WebWorkers use `postMessage` and therefore work with Comlink.
    const worker_firestore: any = Comlink.wrap(worker);

    // alert(`Counter: ${await obj.counter}`);
    // await obj.inc();
    // alert(`Counter: ${await obj.counter}`);
    const obs = Observable.create(observer => {
      observer.next([]);
      observerDemo = observer;
      worker_firestore.getCollection('restaurants', Comlink.proxy(restaurants => {
        console.log(restaurants);
        observer.uid = restaurants.uid;
        debugger;
        observer.next(restaurants);
      }));
    });
    let observerDemo;

    obs.pipe(take(2)).subscribe(console.warn, console.error, () => { console.log('finish', worker_firestore.unsubscribe(observerDemo.uid)); });
  }
}
