import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { useEffect, useState } from "react";

const useSignalR = (url: string) => {
  const [connection, setConnection] = useState<HubConnection>();

  useEffect(() => {
    const connection = new HubConnectionBuilder().withUrl(url).build();
    connection.start().catch((err) => console.error(err));
    setConnection(connection);
  }, [url]);

  return { connection };
};

export default useSignalR;
