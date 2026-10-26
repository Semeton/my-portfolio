import Image from "next/image";
import Link from "next/link";

const linkClass =
  "underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground";

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  );
}

function Part({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="border-b pb-3 text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

function Photo({
  src,
  alt,
  caption,
  height,
  focus,
}: {
  src: string;
  alt: string;
  caption: string;
  height: number;
  focus: string;
}) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={900}
        height={height}
        className="aspect-[4/3] w-full rounded-md object-cover"
        style={{ objectPosition: focus }}
      />
      <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

const habits = [
  {
    title: "Diagnose before you treat.",
    body: "Find the root cause before changing anything. My work on the sync-time bug at eGov and the stalled jobs at Access Bank both started there.",
  },
  {
    title: "Every intervention needs a rationale.",
    body: "In a hospital mistakes are costly, so every action needs a scientific reason behind it. I hold technical decisions to the same standard.",
  },
  {
    title: "Discipline.",
    body: "Do the routine steps properly every time, especially when nobody is checking.",
  },
];

function Nursing() {
  return (
    <Part title="Nursing">
      <p>
        I studied Nursing Science at the College of Medicine, University of
        Lagos, from 2015 to 2021. I graduated in January 2022 with
        distinction, with the joint-highest CGPA in my class, and was inducted
        into the Nursing and Midwifery Council of Nigeria in April 2022.
      </p>
      <p>
        I did my internship year with the Lagos State Health Service Commission
        from November 2022 to November 2023, while working as a software engineer at
        ScholarshipIQ and then Zercom Systems. For a while I was doing both.
      </p>
      <Photo
        src="/images/about-nursing.jpg"
        alt="Semeton in theatre scrubs, cap and mask"
        caption="In theatre scrubs during my nursing years."
        height={1200}
        focus="center 18%"
      />
      <p>Three habits from nursing show up in how I engineer:</p>
      <ul className="space-y-2">
        {habits.map((habit) => (
          <li key={habit.title} className="flex gap-3">
            <span className="flex-shrink-0 text-muted-foreground">–</span>
            <span>
              <span className="font-medium">{habit.title}</span> {habit.body}
            </span>
          </li>
        ))}
      </ul>
    </Part>
  );
}

function Design() {
  return (
    <Part title="Design">
      <p>
        Alongside my degree I worked as a brand and graphic designer. In 2019 I
        became national graphics designer for NUNSA, the Nigerian University
        Nursing Students Association, under the Hon. Fawole Israel
        administration, and a member of its editorial unit. In my own chapter
        at the College of Medicine I was academic secretary and chapter
        designer. I also designed health-week campaigns for the nursing and
        pharmacy students&apos; associations at UNILAG, and branded
        SmoothieDaddi from scratch in 2020.
      </p>
      <p>
        From August 2021 to May 2022 I was creative director at ADOMedia, a
        design agency in Lagos. I led the creative team, set up a Google
        Workspace so work was trackable, mentored intern designers and rebuilt
        the agency's website. After that I left agency work to focus on
        software, and kept a few freelance clients, designing the brand
        identities for PIT Africa and Tanda Foods.
      </p>
      <p>
        My design work is on{" "}
        <External href="https://www.behance.net/balogunsemeton">Behance</External>.
      </p>
    </Part>
  );
}

function Software() {
  return (
    <Part title="Into software">
      <p>
        Curiosity got me teaching myself to code. In 2020, as a final-year
        student, I joined the tech apprenticeship at Bincom Dev Center, with{" "}
        <External href="https://ogwodev.com/">Emmanuel Ogwo</External> as my
        mentor. I worked on Social Lender and on ARM Learn for ARM Pensions,
        which was also my first time working on Linux.
      </p>
      <p>
        When I asked Emmanuel how I could repay him, he told me to pay it
        forward. I&apos;ve tried to. I trained interns at Bincom and ADOMedia, and I
        volunteered on SeamlessHR&apos;s Codeable programme, teaching software
        engineering to Special Olympics athletes and to students at the
        Kirikiri correctional centre in Lagos. I wrote about it in{" "}
        <External href="https://semeton.medium.com/paying-it-forward-behind-bars-7b71c584caec">
          Paying It Forward, Behind Bars
        </External>
        .
      </p>
      <p>
        From Bincom I went to ScholarshipIQ, then Zercom Systems, Seamless
        Technologies, eGov Foundation and Lawyering. The details are in my{" "}
        <Link href="/work" className={linkClass}>
          work history
        </Link>
        .
      </p>
    </Part>
  );
}

function Now() {
  return (
    <Part title="Now">
      <p>
        I&apos;m studying for a Master&apos;s in Information Technology at Miva
        Open University, specialising in artificial intelligence. I&apos;m in my
        second semester and working on my thesis.
      </p>
      <p>
        The reason goes back to nursing. Practice should rest on theory, and I
        want to know the rationale behind what I build, not only how to build
        it.
      </p>
    </Part>
  );
}

function Outside() {
  return (
    <Part title="Outside work">
      <p>
        I take amateur landscape photographs, I cycle, and I co-host{" "}
        <External href="https://open.spotify.com/show/6IIbErw26bSWgRs5NWz8vw">
          Perspective
        </External>
        , a podcast, with a close friend. I write personal essays on{" "}
        <External href="https://medium.com/@semeton">Medium</External>, from
        travel diaries to{" "}
        <External href="https://semeton.medium.com/on-the-god-question-10262250a36d">
          On the God Question
        </External>
        .
      </p>
      <p>
        My favourite person of all time is Richard Feynman, mostly because he
        refused to live through one filter. Nursing, design and software have
        all made more sense to me together than any of them would alone.
      </p>
      <Photo
        src="/images/about-outside.jpg"
        alt="Semeton sitting on a park bench in a black jacket and cap"
        caption="Off the clock."
        height={1599}
        focus="center 43%"
      />
    </Part>
  );
}

export default function Background() {
  return (
    <div className="space-y-12 leading-relaxed">
      <p className="text-lg text-muted-foreground">
        I&apos;ve rarely done one thing at a time. I studied nursing while
        working as a designer, started engineering as a final-year student, and
        wrote software through my nursing internship. Each of those shaped how I
        build systems now.
      </p>
      <Nursing />
      <Design />
      <Software />
      <Now />
      <Outside />
    </div>
  );
}
