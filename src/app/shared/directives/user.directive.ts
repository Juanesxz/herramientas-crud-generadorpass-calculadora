import { Directive } from '@angular/core';

@Directive({
  selector: '[appUser]',
  standalone: true
})
export class UserDirective {

  constructor() { }

}
