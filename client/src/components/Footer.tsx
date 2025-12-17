export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 bg-sidebar"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="text-sidebar-foreground/80 text-sm"
          data-testid="text-footer-copyright"
        >
          © {currentYear} Aurora Dream. Ottawa's Private Sleep Studio.
        </p>
      </div>
    </footer>
  );
}
