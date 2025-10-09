// export default function NotesLayout({
//   children,
//   modal,
// }: {
//   children: React.ReactNode;
//   modal: React.ReactNode;
// }) {
//   return (
//     <>
//       {children}
//       {modal}
//     </>
//   );
// }

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
