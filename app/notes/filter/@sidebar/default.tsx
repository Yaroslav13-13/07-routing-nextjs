"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SidebarNotes.module.css";

const tags = ["All", "Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function DefaultSidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.nav}>
          {tags.map((tag) => {
            const isActive = pathname.includes(`/notes/filter/${tag}`);
            return (
              <li key={tag} className={styles.navItem}>
                <Link
                  href={`/notes/filter/${tag}`}
                  className={`${styles.link} ${isActive ? styles.active : ""}`}
                >
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
