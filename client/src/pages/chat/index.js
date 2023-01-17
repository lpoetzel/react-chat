import styles from "./styles.module.css";
import RoomAndUsers from "./room-and-user";
import SendMessage from "./send-message";
import MessagesReceived from "./messages";

const Chat = ({ username, room, socket }) => {
  return (
    <div className={styles.chatContainer}>
      <RoomAndUsers socket={socket} username={username} room={room} />

      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;
