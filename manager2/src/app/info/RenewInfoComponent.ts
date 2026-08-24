import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css'],
    standalone: false
})
export class RenewInfoComponent implements OnInit {
    msg: string;
    constructor() {
        this.msg = 'Account validity period has been extended.';
    }
    ngOnInit() {}
}
