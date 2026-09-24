import { Fragment } from "react";

const clients = [
  { name: "Wema Bank", href: "https://wings.wemabank.com/" },
  { name: "First Bank", href: "https://mlearn.firstbanknigeria.com/" },
  {
    name: "PremiumTrust Bank",
    href: "https://learningmanagement.premiumtrustbank.com/",
  },
  { name: "Seven-Up Bottling Company", href: "https://learning.sevenup.org/" },
];

export default function ClientList() {
  return (
    <>
      {clients.map((client, i) => (
        <Fragment key={client.name}>
          {i > 0 && (i === clients.length - 1 ? ", and " : ", ")}
          <a
            href={client.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
          >
            {client.name}
          </a>
        </Fragment>
      ))}
    </>
  );
}
