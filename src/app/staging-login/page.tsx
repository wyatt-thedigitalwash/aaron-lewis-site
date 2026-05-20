"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function StagingLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    const res = await fetch("/api/staging-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <label htmlFor="staging-password" className="sr-only">Password</label>
        <input
          type="password"
          id="staging-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          aria-describedby={error ? "staging-error" : undefined}
          className="w-full border-0 border-b border-ink-muted/40 bg-transparent px-0 py-2 text-base text-ink transition-colors hover:border-ink/60 focus:border-accent focus:outline-none"
        />
        {error && (
          <p id="staging-error" role="alert" className="mt-2 text-sm text-accent">Incorrect password</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full border border-ink-muted/40 py-2 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-bg disabled:opacity-50"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
