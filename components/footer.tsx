function Footer(): React.ReactNode {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="container py-6 text-sm text-zinc-400 dark:text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Mahima Chacko</p>
      </div>
    </footer>
  );
}

export default Footer;
