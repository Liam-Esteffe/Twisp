import { Routes } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import { DevelopersComponent } from './developers/developers.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { WebsiteComponent } from './website/website.component';
import { HerbergementComponent } from './herbergement/herbergement.component';
import { WypsComponent } from './wyps/wyps.component';
import { SeoComponent } from './seo/seo.component';

export const routes: Routes = [
  // Route par défaut qui pointe vers AppComponent
  { path: '', component: SandboxComponent, pathMatch: 'full' },

  { path: 'home', component: SandboxComponent, pathMatch: 'full' },

  { path: 'website', title:"Sites & Logiciel" ,component: WebsiteComponent },

  { path: 'wyps', title:"Wyps" ,component: WypsComponent },

  { path: 'seo', title:"Seo & Référencement" ,component: SeoComponent },

  { path: 'server', title:"Serveur & Hébergement" ,component: HerbergementComponent },

  // Route pour la politique de confidentialité
  { path: 'policy', component: PolicyComponent },

  { path: 'sand', component: SandboxComponent },

  // Route pour la section développeurs
  { path: 'developers', component: DevelopersComponent },

  // Redirection pour les routes non reconnues (erreur 404)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];