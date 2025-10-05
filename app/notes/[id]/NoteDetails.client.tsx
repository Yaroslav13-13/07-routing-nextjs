"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "../../../lib/api";
import type { Note } from "../../../types/note";
import Loader from "../../../components/Loader/Loader";
import { FiTag, FiCalendar, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import css from "./NoteDetails.module.css";

interface NoteDetailsClientProps {
  noteId: string;
}

const NoteDetailsClient: React.FC<NoteDetailsClientProps> = ({ noteId }) => {
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery<Note, Error>({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
    refetchOnMount: false,
  });

  if (isLoading) return <Loader />;
  if (isError || !note) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <Link href="/notes" className={css.backButton}>
            <FiArrowLeft size={20} className={css.icon} />
            Back to Notes
          </Link>
        </div>

        <p className={css.content}>{note.content}</p>

        <div className={css.boxtext}>
          {note.tag && (
            <span className={css.tag}>
              <FiTag style={{ marginRight: "6px" }} />
              {note.tag}
            </span>
          )}
          <p className={css.date}>
            <FiCalendar style={{ marginRight: "6px" }} />
            {new Date(note.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailsClient;
