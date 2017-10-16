import { LoggedInGuard } from './security/loggedin.guard';
import { LoginComponent } from './security/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderComponent } from './order/order.component';
import { Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';



export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'login/:to', component: LoginComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children : [
            {path : '', redirectTo: 'menu', pathMatch: 'full'},
            {path : 'menu', component : MenuComponent},
            {path : 'reviews', component: ReviewsComponent}
        ]
    },
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'order', loadChildren: './order/order.module#OrderModule', 
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
    {path: '**', component: NotFoundComponent}
    
]