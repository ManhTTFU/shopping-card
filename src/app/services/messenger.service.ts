import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  constructor() {}
  subject = new Subject();

  sendMsg(product) {
    // console.log(product);

    this.subject.next(product); // triggering an event;
  }

  getMsg() {
    return this.subject.asObservable();
  }
}
