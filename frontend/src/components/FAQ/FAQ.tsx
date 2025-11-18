import React, { useState } from "react";
import "./FAQ.css";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  items?: FAQItem[];
};

const defaultItems: FAQItem[] = [
  {
    question: "Sa kohë zgjat dorëzimi i porosisë?",
    answer:
      "Nëse produktet janë të gatshme, dorëzimi bëhet brenda 24–48 orëve. Për porosi të personalizuara, koha përshtatet sipas kërkesës.",
  },
  {
    question: "A ndihmoni me përzgjedhjen e madhësive?",
    answer:
      "Po, ju udhëzojmë për përshtatje të saktë sipas stafit dhe stilit të punës.",
  },
  {
    question: "Sa kohë merr prodhimi i një kicele?",
    answer:
      "Zakonisht 2–5 ditë pune, varësisht nga sasia dhe personalizimet e kërkuara.",
  },
  {
    question: "A ofroni uniforma të personalizuara me logo apo emër?",
    answer:
      "Po, qëndisim logon/emrin tuaj në disa pozicione dhe ngjyra sipas brendit.",
  },
  {
    question: "A mund të zgjidhet dizajni nga ekipi juaj?",
    answer:
      "Po. Ekipi ynë i dizajnit ju ndihmon me përzgjedhjen ose krijimin e dizajnit. Ne propozojmë mockup‑e, përshtatim ngjyrat, materialet dhe pozicionet e logos sipas identitetit të biznesit tuaj.",
  },
  {
    question: "A mund të porosis në distancë, pa ardhur fizikisht?",
    answer:
      "Po. Të gjitha porositë mund t’i realizojmë online: komunikojmë për masat dhe preferencat, dërgojmë foto/mostra sipas mundësisë, konfirmojmë dizajnin dhe organizojmë pagesën e dorëzimin me korrier.",
  },
];

const FAQ: React.FC<FAQProps> = ({
  title = "Pyetjet më të shpeshta",
  items = defaultItems,
}) => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq__title">{title}</h2>
        <ul className="faq__list" role="list">
          {items.map((it, idx) => {
            const isOpen = idx === openIndex;
            return (
              <li
                key={idx}
                className={["faq__item", isOpen ? "is-open" : ""].join(" ")}
              >
                <button
                  className="faq__button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                >
                  <span>{it.question}</span>
                  <span className="faq__icon" aria-hidden="true">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>
                {isOpen ? <div className="faq__answer">{it.answer}</div> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
