import { context } from "esbuild";
import { solidPlugin } from "esbuild-plugin-solid";

let ctx = await context({
  entryPoints: ['src/index.tsx'],
  outfile: 'www/index.js',
  bundle: true,
  minify: true,
  target: ['chrome114', 'firefox113', 'safari16.5', 'edge114'],
  loader: {
    ".svg": "dataurl",
  },
  logLevel: "info",
  plugins: [solidPlugin()],
})

await ctx.watch();
await ctx.serve({
  servedir: 'www',
})

console.log('watching...')
