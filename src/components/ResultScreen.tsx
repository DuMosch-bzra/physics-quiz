import type { AnsweredRecord, Question } from "../types";

interface Props {
  questions: Question[];
  answers: AnsweredRecord[];
  onRestart: () => void;
}

function feedbackFor(scorePct: number): string {
  if (scorePct === 100) return "Full marks — you know this material well.";
  if (scorePct >= 80) return "Strong result. Revisit the missed topic once more before the exam.";
  if (scorePct >= 50) return "Halfway there. Go back over the topics marked below.";
  return "Worth another full pass through these topics before the exam.";
}

export default function ResultScreen({ questions, answers, onRestart }: Props) {
  const correctCount = answers.filter((a) => a.correct).length;
  const total = questions.length;
  const pct = Math.round((correctCount / total) * 100);

  return (
    <div className="sheet">
      <p className="score-line">
        {correctCount} / {total}
      </p>
      <p className="score-sub">{feedbackFor(pct)}</p>

      <table className="result-table">
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q) => {
            const rec = answers.find((a) => a.questionId === q.id);
            const ok = rec?.correct ?? false;
            return (
              <tr key={q.id}>
                <td className={"mark " + (ok ? "correct" : "incorrect")}>
                  {ok ? "✓" : "✕"}
                </td>
                <td>{q.topic}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="actions-row">
        <button className="primary-btn" onClick={onRestart}>
          Try again
        </button>
      </div>
    </div>
  );
}
