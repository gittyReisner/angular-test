# Assignment instructions

## Part 1: Notifications Model

1. Notification Definition:
   * A Notification should show a title and message
   * possible types: error, success and log
   * types should be diffrentiated by top-border color - red for error, orange for log and green for success.
   * Multiple notifications can appear at the same time
   * Notifications should appear at the right part of the screen
   * Notifications have a lifetime of 5 seconds and then disappear
   * When a notification appears - existing notifications should be pushed up on the screen in a column.
   * Notifications are on the screen regardless of current app navigation - changing pages with angular navigation should not remove or add notifications.
   * Adding a notification should be possible from anywhere in the App.
   * A maximum of 5 notifications should be displayed at once, if more than 5 exist, the oldest notifications should be removed.

### Object model:
In the `/model` folder - populate the notification interface, add other types or interfaces if needed.
The interface should represent the requiremnts detailed above.

### Component
Create the Notification and NotificationsContainer Components - Components should support above behaviour and use the interface(s) created.
Create a service to allow Notifications management.

Use `<app-main>` layout to demonstrate notifications using 3 buttons - Notify, Error and Log. each should add a new notification of the appropriate type.
the buttons should allow multiple uses.
