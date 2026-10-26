import type { Metadata } from "next";
import Subpage from "@/components/subpage";
import Experience from "@/components/experience";

export const metadata: Metadata = {
  title: "Work history | Semeton Balogun",
  description:
    "Full work history: eGov Foundation, Seamless Technologies, Zercom Systems, ScholarshipIQ and Bincom Dev Center.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <Subpage>
      <h1 className="text-3xl font-semibold tracking-tight">Work history</h1>
      <p className="mt-2 text-muted-foreground">
        Roles, what I was responsible for, and the stack.
      </p>
      <Experience title="Roles" />
    </Subpage>
  );
}
