"use client";

import { useInView } from "@/hooks/useInView";

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 500,
  className = "",
}: {
  children: React.ReactNode;
  direction?: "up" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView(0.1);

  const baseTransform = direction === "up" ? "translateY(12px)" : "none";
  const activeTransform = direction === "up" ? "translateY(0)" : "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? activeTransform : baseTransform,
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
