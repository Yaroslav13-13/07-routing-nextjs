"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../../lib/api";
import NoteList from "../../components/NoteList/NoteList";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import Pagination from "../../components/Pagination/Pagination";
import NoteForm from "../../components/NoteForm/NoteForm";
import Modal from "../../components/Modal/Modal";
import Notification from "../../components/Notification/Notification";
import { useDebounce } from "use-debounce";
import type { Note } from "../../types/note";
import css from "../../components/SearchBox/SearchBox.module.css";

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

type NotificationType = "success" | "error";

const NotesClient: React.FC = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const [isClient, setIsClient] = useState(false); // новий стан для SSR/CSR
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [notificationType, setNotificationType] =
    useState<NotificationType>("success");

  // відмічаємо, що ми на клієнті
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { data, isLoading, isError } = useQuery<FetchNotesResponse, Error>({
    queryKey: ["notes", page, debouncedSearch],
    queryFn: () => fetchNotes({ page, perPage: 12, search: debouncedSearch }),
    // placeholderData: (prev) => prev,
  });

  const notes: Note[] = data?.notes ?? [];
  const totalPages: number = data?.totalPages ?? 0;

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(null), 2500);
    return () => clearTimeout(timer);
  }, [notification]);

  useEffect(() => {
    if (!isLoading && !isError && debouncedSearch && notes.length === 0) {
      setNotification("No notes found");
      setNotificationType("error");
    }
  }, [isLoading, isError, notes.length, debouncedSearch]);

  // поки SSR не завершено - нічого не рендеримо
  if (!isClient) return null;

  return (
    <div>
      <div className={css.searchbox}>
        <SearchBox value={search} onChange={setSearch} />
        <button className={css.button} onClick={() => setIsModalOpen(true)}>
          + Create note
        </button>
      </div>

      {isLoading && <Loader />}
      {!isLoading && notes.length > 0 && <NoteList notes={notes} />}
      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <NoteForm onCancel={() => setIsModalOpen(false)} />
        </Modal>
      )}
      {notification && (
        <Notification
          message={notification}
          type={notificationType}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default NotesClient;
