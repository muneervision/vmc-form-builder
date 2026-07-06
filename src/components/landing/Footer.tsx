export function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-lg italic text-ink dark:text-white">vMc</span>
            <p className="mt-3 text-sm text-ink/55 dark:text-white/50">
              Forms drafted with precision, shipped with confidence.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-ink/40 dark:text-white/40">
              Product
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-ink/60 dark:text-white/55">
              <li>Templates</li>
              <li>Integrations</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-ink/40 dark:text-white/40">
              Company
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-ink/60 dark:text-white/55">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-ink/40 dark:text-white/40">
              Contact
            </h4>
            <p className="mt-3 text-sm text-ink/60 dark:text-white/55">hello@vmc-formbuilder.example</p>
          </div>
        </div>
        <p className="mt-12 font-mono text-xs text-ink/35 dark:text-white/35">
          © {new Date().getFullYear()} vMc Form Builder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
