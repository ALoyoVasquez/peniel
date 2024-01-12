import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
  const eventos = await prisma.evento.findMany();

  return NextResponse.json(eventos);
}

export async function POST(request) {
  const data = await request.json();

  const newEvent = await prisma.evento.create({
    data: {
      title: data.title,
      dateEvent: data.dateEvent,
      place: data.place,
      status: "A",
    },
  });
  return NextResponse.json(newEvent);
}

export function PUT() {
  return NextResponse.json("PUT eventos");
}

export function DELETE() {
  return NextResponse.json("DELETE eventos");
}
