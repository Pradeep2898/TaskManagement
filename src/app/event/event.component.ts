import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: 'src/app/event/event.component.html',
  styleUrls: ['src/app/event/event.css']
})
export class EventComponent {
  @Input() value:any;
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  
  handleDeleteClick() {
    this.delete.emit(this.value);
  }
}