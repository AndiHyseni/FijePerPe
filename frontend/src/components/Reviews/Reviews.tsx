import React, { useRef } from "react";
import "./Reviews.css";

type Review = {
  id: string;
  company: string;
  city: string;
  text: string;
  verified?: boolean;
  rating?: number;
};

const reviews: Review[] = [
  {
    id: "1",
    company: "Sacor Coffee & More",
    city: "New York City",
    text: "I'm blown away by the quality and style of the clothes I received. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    verified: true,
    rating: 5,
  },
  {
    id: "2",
    company: "La Tarte",
    city: "New York City",
    text: "Quality materials and excellent craftsmanship. The team delivered exactly what we needed, on time and with care to detail.",
    verified: true,
    rating: 5,
  },
  {
    id: "3",
    company: "Sacor Coffee & More",
    city: "New York City",
    text: "Great communication and beautiful work. We’ll definitely collaborate again for future uniforms.",
    verified: true,
    rating: 5,
  },
  {
    id: "4",
    company: "Seven Gym",
    city: "New York City",
    text: "Comfortable, durable and stylish – our staff loves the new uniforms. Highly recommended.",
    verified: true,
    rating: 5,
  },
];

const Star: React.FC = () => (
  <svg
    width="22.5"
    height="22.5"
    viewBox="0 0 24 24"
    fill="#f0b429"
    aria-hidden="true"
  >
    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.168L12 18.897l-7.335 3.869 1.401-8.168L.132 9.211l8.2-1.193L12 .587z" />
  </svg>
);

const VerifiedDot: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="12" fill="#22c55e" />
    <path
      d="M7 12.5l3 3 7-7"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Reviews: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const scrollByViewport = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = dir === "left" ? -el.clientWidth : el.clientWidth;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };
  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <h2 id="reviews-title" className="reviews__title">
          Çfarë thonë klientët tanë
        </h2>

        <div className="reviews__track" ref={trackRef}>
          {reviews.map((r) => (
            <article key={r.id} className="review-card">
              <div className="review-card__top">
                <div
                  className="review-card__stars"
                  aria-label={`${r.rating} out of 5 stars`}
                >
                  {Array.from({ length: r.rating ?? 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <div className="review-card__city">{r.city}</div>
              </div>
              <div className="review-card__company">
                <span>{r.company}</span>
                {r.verified ? (
                  <span className="review-card__verified" title="Verified">
                    <VerifiedDot />
                  </span>
                ) : null}
              </div>
              <p className="review-card__text">{r.text}</p>
            </article>
          ))}
        </div>

        <div className="reviews__nav">
          <button
            className="reviews__nav-btn"
            type="button"
            aria-label="Previous reviews"
            onClick={() => scrollByViewport("left")}
          >
            ←
          </button>
          <button
            className="reviews__nav-btn"
            type="button"
            aria-label="Next reviews"
            onClick={() => scrollByViewport("right")}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
