import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Income } from '../adminShared/income';

@Injectable()

export class IncomeAdminService {

    createIncome(income: Income){
        let storageRef = firebase.storage().ref();

                let dbRef = firebase.database().ref('incomes/');
                let newIncome = dbRef.push();
                newIncome.set ({
                    name: income.date,
                    description: income.description,
                    weight: income.weight,
                    itemValue: income.itemValue,
                    id: newIncome.key
                });
                alert('added the entry!');
    }

    editIncome(update: Income){
        let dbRef = firebase.database().ref('incomes/').child(update.id)
            .update({
                name: update.date,
                description: update.description,
                weight: update.weight,
                itemValue: update.itemValue,
            });
        alert('income updated');
    }

    removeIncome(deleteIncome: Income){
        let dbRef = firebase.database().ref('incomes/').child(deleteIncome.id).remove();
        alert('income deleted');
    }


}