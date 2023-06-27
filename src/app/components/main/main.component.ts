import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import {Notification} from '../../../model/notification'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private notificationService: NotificationService) {}

  addNotification(type: 'success' | 'error' | 'log'): void {
    const id = Date.now();
    const title = type === 'success' ? 'Success' : type === 'error' ? 'Error' : 'Log';
    const message = `This is a ${type} notification with ID ${id}.`;
  
    const notification: Notification = {
      id,
      title,
      message,
      type,
    };
  
    this.notificationService.addNotification(notification);
  }
}
