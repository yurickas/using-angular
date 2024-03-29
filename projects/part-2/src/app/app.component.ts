import {Component, signal, WritableSignal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UnionTypeToStyleKebab, UnionTypeToValue} from './types';
import {NgStyle} from '@angular/common';


type TextStylePropertyType =
    | 'fontWeight'
    | 'color'
    | 'fontFamily'
    | 'fontSize'
    | 'textDecoration'
    | 'letterSpacing'
    | 'lineHeight'
    | 'textAlign'
    | 'fontStyle'
    | 'borderRadius';

type TextPixelProperty =
    | 'fontSize'
    | 'letterSpacing'
    | 'lineHeight'
    | 'borderRadius';

const textStyle: UnionTypeToValue<TextStylePropertyType> = {
    fontWeight: 400,
    color: '#00000',
    fontFamily: 'Muli',
    fontSize: 16,
    textDecoration: 'none',
    letterSpacing: 'normal',
    lineHeight: 'normal',
    textAlign: 'left',
    fontStyle: 'none',
    borderRadius: 0,
};

const textProperty: UnionTypeToStyleKebab<TextStylePropertyType, TextPixelProperty> = {
    fontWeight: 'font-weight',
    fontStyle: 'font-style',
    color: 'color',
    textDecoration: 'text-decoration',
    fontFamily: 'font-family',
    textAlign: 'text-align',
    fontSize: 'font-size.px',
    letterSpacing: 'letter-spacing.px',
    lineHeight: 'line-height.px',
    borderRadius: 'border-radius.px',
};

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgStyle],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    public style: WritableSignal<any> = signal(Object.keys(textStyle).reduce((acc, key) => {
        acc[textProperty[key]] = textStyle[key];

        return acc;
    }, {}));

}
