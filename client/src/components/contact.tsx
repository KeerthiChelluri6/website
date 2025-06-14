import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, and innovative AI projects.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-2xl text-blue-300"></i>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:keerthichelluri6@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                    keerthichelluri6@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone text-2xl text-blue-300"></i>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+15715644960" className="text-blue-200 hover:text-white transition-colors">
                    +1 (571) 564-4960
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fab fa-linkedin text-2xl text-blue-300"></i>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/keerthi-chelluri/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                    linkedin.com/in/keerthi-chelluri
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-white transition-colors" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-white transition-colors" 
                />
              </div>
              <div>
                <textarea 
                  rows={4} 
                  name="message"
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
              <button type="submit" className="w-full bg-white text-blue-900 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
