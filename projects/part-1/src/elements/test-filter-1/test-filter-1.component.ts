import {ChangeDetectionStrategy, Component, Input, input} from '@angular/core';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-test-filter-1',
  standalone: true,
    imports: [
        MatIconButton
    ],
  templateUrl: './test-filter-1.component.html',
  styleUrl: './test-filter-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestFilter1Component {
  @Input()
  public title: string = '';
}
