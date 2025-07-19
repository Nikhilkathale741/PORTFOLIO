import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out. I'm always open to discussing new
          opportunities.
        </p>

<div className="flex justify-center">
  <div className="space-y-8 text-center">
    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

    <div className="space-y-6">
      <div className="flex items-center gap-4 justify-center">
        <div className="p-3 rounded-full bg-primary/10">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium">Email</h4>
          <a
            href="mailto:Kathalenikhil741@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Kathalenikhil741@gmail.com
          </a>
        </div>
      </div>
      <div className="flex items-center  gap-4 justify-center">
        <div className="p-3 rounded-full bg-primary/10">
          <Phone className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium">Phone</h4>
          <a
            href="tel:+911234567890"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            +91-1234567890
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center">
        <div className="p-3 rounded-full bg-primary/10">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium">Location</h4>
          <p className="text-muted-foreground hover:text-primary transition-colors">
            Panvel, Navi Mumbai
          </p>
        </div>
      </div>
    </div>
    <div className="pt-8">
      <h4 className="font-medium mb-4">Connect With Me</h4>
      <div className="flex space-x-4 justify-center">
        <a
          href="https://www.linkedin.com/in/nikhil-kathale/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://x.com/NKathale94822"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};
