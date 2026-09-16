interface Props {
  total: number;
  currentIndex: number; // 0-based
}

export default function ProgressRuler({ total, currentIndex }: Props) {
  return (
    <div className="progress-row">
      <span className="progress-label">
        Question {currentIndex + 1} / {total}
      </span>
      <div className="progress-ticks" aria-hidden="true">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={
              "tick" +
              (i < currentIndex ? " done" : i === currentIndex ? " current" : "")
            }
          />
        ))}
      </div>
    </div>
  );
}
