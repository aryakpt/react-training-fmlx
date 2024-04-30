import { useCallback, useState } from "react";
import { Button } from "src/components";
import CallbackForm from "./CallbackForm";

const Callback = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div style={{ width: "50%" }}>
      <Button variety="primary" onClick={() => setIsDark((prev) => !prev)}>
        Change Theme
      </Button>{" "}
      Theme: {isDark ? "Dark" : "Light"}
      <br />
      <hr />
      <br />
      <div>
        <CallbackForm onSubmit={useCallback((name) => console.log(name), [])} />
      </div>
    </div>
  );
};

export default Callback;
