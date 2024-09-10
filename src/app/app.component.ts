import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { MatIconModule } from '@angular/material/icon';     // Import MatIconModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatIconModule], // Add the imports here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Use 'styleUrls' instead of 'styleUrl'
})
export class AppComponent {
  title = 'my-angular-app';
}