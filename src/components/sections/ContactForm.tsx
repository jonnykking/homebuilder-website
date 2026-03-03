"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Container, Button, Input, Textarea } from "@/components/ui";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";

export interface ContactInfo {
  phone?: string;
  email?: string;
  address?: string;
  hours?: string;
}

export interface ContactFormProps {
  title: string;
  subtitle?: string;
  description?: string;
  contactInfo?: ContactInfo;
  fields?: {
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    subject?: boolean;
    message?: boolean;
  };
  submitButtonText?: string;
  successMessage?: string;
  variant?: "default" | "split" | "centered";
  onSubmit?: (data: ContactFormData) => Promise<void> | void;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

const ContactForm = React.forwardRef<HTMLElement, ContactFormProps>(
  (
    {
      title,
      subtitle,
      description,
      contactInfo,
      fields = {
        name: true,
        email: true,
        phone: true,
        subject: true,
        message: true,
      },
      submitButtonText = "Send Message",
      successMessage = "Thank you! We'll be in touch soon.",
      variant = "default",
      onSubmit,
    },
    ref
  ) => {
    const [formData, setFormData] = React.useState<ContactFormData>({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    const [errors, setErrors] = React.useState<
      Partial<Record<keyof ContactFormData, string>>
    >({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const validateForm = () => {
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

      if (fields.name && !formData.name.trim()) {
        newErrors.name = "Name is required";
      }

      if (fields.email) {
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email";
        }
      }

      if (fields.message && !formData.message.trim()) {
        newErrors.message = "Message is required";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) return;

      setIsSubmitting(true);

      try {
        if (onSubmit) {
          await onSubmit(formData);
        } else {
          // Default behavior - simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1500));
        }
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch {
        setErrors({ message: "Something went wrong. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof ContactFormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    };

    const renderContactInfo = () => (
      <div className="space-y-6">
        {contactInfo?.phone && (
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-start gap-4 text-gray-600 hover:text-primary-600 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
              <Phone className="w-6 h-6 text-primary-600 group-hover:text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p className="text-lg">{contactInfo.phone}</p>
            </div>
          </a>
        )}
        {contactInfo?.email && (
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-start gap-4 text-gray-600 hover:text-primary-600 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
              <Mail className="w-6 h-6 text-primary-600 group-hover:text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-lg">{contactInfo.email}</p>
            </div>
          </a>
        )}
        {contactInfo?.address && (
          <div className="flex items-start gap-4 text-gray-600">
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Address</p>
              <p className="text-lg">{contactInfo.address}</p>
            </div>
          </div>
        )}
        {contactInfo?.hours && (
          <div className="flex items-start gap-4 text-gray-600">
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Business Hours</p>
              <p className="text-lg">{contactInfo.hours}</p>
            </div>
          </div>
        )}
      </div>
    );

    const renderForm = () => (
      <form onSubmit={handleSubmit} className="space-y-6">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-600">{successMessage}</p>
          </motion.div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 gap-6">
              {fields.name && (
                <Input
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
              )}
              {fields.email && (
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {fields.phone && (
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              )}
              {fields.subject && (
                <Input
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              )}
            </div>
            {fields.message && (
              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                rows={5}
                required
              />
            )}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              rightIcon={<Send size={18} />}
              fullWidth
            >
              {submitButtonText}
            </Button>
          </>
        )}
      </form>
    );

    if (variant === "split") {
      return (
        <section
          ref={ref}
          className="py-16 lg:py-24 bg-white"
          aria-labelledby="contact-title"
        >
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {subtitle && (
                  <p className="text-sm font-semibold tracking-wide uppercase text-primary-600 mb-4">
                    {subtitle}
                  </p>
                )}
                <h2
                  id="contact-title"
                  className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6"
                >
                  {title}
                </h2>
                {description && (
                  <p className="text-lg text-gray-600 mb-8">{description}</p>
                )}
                {contactInfo && renderContactInfo()}
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                {renderForm()}
              </motion.div>
            </div>
          </Container>
        </section>
      );
    }

    if (variant === "centered") {
      return (
        <section
          ref={ref}
          className="py-16 lg:py-24 bg-gray-50"
          aria-labelledby="contact-title"
        >
          <Container size="md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              {subtitle && (
                <p className="text-sm font-semibold tracking-wide uppercase text-primary-600 mb-4">
                  {subtitle}
                </p>
              )}
              <h2
                id="contact-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6"
              >
                {title}
              </h2>
              {description && (
                <p className="text-lg text-gray-600">{description}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              {renderForm()}
            </motion.div>
          </Container>
        </section>
      );
    }

    // Default variant
    return (
      <section
        ref={ref}
        className="py-16 lg:py-24 bg-white"
        aria-labelledby="contact-title"
      >
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {subtitle && (
                <p className="text-sm font-semibold tracking-wide uppercase text-primary-600 mb-4">
                  {subtitle}
                </p>
              )}
              <h2
                id="contact-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6"
              >
                {title}
              </h2>
              {description && (
                <p className="text-lg text-gray-600 mb-8">{description}</p>
              )}
              {contactInfo && renderContactInfo()}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {renderForm()}
            </motion.div>
          </div>
        </Container>
      </section>
    );
  }
);

ContactForm.displayName = "ContactForm";

export { ContactForm };
