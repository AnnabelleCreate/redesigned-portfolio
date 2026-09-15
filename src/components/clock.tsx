"use client";

import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="h-5 text-[13px] tabular-nums tracking-wide text-ink/70">
      {time ?? ""}
    </p>
  );
}
