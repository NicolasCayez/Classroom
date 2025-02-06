import { Component, NgModule } from '@angular/core';
import SwiperCore from 'swiper';
import { SwiperModule } from 'swiper/types';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CommonModule } from '@angular/common';
import { carouselData } from '../assets/api/api-carousel';
import { Carousel } from '../models/Carousel';


//! Activation des modules de Swiper
SwiperCore.use([Navigation, Pagination, Autoplay]);


@Component({
  // Nom du composant pour l'utiliser dans d'autres parties de l'application
  selector: 'app-carousel',
  imports: [SwiperModule, CommonModule],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  carousel: Carousel[] =  carouselData;

  // Configuration du carrousel
  config: SwiperOptions = {
    // Nombre de slides affichés en même temps
    slidesPerView: 1,
    // Espace entre les slides
    spaceBetween: 10,
    // Ajout des boutons de navigation
    navigation: true,
    // Ajout des indicateurs de pagination
    pagination: { clickable: true },
    // Défilement automatique toutes les 3s
    autoplay: { delay: 3000, disableOnInteraction: false },
    // Activation du défilement infini
    loop: true
  };

  // Liste des images du carrousel
  slides = [
    'assets/images/slider/slide1.jpg',
    'assets/images/slider/slide2.jpg',
    'assets/images/slider/slide3.jpg',
    'assets/images/slider/slide4.png'
  ];
}
