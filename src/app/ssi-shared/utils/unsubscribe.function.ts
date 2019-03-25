import {Subscription} from 'rxjs';

export function unsubscribe(subscription: Subscription): void {
  if (subscription) {
    subscription.unsubscribe();
    subscription = null;
  }
}
