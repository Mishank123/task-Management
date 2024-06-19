import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'weather', component: WeatherInfoComponent },
  { path: 'add-task', component: TaskFormComponent },
  { path: 'add-task/:id', component: TaskFormComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
