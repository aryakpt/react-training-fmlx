import { useMemo, useState } from "react";
import { createMemo, filterMemos } from "./utils";

const memos = createMemo();

const Memo = () => {
  const [tab, setTab] = useState<"all" | "active" | "completed">("all");
  const [isDark, setIsDark] = useState(false);

  const visibleMemos = useMemo(() => filterMemos(memos, tab), [memos, tab]);

  return (
    <>
      <button onClick={() => setTab("all")}>All</button>
      <button onClick={() => setTab("active")}>Active</button>
      <button onClick={() => setTab("completed")}>Completed</button>
      <br />
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />

      <div>
        <h2>Theme: {isDark ? "Dark" : "Light"}</h2>
        <p>
          <b>
            Note: <code>filterTodos</code> is artificially slowed down!
          </b>
        </p>
        <ul>
          {visibleMemos.map((memo) => (
            <li key={memo.id}>
              {memo.completed ? <s>{memo.text}</s> : memo.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Memo;
