import { useEffect, useState } from "react";
import type { Question } from "../types";
import ProgressRuler from "./ProgressRuler";
import { hasVideo, loadVideoUrl } from "../data/videos";

interface Props {
  question: Question;
  index: number;
  total: number;
  onAnswered: (chosenIndex: number, correct: boolean) => void;
  onNext: () => void;
  isLast: boolean;
}

const LETTERS = ["A", "B", "C", "D"];

export default function QuestionCard({
  question,
  index,
  total,
  onAnswered,
  onNext,
  isLast,
}: Props) {
  const [chosen, setChosen] = useState<number | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | undefined>(undefined);

  const answered = chosen !== null;
  const wasCorrect = answered && chosen === question.correctIndex;

  const videoFilename =
    answered && !wasCorrect ? question.wrongAnswerVideos?.[chosen] : undefined;
  const videoExists = videoFilename ? hasVideo(videoFilename) : false;

  // Fetch the clip only once we know which wrong option was picked, and
  // only if a matching file actually exists — nothing is requested for
  // the three options the user didn't choose.
  useEffect(() => {
    if (!videoFilename || !videoExists) {
      setVideoUrl(undefined);
      return;
    }
    let cancelled = false;
    loadVideoUrl(videoFilename).then((url) => {
      if (!cancelled) setVideoUrl(url);
    });
    return () => {
      cancelled = true;
    };
  }, [videoFilename, videoExists]);

  const handleChoose = (i: number) => {
    if (chosen !== null) return;
    setChosen(i);
    onAnswered(i, i === question.correctIndex);
  };

  const expectedFilename =
    answered && !wasCorrect
      ? videoFilename ??
        `${question.topic.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${LETTERS[
          chosen
        ].toLowerCase()}.mp4`
      : undefined;

  return (
    <div className="sheet">
      <ProgressRuler total={total} currentIndex={index} />
      <p className="topic-label">{question.topic}</p>
      <h2 className="question-prompt">{question.prompt}</h2>

      <div className="options">
        {question.options.map((opt, i) => {
          let cls = "option";
          if (answered) {
            if (i === question.correctIndex) cls += " correct";
            else if (i === chosen) cls += " incorrect";
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handleChoose(i)}
              disabled={answered}
              aria-pressed={chosen === i}
            >
              <span className="letter">{LETTERS[i]}</span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="feedback">
          <p className={"feedback-verdict " + (wasCorrect ? "correct" : "incorrect")}>
            {wasCorrect ? "Correct." : "Not quite."}
          </p>
          <p className="feedback-explanation">{question.explanation}</p>

          {!wasCorrect && (
            <div className="video-slot">
              {!videoExists && (
                <p className="video-missing">
                  No explainer video found for option {LETTERS[chosen]}. Add{" "}
                  <code>{expectedFilename}</code> to{" "}
                  <code>src/assets/videos/</code>.
                </p>
              )}
              {videoExists && !videoUrl && (
                <p className="video-missing">Loading clip…</p>
              )}
              {videoExists && videoUrl && (
                // key forces a remount when the source changes, so an
                // old clip never keeps playing under a new one.
                <video
                  key={videoUrl}
                  className="feedback-video"
                  controls
                  preload="metadata"
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser can't play this video.
                </video>
              )}
            </div>
          )}

          <div className="next-row">
            <button className="primary-btn" onClick={onNext}>
              {isLast ? "See results" : "Next question"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
