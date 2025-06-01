
import { useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyh9ZxNhVgm0q3903FmshA7Yx_PPeYT-nYCpjCvvxXYfiJfGQbWIxmd1fjYycYZOBI/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      
      if (result.success) {
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-background/80">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Need a smart system, a quick prototype, or just some expert guidance?
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">Contact Information</h3>
              <div className="flex items-center mb-4">
                <Mail size={20} className="text-accent mr-3" />
                <a href="mailto:your-email@example.com" className="text-foreground hover:text-accent">
                  your-email@example.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-accent mr-3" />
                <a href="tel:+1234567890" className="text-foreground hover:text-accent">
                  (123) 456-7890
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Availability</h3>
              <p className="text-foreground/80 mb-2">
                New project inquiries: 2-3 week lead time
              </p>
              <p className="text-foreground/80 mb-2">
                Mentorship sessions: 1 week lead time
              </p>
              <p className="text-foreground/80">
                Response time: Within 24 hours
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-primary focus:border-primary text-foreground"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-primary focus:border-primary text-foreground"
                />
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-1">
                  What are you interested in?
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-primary focus:border-primary text-foreground"
                >
                  <option value="">Select an option</option>
                  <option value="custom-development">Custom Development</option>
                  <option value="ai-tools">AI & ML Tools</option>
                  <option value="dashboard">Dashboard & Monitoring</option>
                  <option value="mvp">Rapid Prototype/MVP</option>
                  <option value="mentorship">Mentorship</option>
                  <option value="training">Technical Training</option>
                  <option value="review">Project Review</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-primary focus:border-primary text-foreground"
                  placeholder="Tell me about your project or question..."
                ></textarea>
              </div>
              
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="btn-primary flex items-center gap-2"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
                <a href="#" className="text-accent hover:text-accent/80 font-medium">
                  Schedule a call instead
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
