// import NotesClient from "./Notes.client";

// export default function FilteredNotesPage({
//   params,
// }: {
//   params: { slug?: string[] };
// }) {
//   const tag = params.slug?.[0] ?? "All";
//   return <NotesClient tag={tag} />;
// }

import NotesClient from "./Notes.client";

export default async function FilteredNotesPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const tag = slug?.[0] ?? "All";

  return <NotesClient tag={tag} />;
}
