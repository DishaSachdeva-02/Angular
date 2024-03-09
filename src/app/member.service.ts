import { Injectable } from '@angular/core';
import { Member } from './member/member1';
import { MEMBERS } from './My-members';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private messageService:MessageService) { }
  getMember():Observable<Member[]>{
     const message=of(MEMBERS);
     this.messageService.add("Members are displayed....")
     return message;
  }
}
