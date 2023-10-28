"use client";

import Image from "next/image";
import Box from "@mui/joy/Box";

import { CardPluto } from "@/components/CardPluto";
import { CardPlanTrip } from "@/components/CardPlanTrip";
import { CardBooking } from "@/components/CardBooking";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      <CardPluto />
      <CardPlanTrip />
      <CardBooking />
    </Box>
  );
}
