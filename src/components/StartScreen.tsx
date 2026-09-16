import type { Question } from "../types";

interface Props {
  questions: Question[];
  onStart: () => void;
}

export default function StartScreen({ questions, onStart }: Props) {
  return (
    <div className="sheet">
      <h1 className="start-title">Physics revision quiz</h1>
      <p className="start-lede">
        Six questions, one per topic. Answer each one, get an explanation
        immediately, and see where to focus before the final exam.
      </p>
      <ul className="topic-ruler">
        {questions.map((q, i) => (
          <li key={q.id}>
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <span className="name">{q.topic}</span>
          </li>
        ))}
      </ul>
      <button className="primary-btn" onClick={onStart}>
        Start quiz
      </button>
    </div>
  );
}
