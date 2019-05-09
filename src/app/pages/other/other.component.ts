import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-other',
    templateUrl: './other.component.html',
    styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

    menus = [
        {title: 'captain', link: '/other/captain'},
        {title: 'baby', link: '/other/baby'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
