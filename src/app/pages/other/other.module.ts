import {NgModule} from '@angular/core';
import {OtherComponent} from './other.component';
import {RouterModule, Routes} from '@angular/router';
import { CaptainComponent } from './captain/captain.component';
import { BabyComponent } from './baby/baby.component';
import {HeaderModule} from '../../common/header/header.module';
import {BrowserModule} from '@angular/platform-browser';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'captain',
        pathMatch: 'full'
    },
    {
        path: '',
        component: OtherComponent,
        children: [
            {
                path: 'captain',
                component: CaptainComponent
            },
            {
                path: 'baby',
                component: BabyComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        OtherComponent,
        CaptainComponent,
        BabyComponent
    ],
    imports: [
        HeaderModule,
        RouterModule.forChild(routes)
    ]
})
export class OtherModule {
}
