import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClassifiedAdminService } from '../adminShared/classified-admin.service';
import { Classified } from '../adminShared/classified';

@Component({
    selector: 'add-menu',
    templateUrl: './classified-add.component.html',
})
export class ClassifiedAddComponent {
    
    imgTitle: string;
    imageSRC: string;
    classifiedTitle: string;
    content: string;
    classified: Classified;

    constructor(private classifiedAdminSVC: ClassifiedAdminService, private router: Router  ){}

    fileLoad($event: any) {
        let myReader:FileReader = new FileReader();
        let file:File = $event.target.files[0];
        this.imgTitle = file.name; 
        myReader.readAsDataURL(file);

        myReader.onload = (e: any) => {
            this.imageSRC = e.target.result;
        }

    }

    createClassified(){
        this.classified = new Classified (
            this.classifiedTitle,
            this.content, 
            this.imgTitle, 
            this.imageSRC.substring(23) 
        );
        this.classifiedAdminSVC.createClassified(this.classified);
        alert(`${this.classifiedTitle} added to classifieds`);
        this.router.navigate(['/admin']);
    }    

    cancel(){
        this.router.navigate(['/admin']);
    } 

}