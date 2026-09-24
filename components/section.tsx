export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-16">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}
