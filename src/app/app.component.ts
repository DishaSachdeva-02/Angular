import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MemberComponent,MessagesComponent,RouterModule,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello! World';
}
