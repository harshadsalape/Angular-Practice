import { Component } from '@angular/core';
@Component({
    selector: 'app-student',
    templateUrl: './student.component.html'
})
export class StudentComponent {
    list: Array<any> = [{
        id: 1,
        name: 'student 1',
        address: 'mumbai'
    }, {
        id: 2,
        name: 'student 2',
        address: 'Andheri'
    },{
        id: 3,
        name: 'student 3',
        address: 'mumbai'
    },{
        id:4,
        name: 'student 4',
        address: 'rochster'
    }]
}
