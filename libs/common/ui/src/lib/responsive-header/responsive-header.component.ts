import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'vitaba-responsive-header',
  templateUrl: './responsive-header.component.html',
  styleUrls: ['./responsive-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsiveHeaderComponent implements OnInit {
  public constructor() { }

  public ngOnInit() {
  }
}
