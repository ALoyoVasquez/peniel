import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function GET() {
  //Consultar BD
  const usuarios = await prisma.users.findMany({
    orderBy: [{ tipoUser: "asc" }, { name: "asc" }],
  }); 

  return NextResponse.json(usuarios);
}

export async function POST(request) {
  try {
    const data = await request.json();
    const userN = await prisma.users.findUnique({
      where: {
        username: data.username,
      },
    });
    const userE = await prisma.users.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userE) {
      return NextResponse.json(
        {
          message: "El correo electronico ya existe",
        },
        { status: 400 }
      );
    } else if (userN) {
      return NextResponse.json(
        {
          message: "El Nombre de usuario ya existe",
        },
        { status: 400 }
      );
    } else {
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
      return NextResponse.json(newUser);
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { ids } = request.body;
 /*  console.log("🚀 ~ ROUTES  ", params);
  console.log("🚀 ~ ROUTES ids ",ids);
  console.log("🚀 ~ ROUTES req ", request.body); */

  try {
    
    const userUpdate =  await prisma.users.deleteMany({
      where: { id: { in: ids, }, },
    });

    return NextResponse.json(userUpdate, { status: 200 });
  } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
  }
}