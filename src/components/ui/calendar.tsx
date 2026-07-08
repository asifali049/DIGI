"use client";

import * as React from "react";
import { DayPicker, type DayPickerProps } from "react-day-picker";

import "react-day-picker/style.css";

import { cn } from "@/lib/utils";

export type CalendarProps = DayPickerProps;

export function Calendar({
  className,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("rounded-xl", className)}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";