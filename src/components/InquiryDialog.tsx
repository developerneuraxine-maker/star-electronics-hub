import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";

interface InquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
}

const WHATSAPP_NUMBER = "917909050275";

export function InquiryDialog({ open, onOpenChange, defaultService = "" }: InquiryDialogProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: defaultService,
    issue: "",
    address: "",
    time: "",
    message: "",
  });

  const update =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.issue || !form.address || !form.time)
      return;
    const text = `Hi Star Electronics & Repering Centre 👋

I would like to make an inquiry.

Customer Name:
${form.name}

Phone Number:
${form.phone}

Product / Service:
${form.service}

Issue:
${form.issue}

Address:
${form.address}

Preferred Time:
${form.time}

Additional Message:
${form.message || "-"}

Thank You.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[92vh] overflow-y-auto border-gold bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-gold-gradient">
            Send Inquiry
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill the form and we'll receive your request directly on WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Customer Name *">
              <Input
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your full name"
              />
            </Field>
            <Field label="Phone Number *">
              <Input
                required
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="10-digit number"
                maxLength={15}
              />
            </Field>
          </div>
          <Field label="Product / Service Required *">
            <Input
              required
              value={form.service}
              onChange={update("service")}
              placeholder="e.g. Mobile Repair, LED Bulb"
            />
          </Field>
          <Field label="Issue Description *">
            <Textarea
              required
              value={form.issue}
              onChange={update("issue")}
              placeholder="Describe your requirement or issue"
              rows={3}
              maxLength={500}
            />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Address *">
              <Input
                required
                value={form.address}
                onChange={update("address")}
                placeholder="Your area, city"
              />
            </Field>
            <Field label="Preferred Time *">
              <Input
                required
                value={form.time}
                onChange={update("time")}
                placeholder="Morning / Evening / Time"
              />
            </Field>
          </div>
          <Field label="Additional Message">
            <Textarea
              value={form.message}
              onChange={update("message")}
              placeholder="Anything else?"
              rows={2}
              maxLength={400}
            />
          </Field>
          <Button type="submit" variant="gold" size="lg" className="w-full">
            <MessageCircle className="mr-2 h-5 w-5" />
            Send Inquiry on WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs uppercase tracking-wider text-primary/80">{label}</Label>
      {children}
    </div>
  );
}
