import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from './header.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {
}
