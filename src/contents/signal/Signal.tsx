import { useEffect, useState } from "react";
import useAuth from "src/common/hooks/useAuth";
import useSignalR from "src/common/hooks/useSignalR";
import styles from "./Signal.module.scss";
import { Button, Input } from "src/components";
import { clsx } from "clsx";

interface MessageSchema {
  name: string;
  message: string;
}
const Signal = () => {
  const { user } = useAuth();
  const { connection } = useSignalR("http://localhost:5000/hub/login");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessageSchema[]>([]);

  useEffect(() => {
    if (connection)
      connection.on("BroadcastChat", (data: MessageSchema) => {
        setMessages((prev) => {
          return [...prev, data];
        });
      });
  }, [connection]);

  const sendMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (connection) connection.invoke("BroadcastChat", user.name, message);
    setMessage("");
  };

  return (
    <div className={styles.signal}>
      <div className={styles.roomChat}>
        <ul>
          {messages.map((msg, index) => (
            <li
              key={index}
              className={clsx(styles.bubble, {
                [styles.left]: user.name !== msg.name,
                [styles.right]: user.name === msg.name,
              })}
            >
              <p className={styles.bubbleName}>{msg.name}</p>
              <p className={styles.bubbleMessage}>{msg.message}</p>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <form className={styles.formMessage} onSubmit={sendMsg}>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button variety="primary" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Signal;
