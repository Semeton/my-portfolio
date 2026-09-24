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
      <h2 className="mb-6 font-semibold">{title}</h2>
      {children}
    </section>
  );
}
