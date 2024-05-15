import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyFormComponent } from './my-form/my-form.component';

export const routes: Routes = [
    { path:'sign-up', component: SignUpComponent },
    {path:'user-profile', component: UserProfileComponent},
    { path:'my-form', component: MyFormComponent },
    //{ path: '', redirectTo: '/sign-up', pathMatch: 'full' }
];
