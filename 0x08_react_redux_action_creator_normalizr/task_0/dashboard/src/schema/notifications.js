import * as data from '../../notifications.json'

const getAllNotificationsByUser = (userId) => {
  return data
    .default
    .filter((notification) => notification.author.id === userId)
    .map(({ context }) => context)
}

export default getAllNotificationsByUser;