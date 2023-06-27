import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../../../model/notification';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notifications-container',
  templateUrl: './notificationsContainer.component.html',
  styleUrls: ['./notificationsContainer.component.scss'],
})
export class NotificationsContainerComponent {
  notifications$: Observable<Notification[]>;

  constructor(private notificationService: NotificationService) {
    this.notifications$ = this.notificationService.notifications$;
  }
}