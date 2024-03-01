import * as data from '../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity("users")
const message = new schema.Entity("messages", {}, {
  idAttribute: 'guid'
})
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
})

export const normalizedUser = normalize(data.default, [notification])

export const getAllNotificationsByUser = (userId) => {
  const notificationUser = normalizedUser.entities.notifications;
  const messages = normalizedUser.entities.messages;
  const allNotificationsByUser = [];

  for (const prop in notificationUser) {
    if (notificationUser[prop].author === userId) {
      allNotificationsByUser.push(messages[notificationUser[prop].context]);
    }
  }
  return allNotificationsByUser
}