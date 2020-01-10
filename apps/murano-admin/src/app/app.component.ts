// tslint:disable:no-any no-unsafe-any
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// tslint:disable-next-line:no-implicit-dependencies
import { DialogService } from '@vitaba/overlay-utils';
import * as Comlink from 'comlink';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { InstallMessageComponent } from './install-message/install-message.component';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public form = this._fBuilder.group({
    name: 'John Doe',
  });

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

  public constructor(
    private readonly _fBuilder: FormBuilder,
    private readonly _dialogService: DialogService) {
  }

  public async init() {
    const worker = new Worker('/assets/worker.js');
  // WebWorkers use `postMessage` and therefore work with Comlink.

    const workerFirestore: any = Comlink.wrap(worker);

    // alert(`Counter: ${await obj.counter}`);
    // await obj.inc();
    // alert(`Counter: ${await obj.counter}`);
    const obs = new Observable<any>(observer => {
      observer.next([]);
      observerDemo = observer;
      workerFirestore.initFirebase(environment.firebase);
      workerFirestore.
      addDocumentToSubCollection(
        'users', 'XXXX', 'hobbies', Comlink.proxy(hobbies => {
          observer['uid'] = hobbies.uid;
          observer.next(hobbies);
        }));
    });
    let observerDemo;

    obs.pipe(take(2))
    .subscribe(
      // tslint:disable-next-line: no-unbound-method
      console.warn,
      // tslint:disable-next-line: no-unbound-method
      console.error,
      () => {
        console.warn(
          'finish',
          workerFirestore.unsubscribe(observerDemo.uid)); });
  }

  public openModal() {
    const installModal = this._dialogService.open({
      component: InstallMessageComponent,
      data: { text: 'a' },
      options: {
        canClose: true,
        hasBackdrop: true,
        positionStrategy: {
          builder: 'global',
          value: {
            centerHorizontally: true,
            centerVertically: true,
          },
        },
        scrollStrategy: 'Block',
      },
    });

    if (installModal) {
      installModal.afterClosed.subscribe(data => {
        console.warn('Subscribe from the component', data);
      });
    }
  }
}
