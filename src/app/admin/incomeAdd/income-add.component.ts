import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeAdminService } from '../adminShared/income-admin.service';
import { Income } from '../adminShared/income';


@Component({
    selector: 'income-menu',
    templateUrl: './income-add.component.html',
})
export class IncomeAddComponent {

    date: string;
    weight: number;
    description: string;
    itemValue: number;
    income: Income;

    constructor( private incomeAdminSVC: IncomeAdminService, private router: Router  ){}



    createIncome(){
        this.income = new Income (
            this.date,
            this.description, 
            this.itemValue,
            this.weight,
            this.date
        );
        this.incomeAdminSVC.createIncome(this.income);
        alert(`${this.date} added to income`);
        this.router.navigate(['/admin']);
    }    

    cancel(){
        this.router.navigate(['/admin']);
    } 

}