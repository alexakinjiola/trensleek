"use client";

import { useId, useState } from "react";
import { Icon } from "./primitives";

/** Biography that shows a short preview and expands smoothly to the full profile. */
export default function TeamBio({ paragraphs }: { paragraphs: string[] }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={`tm2-bio has-bio${open ? " is-open" : ""}`}>
      <div className="tm2-bio-body" id={id}>
        <div className="tm2-bio-inner">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
      <button type="button" className="tm2-more" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
        {open ? "Show less" : "Read full profile"}
        <Icon name="expand_more" />
      </button>
    </div>
  );
}
