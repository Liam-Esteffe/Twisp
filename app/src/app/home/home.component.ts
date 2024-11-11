import { Component } from '@angular/core';
import { NavigationEnd, RouterLink, RouterOutlet, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private viewportScroller: ViewportScroller, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Scroll vers le haut à chaque navigation
        this.scrollToTop();
      }
    });
  }


  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  scrollToPosition(x: number, y: number): void {
    // Utilisé pour scroller vers une position spécifique
    this.viewportScroller.scrollToPosition([x, y]);
  }

  scrollToAnchor(anchorId: string): void {
    // Utilisé pour scroller vers un ancre spécifique
    this.viewportScroller.scrollToAnchor(anchorId);
  }

  services: Service[] = [
    {
      id: 1,
      title: 'Création de Sites Web',
      description: 'Des sites modernes, optimisés et responsives pour améliorer votre présence en ligne.',
      icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/website-3d-icon-download-in-png-blend-fbx-gltf-file-formats--internet-web-network-search-communication-user-interface-pack-icons-4991252.png?f=webp',
      details: 'Nous concevons des sites web sur mesure, adaptés à vos besoins spécifiques, en utilisant les dernières technologies pour garantir performance et sécurité.',
      pricing: 'À partir de 1500€',
      plans: [
        { name: 'Starter', description: 'Site vitrine simple, jusqu\'à 5 pages', price: '1500€' },
        { name: 'Pro', description: 'Site dynamique avec CMS, jusqu\'à 10 pages', price: '3000€' },
        { name: 'Entreprise', description: 'Site sur mesure avec fonctionnalités avancées', price: '5000€+' }
      ],
      benefits: [
        'Design responsive et moderne',
        'Optimisé pour le SEO',
        'Maintenance et support inclus pour 1 an'
      ]
    },
    {
      id: 2,
      title: 'Développement d\'Applications',
      description: 'Des applications sur mesure pour répondre aux besoins spécifiques de votre business.',
      icon: 'https://static.vecteezy.com/system/resources/previews/012/421/748/non_2x/3d-smartphone-icon-free-png.png',
      details: 'Nous développons des applications intuitives, efficaces et sécurisées, adaptées à toutes les plateformes.',
      pricing: 'À partir de 2500€',
      plans: [
        { name: 'Basique', description: 'Application simple pour un usage spécifique', price: '2500€' },
        { name: 'Standard', description: 'Application multi-plateformes avec fonctionnalités courantes', price: '5000€' },
        { name: 'Premium', description: 'Application sur mesure avec intégrations avancées', price: '8000€+' }
      ],
      benefits: [
        'Interface utilisateur intuitive',
        'Déploiement multi-plateformes (iOS, Android)',
        'Mises à jour et support technique inclus'
      ]
    },
    {
      id: 3,
      title: 'SEO & Référencement',
      description: 'Optimisez votre visibilité et attirez plus de clients grâce à notre expertise en SEO.',
      icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/seo-process-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--performance-strategy-marketing-web-pack-illustrations-4674327.png?f=webp',
      details: 'Notre équipe améliore votre positionnement sur les moteurs de recherche pour attirer plus de trafic qualifié.',
      pricing: 'À partir de 1000€',
      plans: [
        { name: 'Audit SEO', description: 'Analyse complète de votre site et recommandations', price: '1000€' },
        { name: 'Optimisation', description: 'Optimisation technique et sémantique pour le SEO', price: '2000€' },
        { name: 'Suivi Mensuel', description: 'Suivi SEO et ajustements pour maintien du positionnement', price: '500€/mois' }
      ],
      benefits: [
        'Audit complet de votre site',
        'Amélioration de la visibilité dans les moteurs de recherche',
        'Rapports mensuels de performance'
      ]
    },
    {
      id: 4,
      title: 'Gestion de Serveurs',
      description: 'Hébergement et maintenance de vos infrastructures pour une performance optimale.',
      icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/server-3d-icon-download-in-png-blend-fbx-gltf-file-formats--data-center-storage-database-alt-cloud-and-web-pack-seo-icons-4652677.png?f=webp',
      details: 'Nous gérons vos serveurs pour assurer leur sécurité, disponibilité et performance en continu.',
      pricing: 'Sur devis',
      plans: [
        { name: 'Standard', description: 'Maintenance et surveillance basique de serveurs', price: '200€/mois' },
        { name: 'Avancé', description: 'Sécurité et optimisation avancée, sauvegardes régulières', price: '500€/mois' },
        { name: 'Entreprise', description: 'Gestion complète avec SLA et support 24/7', price: '1000€/mois' }
      ],
      benefits: [
        'Maintenance proactive des serveurs',
        'Surveillance 24/7 et alertes automatiques',
        'Sécurité renforcée avec sauvegardes et récupération de données'
      ]
    }
  ];

  selectedService: Service | null = null;

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ekow Solution',
      message: 'Excellent service ! Mon site web est plus rapide et attractif que jamais.',
      date: 'Aujourd\'hui, 14:32'
    },
    {
      id: 2,
      name: 'Utilisateur Inconnu',
      message: 'Grâce à leur expertise en SEO, notre trafic a doublé en moins de 3 mois.',
      date: 'Hier, 09:14'
    },
    {
      id: 3,
      name: 'Utilisateur Inconnu',
      message: 'L’application mobile développée par l’équipe est d’une grande fluidité et intuitivité.',
      date: 'Il y a 3 jours, 16:20'
    },
    // Ajoutez d'autres témoignages ici
  ];
  showNewsletterBox = true;

  closeNewsletterBox() {
    this.showNewsletterBox = false;
  }
  selectService(service: Service) {
    this.selectedService = this.selectedService === service ? null : service;
  }
}


interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string;
  plans: Array<any>;
  benefits: Array<string>;
  pricing: string;
}

interface Testimonial {
  id: number;
  name: string;
  message: string;
  date: string;
}
