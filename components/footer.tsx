export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t pt-6 text-sm text-muted-foreground">
      © {currentYear} Semeton Balogun
    </footer>
  );
}
