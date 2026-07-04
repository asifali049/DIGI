export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Digital Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}