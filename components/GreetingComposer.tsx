"use client";

import { useMemo, useState } from "react";

const tones = [
  { id: "joyful", label: "Joyeux", emoji: "😄" },
  { id: "calm", label: "Calme", emoji: "🌊" },
  { id: "bold", label: "Audacieux", emoji: "🚀" },
  { id: "warm", label: "Chaleureux", emoji: "🔥" }
];

function buildMessage(name: string, tone: string, highlight: string) {
  const target = name.trim() ? name.trim() : "le monde";

  switch (tone) {
    case "joyful":
      return `Salut ${target} ! ☀️ Que cette journée soit aussi lumineuse que ton sourire${highlight ? ` — ${highlight}` : ""}.`;
    case "calm":
      return `Salut ${target}. 🌿 Respire profondément et laisse la sérénité t’accompagner${highlight ? ` pendant ${highlight}` : ""}.`;
    case "bold":
      return `Salut ${target} ! ⚡ Il est temps de créer l’impossible${highlight ? `, surtout ${highlight}` : ""}.`;
    case "warm":
    default:
      return `Salut ${target} ! ❤️ Que cette journée déborde de chaleur et de belles ondes${highlight ? ` pour ${highlight}` : ""}.`;
  }
}

export default function GreetingComposer() {
  const [name, setName] = useState("");
  const [tone, setTone] = useState(tones[0].id);
  const [highlight, setHighlight] = useState("tes projets");

  const message = useMemo(() => buildMessage(name, tone, highlight), [name, tone, highlight]);

  return (
    <section className="w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-900/60 p-10 shadow-2xl shadow-blue-900/30 backdrop-blur">
      <div className="flex flex-col gap-6">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-300/70">Composer</p>
          <h2 className="text-3xl font-semibold text-slate-100">Crée ton salut personnalisé</h2>
          <p className="text-slate-400">
            Ajuste ton message, choisis une ambiance, et partage une dose d’énergie positive.
          </p>
        </header>

        <form className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
          <label className="flex flex-col gap-2 text-sm text-slate-200">
            Nom ou destinataire
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Un ami, une équipe..."
              className="rounded-xl border border-white/10 bg-slate-800/70 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm text-slate-200">
            Moment clé
            <input
              value={highlight}
              onChange={(event) => setHighlight(event.target.value)}
              placeholder="une présentation, un voyage..."
              className="rounded-xl border border-white/10 bg-slate-800/70 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40"
            />
          </label>

          <fieldset className="col-span-full space-y-3">
            <legend className="text-sm uppercase tracking-[0.3em] text-blue-300/70">Ambiance</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {tones.map((currentTone) => {
                const selected = currentTone.id === tone;
                return (
                  <button
                    key={currentTone.id}
                    type="button"
                    onClick={() => setTone(currentTone.id)}
                    className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left text-base transition ${
                      selected
                        ? "border-blue-400/80 bg-blue-500/20 text-blue-100 shadow-inner shadow-blue-500/30"
                        : "border-white/10 bg-slate-800/60 text-slate-200 hover:border-blue-400/50 hover:text-blue-100"
                    }`}
                  >
                    <span className="font-medium">{currentTone.emoji} {currentTone.label}</span>
                    {selected && <span className="text-xs uppercase tracking-[0.3em]">choisi</span>}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </form>

        <div className="space-y-3 rounded-2xl border border-blue-400/30 bg-blue-500/10 p-6 text-blue-50">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-200/70">Ton message</p>
          <p className="text-lg leading-relaxed">{message}</p>
        </div>
      </div>
    </section>
  );
}
