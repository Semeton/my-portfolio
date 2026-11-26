import type { ReactNode } from "react";

/**
 * Hand-drawn architecture diagrams for case studies, as inline SVG.
 * Colours come from the theme's CSS variables, so they follow light and dark mode.
 * Every diagram uses a 400-unit-wide viewBox and a top-to-bottom flow, which keeps
 * text legible from phone width up to the content column.
 */

const ink = "currentColor";
const muted = "hsl(var(--muted-foreground))";
const brand = "hsl(var(--brand))";
const line = "hsl(var(--muted-foreground) / 0.55)";

type BoxProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  note?: string;
  accent?: boolean;
  dashed?: boolean;
};

function Box({ x, y, width, height, title, note, accent, dashed }: BoxProps) {
  const center = x + width / 2;
  const titleY = note ? y + height / 2 - 3 : y + height / 2 + 4.5;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        fill="hsl(var(--background))"
        stroke={accent ? brand : line}
        strokeWidth={accent ? 1.5 : 1}
        strokeDasharray={dashed ? "4 3" : undefined}
      />
      <text
        x={center}
        y={titleY}
        textAnchor="middle"
        fontSize={13}
        fontWeight={note ? 600 : 500}
        fill={ink}
      >
        {title}
      </text>
      {note && (
        <text
          x={center}
          y={titleY + 16}
          textAnchor="middle"
          fontSize={11.5}
          fill={muted}
        >
          {note}
        </text>
      )}
    </g>
  );
}

function Zone({
  x,
  y,
  width,
  height,
  label,
  accent,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={10}
        fill="none"
        stroke={accent ? brand : line}
        strokeOpacity={accent ? 0.6 : 1}
        strokeDasharray="5 4"
      />
      <text
        x={x + 12}
        y={y + 18}
        fontSize={11}
        letterSpacing={0.4}
        fill={accent ? brand : muted}
      >
        {label}
      </text>
    </g>
  );
}

function Arrow({
  id,
  points,
  both,
}: {
  id: string;
  points: [number, number][];
  both?: boolean;
}) {
  return (
    <polyline
      points={points.map(([px, py]) => `${px},${py}`).join(" ")}
      fill="none"
      stroke={line}
      strokeWidth={1.25}
      markerEnd={`url(#${id})`}
      markerStart={both ? `url(#${id}-start)` : undefined}
    />
  );
}

function Label({
  x,
  y,
  children,
  anchor = "start",
}: {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text x={x} y={y} fontSize={11} textAnchor={anchor} fill={muted}>
      {children}
    </text>
  );
}

function Frame({
  id,
  height,
  title,
  children,
}: {
  id: string;
  height: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={`0 0 400 ${height}`}
      role="img"
      aria-label={title}
      className="mx-auto block w-full max-w-[480px]"
    >
      <title>{title}</title>
      <defs>
        <marker
          id={id}
          viewBox="0 0 10 10"
          refX={9}
          refY={5}
          markerWidth={7}
          markerHeight={7}
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 z" fill={line} />
        </marker>
        <marker
          id={`${id}-start`}
          viewBox="0 0 10 10"
          refX={1}
          refY={5}
          markerWidth={7}
          markerHeight={7}
          orient="auto"
        >
          <path d="M10,0 L0,5 L10,10 z" fill={line} />
        </marker>
      </defs>
      {children}
    </svg>
  );
}

function FleetGateDiagram() {
  const id = "arrow-fleet-gate";
  return (
    <Frame
      id={id}
      height={476}
      title="Fleet review gate: a poller and a listener on the engineer's machine, a read-only reviewer, Slack, and a cloud fallback"
    >
      <Box
        x={110}
        y={8}
        width={180}
        height={46}
        title="GitHub"
        note="fleet PRs · CI review"
      />
      <Arrow
        id={id}
        points={[
          [200, 54],
          [200, 94],
        ]}
      />
      <Label x={208} y={79}>
        polled every 5 min
      </Label>

      <Zone
        x={8}
        y={96}
        width={384}
        height={192}
        label="ENGINEER'S MACHINE · NOTHING EXPOSED"
      />
      <Box
        x={24}
        y={126}
        width={164}
        height={58}
        title="Poller"
        note="reads verdicts, sends fixes"
        accent
      />
      <Box
        x={212}
        y={126}
        width={164}
        height={58}
        title="Reviewer"
        note="headless Claude, read-only"
      />
      <Arrow
        id={id}
        points={[
          [188, 155],
          [210, 155],
        ]}
      />
      <Box
        x={212}
        y={214}
        width={164}
        height={58}
        title="Listener"
        note="Socket Mode · always on"
        accent
      />
      <Arrow
        id={id}
        points={[
          [294, 186],
          [294, 212],
        ]}
        both
      />

      <Arrow
        id={id}
        points={[
          [106, 184],
          [106, 328],
        ]}
      />
      <Label x={98} y={302} anchor="end">
        !fix, signed
      </Label>
      <Label x={98} y={316} anchor="end">
        max 3 rounds
      </Label>
      <Arrow
        id={id}
        points={[
          [212, 243],
          [150, 243],
          [150, 328],
        ]}
      />
      <Label x={156} y={236}>
        your tap
      </Label>
      <Arrow
        id={id}
        points={[
          [294, 274],
          [294, 328],
        ]}
        both
      />

      <Box
        x={24}
        y={330}
        width={164}
        height={58}
        title="Dev agent"
        note="acts only on ! commands"
      />
      <Box
        x={212}
        y={330}
        width={164}
        height={58}
        title="Your Slack DM"
        note="cards · buttons · questions"
      />

      <Box
        x={24}
        y={416}
        width={352}
        height={52}
        title="Cloud fallback · GitHub Actions"
        note="skips while the machine's heartbeat is under 15 min old"
        dashed
      />
    </Frame>
  );
}

