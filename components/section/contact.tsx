"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/texarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Handle form submission
    
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
        console.log(result);
    }
    console.log(values)
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full gap-2">
                      Send Message
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>
                  You can also reach out to me through these platforms.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Button variant="outline" className="w-full gap-2" asChild>
                  <a href="mailto:darshan.j098@mail.com">
                    <Mail className="h-4 w-4" />
                    darshan.j098@gmail.com
                  </a>
                </Button>
                <Button variant="outline" className="w-full gap-2" asChild>
                  <a href="https://github.com/DMJain" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub Profile
                  </a>
                </Button>
                <Button variant="outline" className="w-full gap-2" asChild>
                  <a href="https://www.linkedin.com/in/darshan-jain-3687291a7/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </Button>
                <Button variant="outline" className="w-full gap-2" asChild>
                  <a href="https://peerlist.io/darshanjain" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Peerlist--Streamline-Iconoir" height="16" width="16"><desc>Peerlist Streamline Icon: https://streamlinehq.com</desc><path d="M5.234 0.98375h4.532c2.2135625 0 4.073125 1.6644375 4.3175625 3.8644374999999997l0.15256250000000002 1.3725c0.0945 0.8502500000000001 0.0945 1.708375 0 2.558625l-0.15256250000000002 1.3725c-0.2444375 2.2000625 -2.104 3.8644374999999997 -4.3175625 3.8644374999999997H5.234c-2.213625 0 -4.0731875 -1.664375 -4.317625 -3.8644374999999997l-0.1525 -1.3725c-0.09443750000000001 -0.8502500000000001 -0.09443750000000001 -1.708375 0 -2.558625l0.1525 -1.3725c0.2444375 -2.2 2.104 -3.8644374999999997 4.317625 -3.8644374999999997Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="M5.327937499999999 11.120125000000002v-2.896125m0 0V3.8798749999999997h2.8960625c1.199625 0 2.172125 0.9724375000000001 2.172125 2.1720625h0c0 1.199625 -0.9724375000000001 2.1720625 -2.172125 2.1720625H5.327937499999999Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path></svg>
                    Peerlist Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}