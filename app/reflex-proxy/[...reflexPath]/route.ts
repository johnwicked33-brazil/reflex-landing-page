import type { NextRequest } from "next/server";

import { getReflexProxyUrl } from "../../../lib/reflex-clone";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const REQUEST_HEADERS_TO_SKIP = new Set([
  "accept-encoding",
  "connection",
  "content-length",
  "host",
]);

const RESPONSE_HEADERS_TO_SKIP = new Set([
  "content-encoding",
  "content-length",
  "transfer-encoding",
]);

function forwardRequestHeaders(request: NextRequest) {
  const headers = new Headers();

  request.headers.forEach((value, key) => {
    if (!REQUEST_HEADERS_TO_SKIP.has(key.toLowerCase())) {
      headers.set(key, value);
    }
  });

  return headers;
}

function forwardResponseHeaders(response: Response) {
  const headers = new Headers();

  response.headers.forEach((value, key) => {
    if (!RESPONSE_HEADERS_TO_SKIP.has(key.toLowerCase())) {
      headers.set(key, value);
    }
  });

  return headers;
}

async function proxyRequest(
  request: NextRequest,
  params: Promise<{ reflexPath: string[] }>,
) {
  const { reflexPath } = await params;
  const upstreamUrl = getReflexProxyUrl(reflexPath, request.nextUrl.search);
  const upstreamResponse = await fetch(upstreamUrl, {
    headers: forwardRequestHeaders(request),
    method: request.method,
    redirect: "follow",
  });

  return new Response(
    request.method === "HEAD" ? null : upstreamResponse.body,
    {
      headers: forwardResponseHeaders(upstreamResponse),
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
    },
  );
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ reflexPath: string[] }> },
) {
  return proxyRequest(request, context.params);
}

export async function HEAD(
  request: NextRequest,
  context: { params: Promise<{ reflexPath: string[] }> },
) {
  return proxyRequest(request, context.params);
}