function ChangeEvidenceDiagram() {
  const id = "arrow-change-evidence";
  const steps = [
    "Verify the pinned evaluator's sha512",
    "Check out the default branch, no stored token",
    "Fetch the PR as git objects, never checked out",
    "Extract evidence · base-branch policy · priority",
  ];
  return (
    <Frame
      id={id}
      height={432}
      title="change-evidence trust boundary: the pull request only triggers a run; a workflow from the default branch evaluates it"
    >
      <Zone
        x={8}
        y={8}
        width={384}
        height={124}
        label="UNTRUSTED · CONTROLLED BY THE PR AUTHOR"
      />
      <Box
        x={24}
        y={38}
        width={160}
        height={50}
        title="Pull request"
        note="code, workflows, title"
      />
      <Box
        x={216}
        y={38}
        width={160}
        height={50}
        title="Trigger workflow"
        note="PR's copy · no permissions"
        dashed
      />
      <Arrow
        id={id}
        points={[
          [184, 63],
          [214, 63],
        ]}
      />
      <Label x={200} y={115} anchor="middle">
        its output is never used, only its timing
      </Label>

      <Arrow
        id={id}
        points={[
          [296, 88],
          [296, 158],
        ]}
      />
      <Label x={304} y={150}>
        workflow_run
      </Label>

      <Zone
        x={8}
        y={160}
        width={384}
        height={192}
        label="TRUSTED · RUNS FROM THE DEFAULT BRANCH"
        accent
      />
      {steps.map((step, index) => {
        const y = 188 + index * 40;
        return (
          <g key={step}>
            <Box
              x={24}
              y={y}
              width={352}
              height={30}
              title={step}
              accent={index === 2}
            />
            {index < steps.length - 1 && (
              <Arrow
                id={id}
                points={[
                  [200, y + 30],
                  [200, y + 38],
                ]}
              />
            )}
          </g>
        );
      })}
      <Arrow
        id={id}
        points={[
          [200, 338],
          [200, 378],
        ]}
      />
      <Box
        x={50}
        y={380}
        width={300}
        height={44}
        title="Report on the PR"
        note="sticky comment · commit status"
      />
    </Frame>
  );
}

function Tangerine365Diagram() {
  const id = "arrow-tangerine365";
  return (
    <Frame
      id={id}
      height={414}
      title="First Bank on-premise deployment of Tangerine365: external load balancer, two web servers, internal load balancer, two app servers, central SQL Server"
    >
      <Box
        x={110}
        y={8}
        width={180}
        height={36}
        title="External load balancer"
      />
      <Arrow
        id={id}
        points={[
          [170, 44],
          [110, 78],
        ]}
      />
      <Arrow
        id={id}
        points={[
          [230, 44],
          [290, 78],
        ]}
      />
      <Box
        x={24}
        y={80}
        width={164}
        height={46}
        title="Web server"
        note="reverse proxy"
      />
      <Box
        x={212}
        y={80}
        width={164}
        height={46}
        title="Web server"
        note="reverse proxy"
      />
      <Arrow
        id={id}
        points={[
          [110, 126],
          [170, 158],
        ]}
      />
      <Arrow
        id={id}
        points={[
          [290, 126],
          [230, 158],
        ]}
      />
      <Box
        x={110}
        y={160}
        width={180}
        height={36}
        title="Internal load balancer"
      />
      <Arrow
        id={id}
        points={[
          [170, 196],
          [110, 230],
        ]}
      />
      <Arrow
        id={id}
        points={[
          [230, 196],
          [290, 230],
        ]}
      />
      <Box
        x={24}
        y={232}
        width={164}
        height={52}
        title="App server"
        note="Tangerine365 core + plugins"
        accent
      />
      <Box
        x={212}
        y={232}
        width={164}
        height={52}
        title="App server"
        note="Tangerine365 core + plugins"
        accent
      />
      <Arrow
        id={id}
        points={[
          [110, 284],
          [170, 318],
        ]}
      />
      <Arrow
        id={id}
        points={[
          [290, 284],
          [230, 318],
        ]}
      />
      <Box
        x={110}
        y={320}
        width={180}
        height={44}
        title="SQL Server"
        note="central database"
      />
      <Label x={200} y={390} anchor="middle">
        Same codebase as every other client:
      </Label>
      <Label x={200} y={405} anchor="middle">
        a runtime dispatcher picks the SQL Server driver.
      </Label>
    </Frame>
  );
}

export const diagrams = {
  "fleet-gate": {
    label: "Architecture",
    caption:
      "Two processes on the engineer's machine. GitHub is polled and Slack connects outward, so nothing listens on the internet.",
    Diagram: FleetGateDiagram,
  },
  "change-evidence": {
    label: "Trust boundary",
    caption:
      "The pull request can only start a run. Everything that judges it comes from the default branch, and its code is never executed.",
    Diagram: ChangeEvidenceDiagram,
  },
  tangerine365: {
    label: "First Bank deployment",
    caption:
      "The three-tier on-premise build, sized and designed to the bank's infrastructure requirements.",
    Diagram: Tangerine365Diagram,
  },
} as const;

export type DiagramKey = keyof typeof diagrams;
