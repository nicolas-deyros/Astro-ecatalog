export const prerender = false;

import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  try {
    const res = await fetch(
      "https://folletos.carrefour.com.ar/metadata/catalogs.json",
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
