import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const data = await request.json();
    const userFound = await prisma.users.findUnique({
      where: { email: data.email },
    });

    const userNameFound = await prisma.users.findUnique({
      where: { username: data.username },
    });

    if (userFound) {
      return NextResponse.json(
        {
          message: "Correo ya existe",
        },
        { status: 400 }
      );
    }
    if (userNameFound) {
      return NextResponse.json(
        {
          message: "Nombre de Usuario ya existe",
        },
        { status: 400 }
      );
    }

    const hashPassword = await bcrypt.hash(data.password, 10);

    const newUser = await prisma.users.create({
      data: {
        username: data.username,
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        password: hashPassword,
        tipoUser: "User",
      },
    });
    const { password: _, ...users } = newUser;

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
