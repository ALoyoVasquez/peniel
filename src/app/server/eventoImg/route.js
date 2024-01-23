import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request) {
  try {
    const eventos = await prisma.eventImg.findMany({
      orderBy: [ {  id: "asc", }, ],
    });
    return NextResponse.json(eventos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newEvent = await prisma.eventImg.create({
      data: {
        imagen: data.imagen,
        /* dateEvent: data.dateEvent,
        place: data.place,
        status: "A", */
      },
    });
    return NextResponse.json(newEvent, { status: 200 });
    // return NextResponse.json("POST IMG");
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
