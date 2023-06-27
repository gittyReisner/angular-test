import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from '../../model/notification'

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notifications: Notification[] = [];
  public notifications$ = new BehaviorSubject<Notification[]>([]);

  addNotification(notification: Notification): void {
    if (this.notifications.length >= 5) {
        this.notifications.splice(0, 1);
    }
    this.notifications.push(notification);
    this.notifications$.next(this.notifications);
  }

  removeNotification(id: number): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
    this.notifications$.next(this.notifications);
  }
}