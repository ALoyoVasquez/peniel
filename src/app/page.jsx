import Link from 'next/link';
import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
    <div className="container flex justify-between font-bold">
      <Link href="/servidores" className='text-sm sm:text-lg'>¿Quieres servir?</Link>
      <Link href="/sedes" className='text-sm sm:text-lg'>Sedes</Link>
     {/*  <Link href="/login">Log In</Link> */}

    </div>
    <h1 className="text-4xl font-bold sm:text-6xl">P  E  N  I  E  L</h1>
    <section className=" container text-xs mx-16 flex justify-between font-bold sm:text-lg">
      <Link href="/series">Series</Link>
      <Link href="/fundamental">Fundamental</Link>
      <Link href="/eventos">Eventos</Link>
      <Link href="/next">+ Pasos</Link>
    </section>
  </main>
   
  )
}
