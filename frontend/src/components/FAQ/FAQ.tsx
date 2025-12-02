import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./FAQ.css";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  items?: FAQItem[];
};

const FAQ: React.FC<FAQProps> = ({ title, items }) => {
  const { t } = useTranslation();

  const defaultTitle = t("faq.title");
  const defaultItems: FAQItem[] = [
    {
      question: t("faq.items.delivery.question"),
      answer: t("faq.items.delivery.answer"),
    },
    {
      question: t("faq.items.sizes.question"),
      answer: t("faq.items.sizes.answer"),
    },
    {
      question: t("faq.items.production.question"),
      answer: t("faq.items.production.answer"),
    },
    {
      question: t("faq.items.customization.question"),
      answer: t("faq.items.customization.answer"),
    },
    {
      question: t("faq.items.design.question"),
      answer: t("faq.items.design.answer"),
    },
    {
      question: t("faq.items.remote.question"),
      answer: t("faq.items.remote.answer"),
    },
  ];

  const finalTitle = title || defaultTitle;
  const finalItems = items || defaultItems;
  const [openIndex, setOpenIndex] = useState<number>(0);
  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq__title">{finalTitle}</h2>
        <ul className="faq__list" role="list">
          {finalItems.map((it, idx) => {
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
