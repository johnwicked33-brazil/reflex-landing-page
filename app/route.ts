import { getReflexCloneHtml } from "../lib/reflex-clone";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function htmlHeaders() {
  return {
    "cache-control": "no-store",
    "content-type": "text/html; charset=utf-8",
  };
}

export async function GET() {
  return new Response(getReflexCloneHtml(), {
    headers: htmlHeaders(),
    status: 200,
  });
}

export async function HEAD() {
  return new Response(null, {
    headers: htmlHeaders(),
    status: 200,
  });
}
