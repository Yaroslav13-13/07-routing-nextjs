// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import css from "./Header.module.css";

// export default function Header() {
//   const pathname = usePathname();

//   return (
//     <header className={css.header}>
//       <Link href="/" className={css.logo}>
//         NoteHub
//       </Link>
//       <nav>
//         <ul className={css.nav}>
//           <li>
//             <Link href="/" className={pathname === "/" ? css.active : ""}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/notes"
//               className={pathname === "/notes" ? css.active : ""}
//             >
//               Notes
//             </Link>
//           </li>
//           <li>
//             {/* <Link
//               href="/about"
//               className={pathname === "/about" ? css.active : ""}
//             >
//               About
//             </Link> */}
//           </li>
//         </ul>
//       </nav>
//       <Link href="/signin" className={css.signIn}>
//         Sign In
//       </Link>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import TagsMenu from "../TagsMenu/TagsMenu";
// import css from "./Header.module.css";

// export default function Header() {
//   const pathname = usePathname();
//   const showTagsMenu = pathname.startsWith("/notes");

//   return (
//     <header className={css.header}>
//       <Link href="/" className={css.logo}>
//         NoteHub
//       </Link>

//       <nav>
//         <ul className={css.nav}>
//           <li>
//             <Link href="/" className={pathname === "/" ? "active" : ""}>
//               Home
//             </Link>
//           </li>

//           {showTagsMenu && (
//             <li>
//               <TagsMenu />
//             </li>
//           )}
//         </ul>
//       </nav>

//       <Link href="/signin" className={css.signIn}>
//         Sign In
//       </Link>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TagsMenu from "../TagsMenu/TagsMenu"; // імпорт ярличка
import css from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        NoteHub
      </Link>
      <nav>
        <ul className={css.nav}>
          <li>
            <Link href="/" className={pathname === "/" ? css.active : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/notes/filter/All"
              className={pathname === "/notes" ? css.active : ""}
            >
              Notes
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/signin" className={css.signIn}>
        Sign In
      </Link>

      {/* Показуємо TagsMenu тільки на сторінках /notes/* */}
      {pathname?.startsWith("/notes") && <TagsMenu />}
    </header>
  );
}
