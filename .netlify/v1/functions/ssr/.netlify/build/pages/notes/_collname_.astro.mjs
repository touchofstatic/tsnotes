import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BUYoNlfu.mjs';
import 'kleur/colors';
/* empty css                                         */
import { $ as $$GlobalLayout } from '../../chunks/GlobalLayout_B8yYlJ91.mjs';
import { a as getCollection } from '../../chunks/_astro_content_CJUCjVpe.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$collname = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$collname;
  function assertCollectionName(name) {
    return ["undefined", "html", "css", "js", "astro", "github"].includes(name);
  }
  const { collname } = Astro2.params;
  if (!assertCollectionName(collname)) {
    throw new Error();
  }
  const collection = await getCollection(collname);
  return renderTemplate`${renderComponent($$result, "GlobalLayout", $$GlobalLayout, { "path": `${Astro2.url.pathname}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="collname"> ${collection.map((file) => renderTemplate`<li class="move-dir"> <a${addAttribute(`/notes/${collname}/${file.id}`, "href")}>
/${file.data.title} </a> </li>`)} </ul> ` })} <!-- src/notes/[collname]/.astro -->`;
}, "C:/Users/EugeneVV/dev-lessons/tsnotes/src/pages/notes/[collname].astro", void 0);

const $$file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/pages/notes/[collname].astro";
const $$url = "/notes/[collname]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$collname,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
