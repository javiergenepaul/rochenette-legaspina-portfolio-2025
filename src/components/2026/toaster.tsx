"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/2025/ui/toast";

// Repositions the toast viewport to the top-right so it doesn't sit
// behind the YearNavigator cards that are fixed at the bottom corners.
export function Toaster2026() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      {/* Override viewport to top-right — away from the year navigator */}
      <ToastViewport className="fixed top-4 right-4 z-[10000] flex max-h-screen w-full flex-col gap-2 p-0 sm:max-w-[420px] sm:bottom-auto sm:top-4" />
    </ToastProvider>
  );
}
