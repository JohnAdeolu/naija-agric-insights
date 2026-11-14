"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setSuccess(false);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Subscription failed.");
      }

      setSuccess(true);
      setMessage(data.message);
      setEmail("");
    } catch (error) {
      setSuccess(false);
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mt-16 rounded-2xl bg-[#e7efe7] px-7 py-12 text-center md:px-16">
      <p className="text-xs font-bold tracking-[3px] text-[#267447]">
        THE AGRICULTURAL INFORMATION YOU NEED
      </p>

      <h2 className="mt-4 text-3xl font-black text-[#174b32]">
        Don't Miss an Agricultural Update.
      </h2>

      <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
        Join the Naija Agric Insights community and stay informed about
        agriculture, agribusiness, food security, market trends and
        emerging opportunities.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          disabled={loading}
          className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-5 py-4 text-sm outline-none focus:border-[#267447] disabled:opacity-60"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-[#174b32] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#267447] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Subscribing..." : "Subscribe Now"}
        </button>
      </form>

      {message && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-5 text-sm font-semibold ${
            success ? "text-green-700" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      <p className="mt-5 text-xs text-gray-500">
        Stay informed. Grow your knowledge. Discover opportunities.
      </p>
    </section>
  );
}
