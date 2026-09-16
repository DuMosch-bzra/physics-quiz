// Lazily resolves mp4s in src/assets/videos/. Unlike an eager glob,
// nothing here is bundled or downloaded until loadVideoUrl() is
// actually called for that specific filename — with a dozen-plus
// clips that keeps the initial page load light.
const loaders = import.meta.glob("../assets/videos/*.mp4", {
  query: "?url",
  import: "default",
}) as Record<string, () => Promise<string>>;

const loaderByFilename: Record<string, () => Promise<string>> = {};
for (const path in loaders) {
  const filename = path.split("/").pop();
  if (filename) loaderByFilename[filename] = loaders[path];
}

/** Synchronous check — known at build time, no network/import needed. */
export function hasVideo(filename: string): boolean {
  return filename in loaderByFilename;
}

/** Actually fetches the video chunk and resolves its served URL. */
export async function loadVideoUrl(filename: string): Promise<string | undefined> {
  const load = loaderByFilename[filename];
  if (!load) return undefined;
  return load();
}
