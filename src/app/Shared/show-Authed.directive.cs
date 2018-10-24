import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
export class ShowAuthedDirective implements OnInit {


constructor(){}
@Input() set showAuthed(condition: boolean) {
    this.condition = condition;
  }
}
 