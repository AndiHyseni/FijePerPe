import React from "react";

export type Feature = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

const defaultFeatures: Feature[] = [
  {
    title: "Uniforma të personalizuara",
    description: "Për masat, ngjyrat dhe detajet e biznesit tuaj.",
  },
  {
    title: "Materiale të qëndrueshme",
    description: "Cilësi e lartë për përdorim të përditshëm dhe jetëgjatësi.",
  },
  {
    title: "Prodhim dhe dorëzim i shpejtë",
    description: "Afate të qarta dhe komunikim i vazhdueshëm.",
  },
];

const SewingIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 17h16M6 13h12M8 9h8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const RulerIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path d="M3 14l8-8 7 7-8 8-7-7z" stroke="currentColor" strokeWidth="2" />
    <path d="M7 13l3-3M9 15l3-3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const TruckIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 7h11v8H3zM14 10h4l3 3v2h-7V10z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="7" cy="18" r="2" fill="currentColor" />
    <circle cx="17" cy="18" r="2" fill="currentColor" />
  </svg>
);

const iconNodes = [<RulerIcon />, <SewingIcon />, <TruckIcon />];

type FeaturesProps = {
  items?: Feature[];
};

const Features: React.FC<FeaturesProps> = ({ items = defaultFeatures }) => {
  return (
    <section className="features" aria-label="Pse të zgjidhni FIJE PER PE">
      <div className="container">
        <div className="features__grid">
          {items.map((f, idx) => (
            <article className="feature" key={f.title}>
              <div className="feature__icon" aria-hidden="true">
                {f.icon ?? iconNodes[idx % iconNodes.length]}
              </div>
              <div>
                <h3 className="feature__title">{f.title}</h3>
                {f.description ? (
                  <p className="feature__desc">{f.description}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
