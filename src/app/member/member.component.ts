import { Component } from '@angular/core';
import { Member } from './member1';
import { FormsModule } from '@angular/forms';
import { MEMBERS } from '../My-members';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { MemberDetailsComponent } from '../member-details/member-details.component';
import { MemberService } from '../member.service';
@Component({
  selector: 'app-member',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf,MemberDetailsComponent],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  member:Member[]=[];
  constructor(private memberservice:MemberService){}
  ngOnInit():void{
    this.getMembers();
  }
  getMembers():void{
    this.memberservice.getMember().subscribe(members=>this.member=members);
  }
  selectedMember?:Member
  
  onSelect(memberdetails:Member):void{
    this.selectedMember=memberdetails;
  }

}
