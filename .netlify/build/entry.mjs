import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_NNQNUSCr.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/notes/_collname_/_id_.astro.mjs');
const _page2 = () => import('./pages/notes/_collname_.astro.mjs');
const _page3 = () => import('./pages/resources/curios.astro.mjs');
const _page4 = () => import('./pages/resources/tools.astro.mjs');
const _page5 = () => import('./pages/resources/undefined.astro.mjs');
const _page6 = () => import('./pages/study/classes.astro.mjs');
const _page7 = () => import('./pages/study/lessons.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/notes/[collname]/[id].astro", _page1],
    ["src/pages/notes/[collname].astro", _page2],
    ["src/pages/resources/curios.mdx", _page3],
    ["src/pages/resources/tools.mdx", _page4],
    ["src/pages/resources/undefined.mdx", _page5],
    ["src/pages/study/classes.mdx", _page6],
    ["src/pages/study/lessons.mdx", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "603ce619-3791-411a-9762-c5e6c6dc8aa4"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
