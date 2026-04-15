const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-foreground mb-4">Jaipur</p>
        <p className="text-muted-foreground text-sm font-light mb-2">
          19 Rue d'Auxonne, 21000 Dijon
        </p>
        <a href="tel:+33380661240" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">
          +33 3 80 66 12 40
        </a>
        <div className="w-8 h-px bg-border mx-auto my-6" />
        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} Jaipur. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;