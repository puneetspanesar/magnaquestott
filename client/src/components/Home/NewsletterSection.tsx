import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertNewsletterSubscription } from "@shared/schema";

export default function NewsletterSection() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletterSubscription) => {
      return apiRequest("POST", "/api/newsletter-subscription", data);
    },
    onSuccess: () => {
      toast({
        title: "Successfully Subscribed",
        description: "You'll receive the latest insights and best practices in your inbox.",
      });
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Subscription Failed",
        description: "This email may already be subscribed or there was an error. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate({ email });
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fadeIn">
          <h2 className="text-3xl font-bold mb-4">
            Learn How to Grow Your Subscription Business With Magnaquest
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Stay updated with the latest insights and best practices
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-gray-900 rounded-r-none"
              required
            />
            <Button 
              type="submit"
              className="bg-accent hover:bg-accent/90 px-6 rounded-l-none font-semibold"
              disabled={newsletterMutation.isPending}
            >
              {newsletterMutation.isPending ? "..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
