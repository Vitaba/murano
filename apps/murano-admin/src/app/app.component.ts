// tslint:disable:no-any no-unsafe-any
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public form: FormGroup;

  public formErrors = {
    email: () => `Provide a valid email`,
    maxlength: ({
      requiredLength,
      actualLength,
    }: {
      requiredLength: number;
      actualLength: number;
    }) => `Expect ${requiredLength} but got ${actualLength}`,
    minlength: ({
      requiredLength,
      actualLength,
    }: {
      requiredLength: number;
      actualLength: number;
    }) => `Expect ${requiredLength} but got ${actualLength}`,
    required: (_error: any) => `This field is required`,
  };

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
    this.form = this._fBuilder.group({
      name: 'John Doe',
      value: [{ value: '', disabled: false }, Validators.maxLength(1)],
    });
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
      filterSubCollectionByField(
        'users', 'XXXX', 'hobbies', 'name', 'a', 2, Comlink.proxy(hobbies => {
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

  public onSubmit({ valid, value }: { valid: boolean; value: any}) {
    console.warn(valid, value);
  }

  public change(e) {
    console.warn(e);
  }
}
