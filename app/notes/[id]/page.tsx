// import {
//   QueryClient,
//   dehydrate,
//   HydrationBoundary,
// } from "@tanstack/react-query";
// import { fetchNoteById } from "../../../lib/api";
// import NoteDetailsClient from "./NoteDetails.client";
// import TanStackProvider from "../../../components/TanStackProvider/TanStackProvider";

// export default async function NoteDetailsPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["note", id],
//     queryFn: () => fetchNoteById(id),
//   });

//   return (
//     <TanStackProvider>
//       <HydrationBoundary state={dehydrate(queryClient)}>
//         <NoteDetailsClient noteId={id} />
//       </HydrationBoundary>
//     </TanStackProvider>
//   );
// }
