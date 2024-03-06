import { Component,Input } from '@angular/core';
import { NgFor,UpperCasePipe,NgIf } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Member } from '../member/member1';
@Component({
  selector: 'app-member-details',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule,UpperCasePipe],
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.css'
})
export class MemberDetailsComponent {
  @Input() mymember?:Member
}
