import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// This is your secret key. Only someone with this key can post data.
// In a real scenario, this would be in your .env.local file.
const IOT_SECRET_KEY = "ZS_PROD_9921_X"; 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { society_id, solar_units, grid_units, secret_key } = body;

    // 1. Security Check
    if (secret_key !== IOT_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized hardware' }, { status: 401 });
    }

    // 2. Data Validation
    if (!society_id || solar_units === undefined) {
      return NextResponse.json({ error: 'Missing telemetry data' }, { status: 400 });
    }

    // 3. Write to Database
    const { error } = await supabase
      .from('daily_generation')
      .insert([
        { 
          society_id, 
          solar_units, 
          grid_units: grid_units || 0, 
          record_date: new Date().toISOString().split('T')[0] // Sets today's date
        }
      ]);

    if (error) throw error;

    return NextResponse.json({ message: 'Telemetry recorded successfully' }, { status: 200 });

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}