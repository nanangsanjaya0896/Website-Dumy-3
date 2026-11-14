/**
 * Smoke test render — mendeteksi referensi komponen/variabel yang hilang.
 *
 * Vite/Rollup tidak menggagalkan build saat sebuah identifier tidak
 * terdefinisi (dianggap global), sehingga build bisa "sukses" tapi
 * halaman kosong saat dibuka. Skrip ini merender aplikasi ke string
 * lewat react-dom/server; kalau ada identifier hilang, render gagal
 * dan exit code jadi 1.
 *
 * Jalankan: npm run smoke
 */

import esbuild from "esbuild";
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const pages = [
  ["MainLayout + HomePage", "/", "HomePage"],
  ["ServicesPage", "/services", "ServicesPage"],
  ["AboutPage", "/about", "AboutPage"],
  ["ProjectsPage", "/projects", "ProjectsPage"],
  ["ContactPage", "/contact", "ContactPage"],
  ["ArticlesPage", "/artikel", "ArticlesPage"],
  ["ArticleDetailPage", "/artikel/:slug", "ArticleDetailPage", "cara-menghitung-kebutuhan-pk-ac"],
];

const imports = pages
  .map(
    ([, , name], i) =>
      `import P${i} from "./src/pages/${name}";`,
  )
  .join("\n");

const cases = pages
  .map(
    ([label, path, , slug], i) => `
  { label: ${JSON.stringify(label)}, path: ${JSON.stringify(
    slug ? path.replace(":slug", slug) : path,
  )}, Component: P${i} }`,
  )
  .join(",");

const entry = `
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter, Routes, Route } from "react-router";
import MainLayout from "./src/layouts/MainLayout";
${imports}

const cases = [${cases}];

let failed = 0;
for (const { label, path, Component } of cases) {
  try {
    const html = renderToStaticMarkup(
      React.createElement(MemoryRouter, { initialEntries: [path] },
        React.createElement(Routes, null,
          React.createElement(Route, { element: React.createElement(MainLayout) },
            React.createElement(Route, { path, element: React.createElement(Component) })
          )
        )
      )
    );
    if (!html || html.length < 500) throw new Error("markup terlalu pendek: " + html.length);
    console.log("  ok   " + label + " (" + html.length + " char)");
  } catch (error) {
    failed += 1;
    console.error("  GAGAL " + label + " -> " + error.message);
  }
}
process.exit(failed ? 1 : 0);
`;

const dir = mkdtempSync(join(tmpdir(), "sejukin-smoke-"));
const entryPath = join(root, ".smoke-entry.jsx");
const outPath = join(dir, "smoke.cjs");

writeFileSync(entryPath, entry, "utf8");

try {
  await esbuild.build({
    entryPoints: [entryPath],
    bundle: true,
    platform: "node",
    format: "cjs",
    jsx: "automatic",
    outfile: outPath,
    logLevel: "error",
    absWorkingDir: root,
  });
  execFileSync(process.execPath, [outPath], { stdio: "inherit" });
  console.log("Smoke test lulus.");
} catch (error) {
  console.error("Smoke test gagal.");
  process.exitCode = 1;
} finally {
  rmSync(entryPath, { force: true });
  rmSync(dir, { recursive: true, force: true });
}
