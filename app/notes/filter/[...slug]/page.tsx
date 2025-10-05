import NotesClient from "./Notes.client";

export default function FilteredNotesPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const tag = params.slug?.[0] ?? "All";
  return <NotesClient tag={tag} />;
}
