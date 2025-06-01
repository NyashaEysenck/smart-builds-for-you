
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Delivered exactly what I needed—even explained things clearly when I had no tech background.",
      author: "Jamie Smith",
      position: "Startup Founder",
      rating: 5,
    },
    {
      quote:
        "My idea went from a sketch to a working tool in just 10 days.",
      author: "Alex Johnson",
      position: "Marketing Director",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Testimonials & Results
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Don't take my word for it - here's what clients have to say about working together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background/50 p-8 rounded-lg shadow-sm border border-border"
            >
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-secondary fill-secondary"
                  />
                ))}
              </div>
              <blockquote className="text-xl italic mb-6 text-foreground">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-accent/30 mr-4"></div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-foreground/70 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
