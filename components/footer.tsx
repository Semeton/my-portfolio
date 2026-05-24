export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © {currentYear} Semeton Balogun
          </p>
      </div>
    </footer>
  );
}
