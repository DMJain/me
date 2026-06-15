"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const inputClasses =
  "w-full bg-transparent border-0 border-b border-canvas/20 font-sans text-sm text-canvas placeholder:text-canvas/40 py-3 focus:outline-none focus:border-canvas/60 transition-colors duration-150";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormData) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_EMAI_API_KEY,
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch {
      // silently fail — form stays filled so user can retry
    }
  };

  return (
    <div className="rounded-3xl bg-ink text-canvas p-8">
      <h3 className="font-serif text-xl font-bold text-canvas mb-6">
        Say Hello
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
        noValidate
      >
        <div>
          <input
            {...register("name")}
            placeholder="Name"
            autoComplete="name"
            className={inputClasses}
          />
          {errors.name && (
            <p className="font-sans text-xs text-accent mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            autoComplete="email"
            className={inputClasses}
          />
          {errors.email && (
            <p className="font-sans text-xs text-accent mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Message"
            className={`${inputClasses} resize-none`}
          />
          {errors.message && (
            <p className="font-sans text-xs text-accent mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 bg-canvas text-ink font-sans text-sm font-semibold py-3 rounded-full hover:bg-accent hover:text-canvas transition-all duration-250 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitted ? "Sent!" : isSubmitting ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
