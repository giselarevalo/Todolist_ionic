import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  images = [
    'assets/images/foto1.jpg',
    'assets/images/foto2.jpg',
    'assets/images/foto3.jpg'
  ]

  constructor(private router: Router) {}

  swiperSlideChanged(e:any){
    console.log('changed: ',e)
  }

  ngOnInit() {
  }

  goToList() {
    this.router.navigate(['/task-list']);
  }

}
