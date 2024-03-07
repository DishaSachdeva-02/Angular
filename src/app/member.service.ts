import { Injectable } from '@angular/core';
import { Member } from './member/member1';
import { MEMBERS } from './My-members';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }
  getMember():Observable<Member[]>{
    return of(MEMBERS);
  }
}
