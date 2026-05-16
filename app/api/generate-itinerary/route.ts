import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { vibeType, groupSize, timeOfDay } = await request.json();

    const systemPrompt = `You are an expert local concierge who has lived in Cape Coral and Fort Myers, Florida for 15+ years. 
You know every hidden gem, best restaurants, boat tours, beaches, kayaking spots, fishing charters, sunset cruises, and local events in the area.
Always create realistic, creative, and highly personalized one-day itineraries for Southwest Florida (Cape Coral / Fort Myers area only).
Use real local names and places. Make it fun, detailed, and exciting.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { 
          role: "user", 
          content: `Create a perfect one-day itinerary for:
- Vibe: ${vibeType || 'relaxed'}
- Group size: ${groupSize} people
- Preferred start time: ${timeOfDay}

Return ONLY valid JSON with this exact structure (no extra text, no markdown):
{
  "title": "string",
  "date": "Saturday, May 23",
  "highlights": ["string", "string", "string", "string"],
  "note": "Personalized for X people • vibe • time start • Cape Coral / Fort Myers area"
}`
        }
      ],
      temperature: 0.8,
    });

    const jsonString = completion.choices[0].message.content || '{}';
    const itinerary = JSON.parse(jsonString);

    return NextResponse.json(itinerary);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate itinerary' }, { status: 500 });
  }
}