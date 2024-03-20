import { Injectable } from '@angular/core';
import { Member } from './member/member1';
import { MEMBERS } from './My-members';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private membersurl='api/members'
  httpOptions={headers:new HttpHeaders({'Content-type':'application-json'})}
  constructor(private messageService:MessageService , private http:HttpClient) { }
  getMember():Observable<Member[]>{
    
     this.messageService.add("Members are displayed....")
     return this.http.get<Member[]>(this.membersurl);
  }
  getMem(id:number):Observable<Member>{
    const url=`${this.membersurl}/${id}`;
    this.messageService.add(`member displayed is ${id}`);
    return this.http.get<Member>(url);
  }
  updateMember(member: Member): Observable<any> {
    return this.http.put(this.membersurl, member, this.httpOptions);
  }
  addMember(member:Member):Observable<Member>{
    return this.http.post<Member>(this.membersurl,member,this.httpOptions);
  }
  deleteMember(id:number):Observable<Member>{
    const url=`${this.membersurl}/${id}`;
    return this.http.delete<Member>(url,this.httpOptions);
  }
}
