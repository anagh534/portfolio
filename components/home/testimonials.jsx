import React from "react";

const testimonials = [
  {
    name: "Ramesh P.",
    company: "Calicut Online Store",
    image: "https://i.pravatar.cc/150?img=3",
    review:
      "Anagh delivered beyond expectations! Our business website looks professional and loads fast. The SEO improvements brought more leads in just a month.",
    rating: 5,
  },
  {
    name: "Fathima S.",
    company: "Dubai Interior Studio",
    image: "https://i.pravatar.cc/150?img=5",
    review:
      "I hired Anagh for a Flutter app and he was great to work with. Clear communication, clean code, and prompt delivery.",
    rating: 4,
  },
  {
    name: "Nihal K.",
    company: "Kasaragod Cafe POS",
    image: "https://i.pravatar.cc/150?img=7",
    review:
      "Anagh built a custom billing system for our restaurant in .NET. It's fast, easy to use, and works exactly as needed.",
    rating: 5,
  },
];

const Star = ({ filled }) => (
  <span className={`text-yellow-400 ${filled ? "text-yellow-400" : "text-gray-300"}`}>
    ★
  </span>
);

const TestimonialCard = ({ name, company, image, review, rating }) => (
  <div className="bg-white shadow-md rounded-2xl p-6 max-w-md w-full">
    <div className="flex items-center gap-4 mb-4">
      <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover" />
      <div>
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
    <p className="text-gray-700 mb-4">{review}</p>
    <div className="flex">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} filled={i <= rating} />
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Clients Say</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
