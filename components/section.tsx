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
    <section id={id} className="mt-20">
      <h2 className="mb-8 border-b pb-3 text-xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}
