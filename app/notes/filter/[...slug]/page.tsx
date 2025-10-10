import React from "react";
import NotesClient from "../[...slug]/Notes.client";
import type { NoteTag } from "../../../../types/note";

export default async function FilteredNotesPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const tag = (resolvedParams.slug?.[0] ?? "All") as NoteTag | "All";

  return <NotesClient tag={tag} />;
}
