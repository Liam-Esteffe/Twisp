import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, RouterLink, RouterOutlet, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import * as THREE from 'three';
import { FBXLoader, GLTFLoader } from 'three-stdlib';
import { RoughNotationModule } from 'ng-rough-notation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('rendererContainer', { static: false }) rendererContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  viewportScroller: any;
  public model!: THREE.Group<THREE.Object3DEventMap>;

  logos = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOqkdNRQwejiDu9V8aKB4ZXremil-gEXhFw&s',
    'https://www.ekoweb.fr/images/c/5/5/2/6/c55269ef775e6f324a9998ef26012cc05790e38c-sfdol.png',
    'https://www.pagesjaunes.fr/media/agc/eb/91/7c/00/00/54/99/d8/54/6b/632deb917c00005499d8546b/632deb917c00005499d8546c.png',
    'https://www.cliniquedelaplanche.com/img/m/332.jpg',
    'https://www.samplenco.com/wp-content/uploads/2020/06/logo-home-1-300x291.png',
    'https://cycleandpro.fr/wp-content/uploads/2024/02/Logo-Cycle-and-pro-quadri.png',
    'https://www.mokenvision.com/upload//stthemeeditor/5b0f54bb067f3f81aca1e8b2777abde6.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHMNU0F3ndui7jgeUQk7n6dZILO20fnP-RA&s',
    'https://www.lemenhir.com/img/m/8-manufacturer_default_2x.jpg',
    'https://exokit-van.com/wp-content/uploads/2022/03/exokit-logo-inline-white@2x.png',
    'https://hurricanesurf.net/wp-content/uploads/2021/11/HS-logo-white.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNiE56al9oQi-9Z7QFWJaPS-T7D8Or0c1w5nXMQqnHZ-ylmgwZ2XQ_Ibu-9zpNjYQdmk&usqp=CAU'

  ]; // Remplace par les chemins réels vers tes images.

  ngAfterViewInit(): void {
    this.init3DScene();
  }

  private init3DScene() {
    if (!this.rendererContainer) {
      console.error('Le conteneur de rendu n\'a pas été trouvé!');
      return;
    }

    if (window !== undefined) {
    // Créer la scène, la caméra et le rendu
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  
    // Ajouter l'élément du rendu au DOM
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
  
    // Ajouter de la lumière ambiante
    const light = new THREE.AmbientLight(0x404040); // lumière ambiante
    this.scene.add(light);
  
    // Ajouter de la lumière directionnelle
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // lumière blanche, intensité 1
    directionalLight.position.set(5, 5, 5); // Positionner la lumière (x, y, z)
    this.scene.add(directionalLight);
  
    // Optionnel : Ajouter une lumière directionnelle pour simuler le soleil
    const sunlight = new THREE.DirectionalLight(0xffffff, 1.5); // Intensité plus forte pour imiter le soleil
    sunlight.position.set(10, 10, 10); // Positionner le soleil
    this.scene.add(sunlight);
  
    // Charger le modèle GLTF
    const loader = new GLTFLoader();
    loader.load(
      'assets/bee_low_poly/scene.gltf',  // Assure-toi que ce chemin est correct
      (gltf) => {
        this.scene!.add(gltf.scene);  // Ajouter l'objet chargé à la scène
        console.log('Modèle GLTF chargé avec succès');
        this.scene.scale.set(0.4, 0.4, 0.4)
        this.model = gltf.scene;  // Sauvegarder l'objet pour y accéder plus tard
      },
      (xhr) => {
        console.log(`Chargement : ${(xhr.loaded / xhr.total) * 100}%`);
      },
      (error) => {
        console.error('Erreur de chargement du modèle GLTF :', error);
      }
    );
  
    // Positionner la caméra
    this.camera.position.z = 5;
  
    // Lancer l'animation de la scène
    this.animate();
  }
  
  }
  
  // Méthode d'animation
  private animate() {
    requestAnimationFrame(() => this.animate());
  
    // Appliquer la rotation à l'objet, si disponible
    if (this.model) {
      this.model.rotation.y += 0.001;  // Rotation lente autour de l'axe Y (vertical)
    }
  
    // Rendre la scène avec la caméra
    this.renderer.render(this.scene, this.camera);
  }

  private startRendering() {
    if (this.scene && this.camera && this.renderer) {
      const animate = () => {
        requestAnimationFrame(animate);
        this.renderer?.render(this.scene!, this.camera!);
      };
      animate();
    }
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
      description: 'Nous vous accompagnons et mettons en place votre site web sur-mesure pour vos activités et votre présence en ligne',
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
