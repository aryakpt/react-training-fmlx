import { MemoListItemSchema } from "../../interfaces";

export function createMemo(): MemoListItemSchema[] {
  const memos = [];
  for (let i = 0; i < 50; i++) {
    memos.push({
      id: i,
      text: "Memo " + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return memos;
}

export function filterMemos(memos: MemoListItemSchema[], tab: string) {
  const startTime = performance.now();

  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return memos.filter((todo) => {
    if (tab === "all") {
      return true;
    } else if (tab === "active") {
      return !todo.completed;
    } else if (tab === "completed") {
      return todo.completed;
    }
  });
}
