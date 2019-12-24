import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-responsive-header',
  styleUrls: ['./responsive-header.component.scss'],
  templateUrl: './responsive-header.component.html',
})
export class ResponsiveHeaderComponent {
  @Input() public data = {
    title: 'Murano Admin',
  };
  public form = this._fBuilder.group({
    name: 'John Doe',
  });

  public constructor(private readonly _fBuilder: FormBuilder) {}
}
