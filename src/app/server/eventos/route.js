import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
  try {
    const eventos = await prisma.evento.findMany({
      orderBy: [
        {
          dateEvent: "asc",
        },
      ],
    });
    return NextResponse.json(eventos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
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
