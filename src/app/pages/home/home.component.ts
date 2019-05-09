import {Component, OnInit} from '@angular/core';
declare var require: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    // fs = require('fs');

    constructor() {
    }

    ngOnInit() {
        Fs.con('我终于学会了在angular2+中使用js文件了', '但是你会使用fs模块吗？');
    }

}
