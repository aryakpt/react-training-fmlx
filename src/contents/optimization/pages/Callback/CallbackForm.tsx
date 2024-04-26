import { memo, useState } from "react";
import { Button, Input } from "src/components";

interface CallbackFormProps {
  onSubmit: (data: string) => void;
}
const CallbackForm = (props: CallbackFormProps) => {
  const [name, setName] = useState("");

  // Do nothing for 500 ms to emulate extremely slow code
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    //
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Button variety="primary">Submit</Button>
    </form>
  );
};

export default memo(CallbackForm);
