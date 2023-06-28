import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import {Notification} from '../../model/notification';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
