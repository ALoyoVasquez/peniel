import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
  //Consultar BD
  const usuarios = await prisma.users.findMany();

  return NextResponse.json(usuarios);
}
export async function POST(request) {
  const data = await request.json();
  console.log(data);

  const newUser = await prisma.users.create({
    data: {
      username : data.username,
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      tipoUser: "User",
    },
  });
  return NextResponse.json(newUser);
}

export async function PUT(request, { params }) {
  //Consultar BD
  console.log("entra en PUT");
  try {
    const data = await request.json();

    console.log(params.id);
    const userUpdate = await prisma.users.update({
      where: { id: Number(params.id) },
      data: data,
    });
    return NextResponse.json(userUpdate, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
export function DELETE() {
  //Consultar BD

  return NextResponse.json("Hello DELETE");
}
