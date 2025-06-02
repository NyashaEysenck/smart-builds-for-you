import { useState } from "react";
import { Mail, Phone, ArrowRight, CheckCircle, XCircle } from "lucide-react"; // Import icons for success/error

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  // State for managing alert visibility and content
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' | null } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable button during submission

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button
    setAlert(null); // Clear previous alerts

    try {
      const formBody = new URLSearchParams(formData);

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyhvxBEVfRiMr2__O2I8qX4QaUlnylko84i5gaj1Zxo45MCjG_KbqTEOPIo5QdXSaCy/exec',
        {
          method: 'POST',
          body: formBody,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const result = await response.json();

      if (result.success) {
        setAlert({ message: "Thank you for your message! We'll get back to you shortly.", type: 'success' });
        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
        });
      } else {
        throw new Error(result.message || 'Unknown error from server');
      }
    } catch (error: any) {
      console.error('Error:', error);
      setAlert({ message: 'Error submitting form: ' + error.message, type: 'error' });
    } finally {
      setIsSubmitting(false); // Re-enable button
      // Optionally, hide the alert after a few seconds
      setTimeout(() => {
        setAlert(null);
      }, 7000); // Alert disappears after 7 seconds
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

        {/* Custom Alert Display */}
        {alert && (
          <div
            className={`mb-8 p-4 rounded-md flex items-center justify-between
              ${alert.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}
            `}
            role="alert"
          >
            <div className="flex items-center">
              {alert.type === 'success' ? (
                <CheckCircle size={20} className="mr-2" />
              ) : (
                <XCircle size={20} className="mr-2" />
              )}
              <span className="font-medium">{alert.message}</span>
            </div>
            <button
              onClick={() => setAlert(null)}
              className="ml-4 p-1 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2
                ${alert.type === 'success' ? 'text-green-800 hover:bg-green-200 focus:ring-green-500' : 'text-red-800 hover:bg-red-200 focus:ring-red-500'}
              "
              aria-label="Close alert"
            >
              <XCircle size={16} />
            </button>
          </div>
        )}
        {/* End Custom Alert Display */}

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
                  disabled={isSubmitting} // Disable button when submitting
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
