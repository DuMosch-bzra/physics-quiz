# Physics Revision Quiz

A single-page interactive quiz built with React + TypeScript + Vite,
using the six questions from `Physics_Revision_Quiz.docx`.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To produce a static build you can host anywhere (GitHub Pages, Netlify,
a USB stick):

```bash
npm run build
```

This writes a self-contained `dist/` folder.

## What's implemented

- Start screen listing all six topics
- One question at a time, four options each
- Immediate feedback on selection: correct answer highlighted, your
  answer highlighted if wrong, plus a written explanation
- Progress indicator, final score, and a per-topic right/wrong summary
- A sources note on the results screen (placeholder text — see below)

## What's still missing against your assignment brief

Two rubric items are not done yet and need your input, not guesswork
on my part:

1. **Explanatory videos.** Each `Question` in `src/data/questions.ts`
   has an optional `videoUrl` field. When it's empty, the app shows a
   placeholder instead of a video. Your brief wants 30–45s clips
   totalling 10–12 minutes — that's yours (or your teammates') to
   record or source and link in.
2. **Sources.** `src/components/ResultScreen.tsx` has a generic
   placeholder citation. Replace it with the actual textbook/site
   pages you used for each question.

Everything else (interactivity, feedback, scoring, "continue after
explanation") is implemented and builds cleanly (`npm run build`
passes with no TypeScript errors).
