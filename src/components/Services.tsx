
import { Code, Bot, LineChart, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Custom Websites & Web Platforms",
      description: "Clean, reliable, and tailored for your business or product.",
      icon: <Code className="text-accent" size={32} />,
    },
    {
      title: "AI & Machine Learning Tools",
      description: "Smarter decision-making through prediction and automation.",
      icon: <Bot className="text-accent" size={32} />,
    },
    {
      title: "Dashboards & Monitoring Systems",
      description: "Real-time data visibility to help you stay in control.",
      icon: <LineChart className="text-accent" size={32} />,
    },
    {
      title: "Rapid Prototypes & MVPs",
      description: "Launch faster—turn your idea into a working demo.",
      icon: <Rocket className="text-accent" size={32} />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-background/80">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What I Offer</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Professional solutions tailored to your business needs, built with modern 
            technologies and a focus on reliability and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background/50 p-6 rounded-lg border border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 service-card"
            >
              <div className="mb-4 transform transition-transform hover:scale-110 duration-300">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-foreground/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
