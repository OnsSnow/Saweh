import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Publication } from '../Models/publication';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  Publications : Array<Publication> = [
    {id :1, Title : "LAOUINA",Cost:300,Description:"HEllo I m im i m cckjcdkcuhckjdchkjdhcdcdkddd", Owner : "Ons"},
    {id :1, Title : "HAMMAMET PLAGE",Cost:300,Description:"HEllo I m im i m cckjcdkcuhckjdchkjdhcdcdkddd", Owner : "Ons"},
    {id :1, Title : "TAFELLOUN",Cost:300,Description:"HEllo I m im i m cckjcdkcuhckjdchkjdhcdcdkddd", Owner : "Ons"},
    {id :1, Title : "dgdgdgdg",Cost:300,Description:"HEllo I m im i m cckjcdkcuhckjdchkjdhcdcdkddd", Owner : "Ons"},
    {id :1, Title : "LKLKD",Cost:300,Description:"HEllo I m im i m cckjcdkcuhckjdchkjdhcdcdkddd", Owner : "Ons"},
    {id :1, Title : "KSOKS",Cost:300,Description:"HEllo I m im i m cckjcdkcuhckjdchkjdhcdcdkddd", Owner : "Ons"},
    {id :1, Title : "LKSLLLLLLLL",Cost:300,Description:"HEllo I m im i m cckjcdkcuhckjdchkjdhcdcdkddd", Owner : "Ons"},
    {id :1, Title : "XXXXXXXXX",Cost:300,Description:"HEllo I m im i m cckjcdkcuhckjdchkjdhcdcdkddd", Owner : "Ons"},
  ];
  constructor() { }

  ngOnInit(): void {
this.Publications = []
  }

}
