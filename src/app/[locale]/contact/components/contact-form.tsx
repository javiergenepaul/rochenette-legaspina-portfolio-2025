"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .min(10, {
      message: "Email must be at least 10 characters.",
    })
    .max(50, {
      message: "Email must not be longer than 50 characters.",
    })
    .nonempty({ message: "Email is required." }),
  firstName: z
    .string({ message: "First name is required." })
    .min(2, {
      message: "First name must be at least 2 characters.",
    })
    .max(50, {
      message: "First name must not be longer than 50 characters.",
    }),
  lastName: z
    .string({ message: "Last name is required." })
    .min(2, {
      message: "Last name must be at least 2 characters.",
    })
    .max(50, {
      message: "Last name must not be longer than 50 characters.",
    })
    .nonempty({ message: "Last name is required." }),
  message: z
    .string()
    .max(200, {
      message: "Message must not be longer than 200 characters.",
    })
    .nonempty({ message: "Message is required." }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field, fieldState }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className={
                        fieldState.invalid
                          ? "border-destructive text-destructive placeholder:text-destructive focus-visible:ring-destructive"
                          : "caret-primary"
                      }
                      type="text"
                      {...field}
                      placeholder="First Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field, fieldState }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className={
                        fieldState.invalid
                          ? "border-destructive text-destructive placeholder:text-destructive focus-visible:ring-destructive"
                          : "caret-primary"
                      }
                      type="text"
                      {...field}
                      placeholder="Last Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className={
                      fieldState.invalid
                        ? "border-destructive text-destructive placeholder:text-destructive focus-visible:ring-destructive"
                        : "caret-primary"
                    }
                    type="email"
                    {...field}
                    placeholder="Email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field, fieldState }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    className={
                      fieldState.invalid
                        ? "border-destructive text-destructive placeholder:text-destructive focus-visible:ring-destructive"
                        : "caret-primary"
                    }
                    {...field}
                    placeholder="Type your message here"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full" type="submit">Send message</Button>
      </form>
    </Form>
  );
}
