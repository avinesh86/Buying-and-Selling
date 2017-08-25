import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AdminComponent } from './adminComponent/admin.component';
import { AdminMenuComponent }  from './adminMenu/admin-menu.component';
import { LoginComponent }    from './login/login.component';
import { SignUpComponent }    from './signUp/sign-up.component';

import { UserService } from './adminShared/user.service';
import { ClassifiedAdminService } from './adminShared/classified-admin.service';

import { ClassifiedAdminComponent }    from './classifiedAdmin/classified-admin.component';
import { ClassifiedAddComponent }    from './classifiedAdd/classified-add.component';

import { TruncatePipe } from './adminShared/trunc.pipe';

import { ProductAdminService } from './adminShared/product-admin.service';
import { ProductAdminComponent }    from './productAdmin/product-admin.component';
import { ProductAddComponent }    from './productAdd/product-add.component';

const AdminRoutes: Routes = [
    { 
        path: 'admin',  
        component: AdminComponent, 
        children: [
            { path: 'product-admin', component: ProductAdminComponent, canActivate: [UserService] },
            { path: 'classified-admin', component: ClassifiedAdminComponent, canActivate: [UserService] },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
            { path: '', component: AdminMenuComponent, canActivate: [UserService] }
        ]
    },
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(AdminRoutes)
    ],
    exports: [
        RouterModule,
        TruncatePipe
    ],
    declarations: [
        AdminComponent,
        AdminMenuComponent,
        LoginComponent,
        SignUpComponent,
        ClassifiedAdminComponent,
        ClassifiedAddComponent,
        TruncatePipe,
        ProductAdminComponent,
		ProductAddComponent
    ],
    providers: [
        UserService,
        ClassifiedAdminService,
        ProductAdminService
    ]
})
export class AdminModule {}

