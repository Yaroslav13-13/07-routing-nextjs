import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { fetchNotes } from "../../lib/api";
import NotesClient from "./Notes.client";
import TanStackProvider from "../../components/TanStackProvider/TanStackProvider";

export const dynamic = "force-dynamic";

export default async function NotesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, ""],
    queryFn: () => fetchNotes({ page: 1, perPage: 12, search: "" }),
  });

  return (
    <TanStackProvider>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient />
      </HydrationBoundary>
    </TanStackProvider>
  );
}
