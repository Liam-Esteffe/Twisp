import { Routes } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import { DevelopersComponent } from './developers/developers.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  // Route par défaut qui pointe vers AppComponent
  { path: '', component: HomeComponent, pathMatch: 'full' },

  // Route pour la politique de confidentialité
  { path: 'policy', component: PolicyComponent },

  // Route pour la section développeurs
  { path: 'developers', component: DevelopersComponent },

  // Redirection pour les routes non reconnues (erreur 404)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];