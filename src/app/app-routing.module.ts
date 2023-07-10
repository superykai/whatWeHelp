import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [{ path: '', redirectTo: '/Home', pathMatch:'full'},
                        {path:"Home", component: HomeComponent},
                        {path:"Shop", component: ShopComponent, data: {title:"Shop", navbar:false}},
                        {path:"Contact", component: ContactComponent},
                        {path:"About", component: AboutComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
