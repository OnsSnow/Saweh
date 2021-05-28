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
    {id:1,Title:"Title0",Description:"Description",Cost:200,Owner:"Owner",Image:"assets/1.jpg"},
    {id:2,Title:"Title1",Description:"Description",Cost:150,Owner:"Owner",Image:"assets/2.jpg"},
    {id:3,Title:"Title2",Description:"Description",Cost:60,Owner:"Owner",Image:"assets/3.jpg"},
    {id:4,Title:"Title3",Description:"Description",Cost:500,Owner:"Owner",Image:"assets/4.jpg"},
    {id:5,Title:"Title4",Description:"Description",Cost:54,Owner:"Owner",Image:"assets/5.jpg"},
    {id:3,Title:"Title2",Description:"Description",Cost:85,Owner:"Owner",Image:"assets/3.jpg"},
    {id:4,Title:"Title3",Description:"Description",Cost:100,Owner:"Owner",Image:"assets/4.jpg"},
    {id:5,Title:"Title4",Description:"Description",Cost:0,Owner:"Owner",Image:"assets/5.jpg"},
    {id:3,Title:"Title2",Description:"Description",Cost:522,Owner:"Owner",Image:"assets/3.jpg"},
    {id:4,Title:"Title3",Description:"Description",Cost:15,Owner:"Owner",Image:"assets/4.jpg"},
    {id:5,Title:"Title4",Description:"Description",Cost:175,Owner:"Owner",Image:"assets/5.jpg"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
