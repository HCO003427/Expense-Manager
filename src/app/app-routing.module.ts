import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { IncomeComponent } from './income/income.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginCheck } from './guards/login.guard';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [LoginCheck]
    },
    {
        path: 'expenses',
        component: ExpensesComponent,
        canActivate: [LoginCheck]
    },
    {
        path: 'income',
        component: IncomeComponent,
        canActivate: [LoginCheck]
    },
    {
        path: 'addTransaction',
        component: AddTransactionComponent,
        canActivate: [LoginCheck]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
