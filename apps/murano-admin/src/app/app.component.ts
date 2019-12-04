import { ChangeDetectionStrategy, Component } from '@angular/core';

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
}
