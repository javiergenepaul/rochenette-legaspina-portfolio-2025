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
import { useToast } from "@/hooks/use-toast";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const { toast } = useToast();
  const t = useTranslations();

  const FormSchema = z.object({
    email: z
      .string({
        message: translate(t, "contact.form.input.email.error.required"),
      })
      .email({
        message: translate(t, "contact.form.input.email.error.email"),
      })
      .min(10, {
        message: translate(t, "contact.form.input.email.error.min"),
      })
      .max(50, {
        message: translate(t, "contact.form.input.email.error.max"),
      })
      .nonempty({
        message: translate(t, "contact.form.input.email.error.required"),
      }),
    firstName: z
      .string({
        message: translate(t, "contact.form.input.firstName.error.required"),
      })
      .min(2, {
        message: translate(t, "contact.form.input.firstName.error.min"),
      })
      .max(50, {
        message: translate(t, "contact.form.input.firstName.error.max"),
      }),
    lastName: z
      .string({
        message: translate(t, "contact.form.input.lastName.error.required"),
      })
      .min(2, {
        message: translate(t, "contact.form.input.lastName.error.min"),
      })
      .max(50, {
        message: translate(t, "contact.form.input.lastName.error.max"),
      })
      .nonempty({
        message: translate(t, "contact.form.input.lastName.error.required"),
      }),
    message: z
      .string({
        message: translate(t, "contact.form.input.message.error.required"),
      })
      .max(250, {
        message: translate(t, "contact.form.input.message.error.max"),
      })
      .nonempty({
        message: translate(t, "contact.form.input.message.error.required"),
      }),
  });

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
    if (data.email && data.message) {
      toast({
        title: translate(t, "contact.form.toast.success.title"),
        description: translate(t, "contact.form.toast.success.message"),
      });
    }
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
                      maxLength={50}
                      className={
                        fieldState.invalid
                          ? "border-destructive text-destructive placeholder:text-destructive focus-visible:ring-destructive"
                          : "caret-primary"
                      }
                      type="text"
                      {...field}
                      placeholder={translate(
                        t,
                        "contact.form.input.firstName.placeholder"
                      )}
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
                      maxLength={50}
                      className={
                        fieldState.invalid
                          ? "border-destructive text-destructive placeholder:text-destructive focus-visible:ring-destructive"
                          : "caret-primary"
                      }
                      type="text"
                      {...field}
                      placeholder={translate(
                        t,
                        "contact.form.input.lastName.placeholder"
                      )}
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
                    maxLength={50}
                    className={
                      fieldState.invalid
                        ? "border-destructive text-destructive placeholder:text-destructive focus-visible:ring-destructive"
                        : "caret-primary"
                    }
                    type="email"
                    {...field}
                    placeholder={translate(
                      t,
                      "contact.form.input.email.placeholder"
                    )}
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
                    maxLength={255}
                    className={
                      fieldState.invalid
                        ? "border-destructive h-24 text-destructive placeholder:text-destructive focus-visible:ring-destructive"
                        : "caret-primary h-24"
                    }
                    {...field}
                    placeholder={translate(
                      t,
                      "contact.form.input.message.placeholder"
                    )}
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect="off"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full py-5 bg-amethyst-500 dark:text-white" type="submit">
          {translate(t, "contact.form.button")}
        </Button>
      </form>
    </Form>
  );
}
