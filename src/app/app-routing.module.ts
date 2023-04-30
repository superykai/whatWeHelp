import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{ path: '', redirectTo: '/Shop', pathMatch:'full'},
                        {path:"Shop", component: ShopComponent, data: {title:"Shop", navbar:false}},
                        {path:"About", component: AboutComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
