import style from '../style.module.css';

interface NotificationProps {
  date: string;
  name: string;
  message: string;
}

export const Notification = ({ date, name, message }: NotificationProps) => {
  return (
    <div className={style.notification_body_item}>
      <span className={style.time}>{date}</span>
      <p><strong>{name}</strong> {message}</p>
    </div>
  );
}