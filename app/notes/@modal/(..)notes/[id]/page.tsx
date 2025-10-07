import NoteDetailsClient from "../../../[id]/NoteDetails.client";
import { fetchNoteById } from "../../../../../lib/api";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import TanStackProvider from "../../../../../components/TanStackProvider/TanStackProvider";
// import { useRouter } from "next/navigation";
import React from "react";

export default async function ModalNotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <TanStackProvider>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full relative p-6">
            <NoteDetailsClient noteId={id} />
          </div>
        </div>
      </HydrationBoundary>
    </TanStackProvider>
  );
}
