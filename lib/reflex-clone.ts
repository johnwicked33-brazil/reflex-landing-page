import fs from "node:fs";
import path from "node:path";

import {
  applyReflexTextOverrides,
} from "../components/reflex/text-overrides";

const SOURCE_PATH = path.join(
  process.cwd(),
  "docs",
  "research",
  "reflex-source.html",
);
const REFLEX_ORIGIN = "https://www.reflexai.com";
const REFLEX_PROXY_PREFIX = "/reflex-proxy";

function prefixRootRelativeUrls(html: string) {
  return html
    .replace(
      /\b(href|src|poster|action)=["']\/(?!\/|#)/g,
      (_match, attribute: string) =>
        `${attribute}="${REFLEX_PROXY_PREFIX}/`,
    )
    .replace(/\bsrcset=["']([^"']+)["']/g, (_match, srcsetValue: string) => {
      const prefixedEntries = srcsetValue
        .split(",")
        .map((entry) => entry.trim())
        .map((entry) => {
          const parts = entry.split(/\s+/);
          const url = parts[0];
          const descriptor = parts.slice(1).join(" ");

          if (!url.startsWith("/") || url.startsWith("//")) {
            return entry;
          }

          return descriptor
            ? `${REFLEX_PROXY_PREFIX}${url} ${descriptor}`
            : `${REFLEX_PROXY_PREFIX}${url}`;
        });

      return `srcset="${prefixedEntries.join(", ")}"`;
    })
    .replace(/url\(\/(?!\/)/g, `url(${REFLEX_PROXY_PREFIX}/`)
    .replace(/"href":"\/(?!\/)/g, `"href":"${REFLEX_PROXY_PREFIX}/`)
    .replace(/"src":"\/(?!\/)/g, `"src":"${REFLEX_PROXY_PREFIX}/`)
    .replace(/"poster":"\/(?!\/)/g, `"poster":"${REFLEX_PROXY_PREFIX}/`);
}

export function getReflexCloneHtml() {
  const source = fs.readFileSync(SOURCE_PATH, "utf8");
  return prefixRootRelativeUrls(applyReflexTextOverrides(source));
}

export function getReflexProxyUrl(pathSegments: string[], search = "") {
  return `${REFLEX_ORIGIN}/${pathSegments.join("/")}${search}`;
}
