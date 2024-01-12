/* import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import bcrypt from 'bcrypt';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "Password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
        // user = fetchUserByEmail(credentials.email);
        console.log(credentials);
        const userFound = await prisma.users.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!userFound) throw new Error('Usuario no Encontrado');
        console.log(userFound);

        const matchPassword = await bcrypt.compare(credentials.password, userFound.password)
        if (!matchPassword) throw new Error('Password incorrecta');

        return {
          id: userFound.id,
          username: userFound.username,
          email: userFound.email,
          
        }
      },
    }),
  ],
  pages:{
    signIn : '/auth/login',
  },
  /* secret: process.env.JWT_SECRET, */
/* }; */

/* const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; */
 