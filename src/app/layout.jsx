import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'COCI PENIEL',
  description: 'Peniel somos Todos',
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

// app/layout.jsx
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    {/* <UserProvider loginUrl="/server/auth/login" profileUrl="/server/auth/me"> */}
    <UserProvider>
      <body>{children}</body>
    </UserProvider>
    </html>
  );
}