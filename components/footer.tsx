export function Footer() {
  return (
    <footer id="contacto" className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>BCN Digital Local - Soluciones para PYMES de Barcelona.</p>
        <p>
          Contacto directo:{" "}
          <a className="font-semibold text-primary" href="https://wa.me/393513052627">
            WhatsApp Comercial
          </a>
        </p>
      </div>
    </footer>
  );
}
