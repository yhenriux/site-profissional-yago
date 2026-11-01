import { readFile, mkdir, writeFile } from 'node:fs/promises';

const html = await readFile('dist/index.html', 'utf8');
const app = await readFile('src/App.tsx', 'utf8');
const routes = [...app.matchAll(/<Route path="([^"*]+)"/g)].map(match => match[1]);
for (const route of routes) {
  if (route === '/') continue;
  const directory = `dist${route}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}
await writeFile('dist/404.html', html);
await writeFile('dist/.nojekyll', '');