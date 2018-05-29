import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html'
})
export class DetailsComponent {

    list: Array<any> = [{
        id: 1,
        name: 'student 1',
        address: 'mumbai'
    }, {
        id: 2,
        name: 'student 2',
        address: 'Andheri'
    }, {
        id: 3,
        name: 'student 3',
        address: 'mumbai'
    },{
        id:4,
        name: 'student 4',
        address: 'rochster'
    }];

    details: any={};
    constructor(private _router: Router, private _activated: ActivatedRoute) {
        debugger;
        this._activated.params.subscribe(param => {
            debugger;
            //this.details = this.list.filter(item => item.id == param['id'])[0];
        });
    }

    save(form){
        if(form.valid){
            //todo for save
            this._router.navigate(['/student']);
        }
     
    }
}
