import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirektoriComponent } from './direktori/direktori.component';
import { ProfilComponent } from './profil/profil.component';
import { PetiMasukComponent } from './peti-masuk/peti-masuk.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'direktori', component: DirektoriComponent },
    { path: 'profil', component: ProfilComponent },
    { path: 'peti-masuk', component: PetiMasukComponent },
    { path: 'settings', component: SettingsComponent },
    
];
