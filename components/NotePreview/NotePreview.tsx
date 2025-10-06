"use client";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import css from "./NotePreview.module.css";

interface Note {
  id: string;
  title: string;
  content: string;
  tag: string;
}

interface Props {
  note: Note;
}

export default function NotePreview({ note }: Props) {
  const router = useRouter();

  const closeModal = () => router.back();

  return (
    <Modal onClose={closeModal}>
      <div className={css.container}>
        <h2 className={css.title}>{note.title}</h2>
        <p className={css.content}>{note.content}</p>
        <span className={css.tag}>{note.tag}</span>
      </div>
    </Modal>
  );
}
