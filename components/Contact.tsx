"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-4 text-2xl font-semibold text-white">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          type="text"
          required
          placeholder="Votre nom"
          className="w-full rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-white outline-none"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Votre email"
          className="w-full rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-white outline-none"
        />
        <textarea
          name="message"
          required
          placeholder="Votre message"
          rows={4}
          className="w-full rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-white outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
        >
          Envoyer
        </button>
      </form>
      {sent && <p className="mt-3 text-sm text-emerald-300">Message envoyé</p>}
    </section>
  );
}
