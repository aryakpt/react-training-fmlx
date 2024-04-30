import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { useEffect, useState } from "react";

const Signal = () => {
  const [hubConnection, setHubConnection] = useState<HubConnection>();
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const createHubConnection = async () => {
    const connection = new HubConnectionBuilder()
      .withUrl("http://localhost:5000/hub/login")
      .build();
    try {
      await connection.start();
    } catch (error) {
      console.error(error);
    }
    setHubConnection(connection);
  };

  useEffect(() => {
    createHubConnection();
  }, []);

  useEffect(() => {
    if (hubConnection)
      hubConnection.on("BroadcastChat", (data) => {
        setMessages((prev) => {
          return [...prev, data];
        });
      });
  }, [hubConnection]);

  const sendMsg = () => {
    if (hubConnection) hubConnection.invoke("BroadcastChat", message);
  };

  return (
    <main>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMsg}>Send Message</button>

      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </main>
  );
};

export default Signal;
