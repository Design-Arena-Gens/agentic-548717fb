import GreetingComposer from "../components/GreetingComposer";

export default function Page() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-16 text-slate-100">
      <div className="flex w-full max-w-5xl flex-col items-center gap-12">
        <section className="text-center">
          <p className="text-sm uppercase tracking-[0.5em] text-blue-300/70">Salut !</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-slate-50 sm:text-6xl">
            Une salutation brillante pour illuminer ta journée
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Laisse-toi porter par des vibrations positives, crée un message vibrant et partage une ambiance éblouissante
            avec ceux qui t’entourent.
          </p>
        </section>
        <GreetingComposer />
        <footer className="text-xs uppercase tracking-[0.4em] text-slate-500">Créé avec soin, pensé pour rayonner.</footer>
      </div>
    </main>
  );
}
