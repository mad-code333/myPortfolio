"use client";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { FormEvent, useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "johan.nilsson0311@outlook.com",
    href: "mailto:johan.nilsson0311@outlook.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+46 76 223 00 89",
    href: "tel:+46762230089",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Stockholm, Sweden",
  },
];

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const [message, setMessage] = useState("");

 async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setIsSending(true);
  setStatus("idle");
  setStatusMessage("");

  const form = e.currentTarget;

  const formData = new FormData(form);

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const messageValue = formData.get("message")?.toString().trim();

  if (!name || !email || !messageValue) {
    setStatus("error");
    setStatusMessage("Please fill in all required fields.");
    setIsSending(false);
    return;
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message: messageValue,
      }),
    });

    const contentType = response.headers.get("content-type");

    let data: { message?: string } = {};

    if (contentType?.includes("application/json")) {
      data = await response.json();
    }

    if (!response.ok) {
      throw new Error(
        data.message || `Failed to send message (${response.status}).`
      );
    }

    setStatus("success");
    setStatusMessage(
      "Thanks! Your message has been sent successfully."
    );

    form.reset();
    setMessage("");
  } catch (error) {
    console.error("Contact form error:", error);

    setStatus("error");
    setStatusMessage(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setIsSending(false);
  }
}

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        max-w-7xl
        mx-auto
        px-6
        py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          top-20
          right-20
          w-[350px]
          h-[350px]
          bg-purple-600/20
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[250px]
          h-[250px]
          bg-blue-600/10
          blur-[100px]
          rounded-full
          pointer-events-none
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          z-10
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
          md:p-12
          grid
          lg:grid-cols-2
          gap-16
          shadow-2xl
          shadow-purple-950/10
        "
      >
        {/* LEFT SIDE */}

        <div>
          <p
            className="
              text-sm
              tracking-[5px]
              uppercase
              text-purple-400
            "
          >
            Contact
          </p>

          <h2
            className="
              mt-5
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
            "
          >
            Let's build

            <span
              className="
                block
                bg-gradient-to-r
                from-purple-400
                to-blue-500
                text-transparent
                bg-clip-text
              "
            >
              something great.
            </span>
          </h2>

          <p
            className="
              mt-6
              text-gray-400
              text-lg
              max-w-md
              leading-relaxed
            "
          >
            Have an idea, product, or technical challenge?
            I help companies build scalable web applications,
            AI-powered products, and modern digital experiences.
          </p>

          {/* Contact Cards */}

          <div className="mt-10 space-y-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              const content = (
                <motion.div
                  whileHover={{
                    x: 8,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-5
                    p-5
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    hover:border-purple-400/40
                    hover:bg-white/[0.05]
                    transition
                  "
                >
                  <div
                    className="
                      w-12
                      h-12
                      flex
                      items-center
                      justify-center
                      rounded-xl
                      bg-purple-500/10
                      text-purple-400
                      group-hover:bg-purple-500/20
                      transition
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        text-gray-500
                        tracking-wider
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        text-gray-200
                        mt-1
                        group-hover:text-white
                        transition
                      "
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a
                  href={item.href}
                  key={index}
                  aria-label={`${item.title}: ${item.value}`}
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* NAME */}

          <div>
            <label
              htmlFor="name"
              className="
                text-sm
                text-gray-400
              "
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="John Smith"
              className="
                mt-2
                w-full
                rounded-xl
                bg-black/40
                border
                border-white/10
                px-5
                py-4
                text-white
                placeholder:text-gray-600
                outline-none
                focus:border-purple-400
                focus:ring-1
                focus:ring-purple-400/30
                transition
              "
            />
          </div>

          {/* EMAIL */}

          <div>
            <label
              htmlFor="email"
              className="
                text-sm
                text-gray-400
              "
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="john@example.com"
              className="
                mt-2
                w-full
                rounded-xl
                bg-black/40
                border
                border-white/10
                px-5
                py-4
                text-white
                placeholder:text-gray-600
                outline-none
                focus:border-purple-400
                focus:ring-1
                focus:ring-purple-400/30
                transition
              "
            />
          </div>

          {/* MESSAGE */}

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="message"
                className="
                  text-sm
                  text-gray-400
                "
              >
                Message
              </label>

              <span className="text-xs text-gray-600">
                {message.length}/2000
              </span>
            </div>

            <textarea
              id="message"
              name="message"
              rows={6}
              required
              maxLength={2000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
              className="
                mt-2
                w-full
                rounded-xl
                bg-black/40
                border
                border-white/10
                px-5
                py-4
                text-white
                placeholder:text-gray-600
                outline-none
                resize-none
                focus:border-purple-400
                focus:ring-1
                focus:ring-purple-400/30
                transition
              "
            />
          </div>

          {/* STATUS */}

          <AnimatePresence mode="wait">
            {status !== "idle" && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                className={`
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  ${
                    status === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }
                `}
              >
                {status === "success" ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <AlertCircle size={18} />
                )}

                <span>{statusMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SEND BUTTON */}

          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={!isSending ? { scale: 1.01 } : {}}
            whileTap={!isSending ? { scale: 0.98 } : {}}
            className="
              group
              flex
              items-center
              justify-center
              gap-3
              w-full
              rounded-xl
              bg-white
              text-black
              py-4
              font-semibold
              hover:bg-purple-400
              disabled:opacity-60
              disabled:cursor-not-allowed
              transition
            "
          >
            {isSending ? (
              <>
                <Loader2
                  size={20}
                  className="animate-spin"
                />

                Sending...
              </>
            ) : (
              <>
                Send Message

                <ArrowRight
                  size={20}
                  className="
                    group-hover:translate-x-1
                    transition
                  "
                />
              </>
            )}
          </motion.button>

          <p className="text-center text-xs text-gray-600">
            I usually respond within 24 hours.
          </p>
        </form>
      </motion.div>
    </section>
  );
}