
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();

    // Validate email address
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Read Brevo credentials
    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID);

    if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
      console.error("Brevo configuration is missing or invalid.");

      return NextResponse.json(
        { message: "Newsletter service is not configured yet." },
        { status: 500 }
      );
    }

    // Send subscriber to Brevo
    const brevoResponse = await fetch(
      "https://api.brevo.com/v3/contacts",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          email,
          listIds: [listId],
          updateEnabled: true,
        }),
      }
    );

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();

      console.error("Brevo subscription error:", errorData);

      return NextResponse.json(
        { message: "We could not complete your subscription. Please try again." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Thank you for subscribing to Naija Agric Insights!",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Newsletter API error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
