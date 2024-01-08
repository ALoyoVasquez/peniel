import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json("GET eventos")
}

export function POST() {
  return NextResponse.json("POST eventos")
}

export function PUT() {
  return NextResponse.json("PUT eventos")
}

export function DELETE() {
  return NextResponse.json("DELETE eventos")
}


 