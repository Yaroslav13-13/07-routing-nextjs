"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import css from "./TagsMenu.module.css";

const tags = ["All", "Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function TagsMenu() {
  const [open, setOpen] = useState(false);
  const [currentTag, setCurrentTag] = useState("Notes");
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const parts = pathname.split("/");
    const tagFromPath = parts[3] || "All";
    setCurrentTag(tagFromPath);
  }, [pathname]);

  return (
    <div ref={menuRef} className={css.menuContainer}>
      <button className={css.menuButton} onClick={toggleMenu}>
        {currentTag} ▾
      </button>
      <ul className={`${css.menuList} ${open ? css.show : ""}`}>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link
              href={
                tag === "All" ? "/notes/filter/All" : `/notes/filter/${tag}`
              }
              className={css.menuLink}
              onClick={() => setOpen(false)}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
