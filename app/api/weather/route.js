import { NextResponse } from 'next/server';

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-28.46957&lon=-65.78524&appid=2c290850870ebbba2a0d95586f2aa709';

export async function GET() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error al llamar a la API' }, { status: 500 });
  }
}
