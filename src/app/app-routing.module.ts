import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'team', component:TeamComponent},
  {path:'testimonials', component:TestimonialsComponent},
  {path:'services', component:ServicesComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'pricing', component:PricingComponent},
  {path:'blog', component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
