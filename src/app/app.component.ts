import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isDarkTheme: boolean = true;
  ngOnInit(): void {}
  title = 'NeslihanPortfolio';
}
