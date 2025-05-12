import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms20';
   // angular me 2 types of forms hote hai
   // 1 reactive - usable,scalable,testable  yeh tab use hota hai jab  bahut jayda data like  bahut sare inpur field , humara 
   //  data complex hota hai wo jo mushkil hota hia usse karna ho , isme hum functions ka use karte hai
   //  2 template driven jab simple form se deal karna ho, isme hum directives ka use karte hai
}
