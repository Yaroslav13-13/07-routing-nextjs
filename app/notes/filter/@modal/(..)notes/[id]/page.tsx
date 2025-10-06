import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import Modal from "@/components/Modal/Modal";

export default function NotePreview({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <NoteDetailsClient noteId={params.id} />
    </Modal>
  );
}
