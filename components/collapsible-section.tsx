"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

type CollapsibleSectionProps = {
  title: string;
  className?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export default function CollapsibleSection({
  title,
  className,
  defaultOpen = false,
  children,
}: CollapsibleSectionProps) {
  const [open, setOpen] = useState<boolean>(defaultOpen);

  return (
    <div className={cn("py-8", className)}>
      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                aria-label={open ? `Collapse ${title}` : `Expand ${title}`}
              >
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    open ? "rotate-180" : "rotate-0",
                  )}
                />
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>
        <CollapsibleContent className="mt-6">{children}</CollapsibleContent>
      </Collapsible>
    </div>
  );
}
