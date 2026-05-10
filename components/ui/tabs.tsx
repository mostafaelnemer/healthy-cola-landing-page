"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "flex w-full items-center bg-white p-0 border border-[#e3d6ea] rounded-xl",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // Flexbox centering and equal width
        "flex-1 flex items-center justify-center gap-2 h-12 px-8 text-sm sm:text-base font-semibold border-none outline-none transition-colors whitespace-nowrap",
        // Borders only between tabs
        "first:border-l-0 border-l border-[#e3d6ea]",
        // Remove border for the first tab
        "first:rounded-l-xl last:rounded-r-xl",
        // State styles
        "data-[state=active]:bg-secondary data-[state=active]:text-white",
        "data-[state=inactive]:bg-[#FAFAFA] data-[state=inactive]:text-[#2E2A36]",
        className
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
