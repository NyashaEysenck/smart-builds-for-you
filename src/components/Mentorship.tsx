
import { User, BookOpen, HelpCircle, ArrowRight } from "lucide-react";

const Mentorship = () => {
  const additionalServices = [
    {
      title: "One-on-One Mentorship",
      description:
        "Guidance for beginners or startup founders trying to understand software or AI.",
      icon: <User className="text-accent" size={32} />,
    },
    {
      title: "Technical Training",
      description:
        "Personalized teaching on machine learning, Python, or web development—ideal for individuals or small teams.",
      icon: <BookOpen className="text-accent" size={32} />,
    },
    {
      title: "Project Reviews & Troubleshooting",
      description:
        "Already building something? I'll help review, debug, or improve it.",
      icon: <HelpCircle className="text-accent" size={32} />,
    },
  ];

  return (
    <section id="mentorship" className="section-padding bg-background/80">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Support Beyond Just Building
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I offer more than just development services - get the guidance and support 
            you need at any stage of your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="bg-background/50 p-8 rounded-lg border border-border shadow-sm card-hover flex flex-col"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-foreground/80 flex-grow">{service.description}</p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="text-accent font-medium hover:text-accent/80 inline-flex items-center"
                >
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
