import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BUYoNlfu.mjs';
import 'kleur/colors';
import { $ as $$GlobalLayout } from '../../../chunks/GlobalLayout_B8yYlJ91.mjs';
import { g as getEntry, r as renderEntry } from '../../../chunks/_astro_content_CJUCjVpe.mjs';
/* empty css                                      */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
async function getStaticPaths() {
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { collname, id } = Astro2.params;
  if (id === void 0 || collname === void 0) {
    return Astro2.redirect("/404");
  }
  const entry = await getEntry(collname, id);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content, headings } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "GlobalLayout", $$GlobalLayout, { "path": `${Astro2.url.pathname}`, "headings": headings, "data-astro-cid-juydid4e": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<p data-astro-cid-juydid4e><a href="./" class="retvrn move-dir" data-astro-cid-juydid4e>/..</a></p> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-juydid4e": true })} ` })} <!-- src/notes/[collname]/[id].astro --> `;
}, "C:/Users/EugeneVV/dev-lessons/tsnotes/src/pages/notes/[collname]/[id].astro", void 0);

const $$file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/pages/notes/[collname]/[id].astro";
const $$url = "/notes/[collname]/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
