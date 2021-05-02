import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit{

  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // configure Swiper to use modules

    this.mySwiper = new Swiper('.swiper-container', {     
      
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

       // Optional parameters
       observer: true,
       observeParents: true,
       loop: true,
    });
  }
}
