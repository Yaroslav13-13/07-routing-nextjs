// export default function NotesLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <>{children}</>;
// }

"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotesLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Якщо зайшли на /notes без filter → перенаправляємо на /notes/filter/All
    if (window.location.pathname === "/notes") {
      router.replace("/notes/filter/All");
    }
  }, [router]);

  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
