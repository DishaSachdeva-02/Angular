import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Member } from './member/member1';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InmemorywebapiService implements InMemoryDbService {

  createDb(){
    const members=[
      {id:1 ,  name:'Disha'},
    {id:2 ,  name:'Nitanshi'},
    {id:3 ,  name:'Vansh'},
    {id:4 ,  name:'Ankit'}
    ]
    return {members};
  }
  genId(members: Member[]): number{
    return members.length > 0 ? Math.max(...members.map(member => member.id))+1:1;
  }

}
