import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TestFilter1Component} from '../elements/test-filter-1/test-filter-1.component';
import {TestFilter2Component} from '../elements/test-filter-2/test-filter-2.component';
import {MatLabel} from '@angular/material/form-field';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, TestFilter1Component, TestFilter2Component, MatLabel, MatIconButton, MatIcon, MatButton],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

}
