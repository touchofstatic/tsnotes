import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, l as decodeKey } from './chunks/astro/server_BUYoNlfu.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/EugeneVV/dev-lessons/tsnotes/","cacheDir":"file:///C:/Users/EugeneVV/dev-lessons/tsnotes/node_modules/.astro/","outDir":"file:///C:/Users/EugeneVV/dev-lessons/tsnotes/dist/","srcDir":"file:///C:/Users/EugeneVV/dev-lessons/tsnotes/src/","publicDir":"file:///C:/Users/EugeneVV/dev-lessons/tsnotes/public/","buildClientDir":"file:///C:/Users/EugeneVV/dev-lessons/tsnotes/dist/","buildServerDir":"file:///C:/Users/EugeneVV/dev-lessons/tsnotes/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"resources/curios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resources/curios","isIndex":false,"type":"page","pattern":"^\\/resources\\/curios\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}],[{"content":"curios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources/curios.mdx","pathname":"/resources/curios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"resources/tools/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resources/tools","isIndex":false,"type":"page","pattern":"^\\/resources\\/tools\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}],[{"content":"tools","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources/tools.mdx","pathname":"/resources/tools","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"resources/undefined/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resources/undefined","isIndex":false,"type":"page","pattern":"^\\/resources\\/undefined\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}],[{"content":"undefined","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources/undefined.mdx","pathname":"/resources/undefined","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"study/classes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/study/classes","isIndex":false,"type":"page","pattern":"^\\/study\\/classes\\/?$","segments":[[{"content":"study","dynamic":false,"spread":false}],[{"content":"classes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/study/classes.mdx","pathname":"/study/classes","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"study/lessons/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/study/lessons","isIndex":false,"type":"page","pattern":"^\\/study\\/lessons\\/?$","segments":[[{"content":"study","dynamic":false,"spread":false}],[{"content":"lessons","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/study/lessons.mdx","pathname":"/study/lessons","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DY9WDLts.css"},{"type":"inline","content":".retvrn[data-astro-cid-juydid4e]{display:block;width:100%}\n"}],"routeData":{"route":"/notes/[collname]/[id]","isIndex":false,"type":"page","pattern":"^\\/notes\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"notes","dynamic":false,"spread":false}],[{"content":"collname","dynamic":true,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["collname","id"],"component":"src/pages/notes/[collname]/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".collname{list-style-type:none}.collname li:before{content:\"\"}.collname li a{display:block;width:100%}\n"},{"type":"external","src":"/_astro/index.DY9WDLts.css"}],"routeData":{"route":"/notes/[collname]","isIndex":false,"type":"page","pattern":"^\\/notes\\/([^/]+?)\\/?$","segments":[[{"content":"notes","dynamic":false,"spread":false}],[{"content":"collname","dynamic":true,"spread":false}]],"params":["collname"],"component":"src/pages/notes/[collname].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/EugeneVV/dev-lessons/tsnotes/src/pages/notes/[collname].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/notes/[collname]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/EugeneVV/dev-lessons/tsnotes/src/pages/notes/[collname]/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/notes/[collname]/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/EugeneVV/dev-lessons/tsnotes/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/EugeneVV/dev-lessons/tsnotes/src/pages/resources/curios.mdx",{"propagation":"none","containsHead":true}],["C:/Users/EugeneVV/dev-lessons/tsnotes/src/pages/resources/tools.mdx",{"propagation":"none","containsHead":true}],["C:/Users/EugeneVV/dev-lessons/tsnotes/src/pages/resources/undefined.mdx",{"propagation":"none","containsHead":true}],["C:/Users/EugeneVV/dev-lessons/tsnotes/src/pages/study/classes.mdx",{"propagation":"none","containsHead":true}],["C:/Users/EugeneVV/dev-lessons/tsnotes/src/pages/study/lessons.mdx",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/notes/[collname]/[id]@_@astro":"pages/notes/_collname_/_id_.astro.mjs","\u0000@astro-page:src/pages/notes/[collname]@_@astro":"pages/notes/_collname_.astro.mjs","\u0000@astro-page:src/pages/resources/curios@_@mdx":"pages/resources/curios.astro.mjs","\u0000@astro-page:src/pages/resources/tools@_@mdx":"pages/resources/tools.astro.mjs","\u0000@astro-page:src/pages/resources/undefined@_@mdx":"pages/resources/undefined.astro.mjs","\u0000@astro-page:src/pages/study/classes@_@mdx":"pages/study/classes.astro.mjs","\u0000@astro-page:src/pages/study/lessons@_@mdx":"pages/study/lessons.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_NNQNUSCr.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dz2yvJBG.mjs","C:\\Users\\EugeneVV\\dev-lessons\\tsnotes\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\EugeneVV\\dev-lessons\\tsnotes\\.astro\\content-modules.mjs":"chunks/content-modules_By3F0bgT.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_6uTcPXd1.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/accessible.mdx?astroPropagatedAssets":"chunks/accessible_CRIe00FW.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/links-buttons.mdx?astroPropagatedAssets":"chunks/links-buttons_BaT6cbKo.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/open-tab.mdx?astroPropagatedAssets":"chunks/open-tab_DeuA-laR.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/test.mdx?astroPropagatedAssets":"chunks/test_Cow78W1k.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/responsive.mdx?astroPropagatedAssets":"chunks/responsive_BAVv2ORC.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/anchor-link.mdx?astroPropagatedAssets":"chunks/anchor-link_CiLnlEzB.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/favicon.mdx?astroPropagatedAssets":"chunks/favicon_De-8UQWT.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/html-markdown.mdx?astroPropagatedAssets":"chunks/html-markdown_D4WXjwkx.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/center.mdx?astroPropagatedAssets":"chunks/center_Vh_aFjpb.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/shortcut-wrap.mdx?astroPropagatedAssets":"chunks/shortcut-wrap_C6C2wefE.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/fit-images.mdx?astroPropagatedAssets":"chunks/fit-images_CHkWGBBv.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/hide.mdx?astroPropagatedAssets":"chunks/hide_DlBXuYGy.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/fullscreen.mdx?astroPropagatedAssets":"chunks/fullscreen_Dut1fMwz.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/grid.mdx?astroPropagatedAssets":"chunks/grid_Gl4stJDd.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/drop-caps.mdx?astroPropagatedAssets":"chunks/drop-caps_CneRAl3N.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/table.mdx?astroPropagatedAssets":"chunks/table_DN2rOdiH.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/shape-path.mdx?astroPropagatedAssets":"chunks/shape-path_DKa0P-HN.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/text.mdx?astroPropagatedAssets":"chunks/text_CPIqrfRn.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/canvas.mdx?astroPropagatedAssets":"chunks/canvas_C6bakzJJ.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/asyncronous.mdx?astroPropagatedAssets":"chunks/asyncronous_Ch2mt1oo.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/units.mdx?astroPropagatedAssets":"chunks/units_BV0c_Ddi.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/date.mdx?astroPropagatedAssets":"chunks/date_9e4n4R4p.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/external-inline.mdx?astroPropagatedAssets":"chunks/external-inline_uO22DGh0.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/astro-typescript.mdx?astroPropagatedAssets":"chunks/astro-typescript_DPBoE9Jj.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/timed.mdx?astroPropagatedAssets":"chunks/timed_CGolBAvl.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/astro-db.mdx?astroPropagatedAssets":"chunks/astro-db_BLpvXPlg.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/db-case-insensitive-search.mdx?astroPropagatedAssets":"chunks/db-case-insensitive-search_CKh_TzSm.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/collection-entry-headers.mdx?astroPropagatedAssets":"chunks/collection-entry-headers_BDXP2Hv2.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/db-query-string.mdx?astroPropagatedAssets":"chunks/db-query-string_ho12tOvy.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/db-returning.mdx?astroPropagatedAssets":"chunks/db-returning_CORgi4-l.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/db-row-exists.mdx?astroPropagatedAssets":"chunks/db-row-exists_Bmx_KCYc.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/db-row-created-date.mdx?astroPropagatedAssets":"chunks/db-row-created-date_ClHPMoD0.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/github/secret-leak.mdx?astroPropagatedAssets":"chunks/secret-leak_CZZAG7G8.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/accessible.mdx":"chunks/accessible_PvU_1AcU.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/links-buttons.mdx":"chunks/links-buttons_BUdg5JIj.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/open-tab.mdx":"chunks/open-tab_Cpf9Tek6.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/test.mdx":"chunks/test_DXCH63Cb.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/responsive.mdx":"chunks/responsive_BbTzctq4.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/anchor-link.mdx":"chunks/anchor-link_BQirRwlL.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/favicon.mdx":"chunks/favicon_vNMmdajz.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/html-markdown.mdx":"chunks/html-markdown_DZCjLAuP.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/center.mdx":"chunks/center_DRvZaUrK.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/shortcut-wrap.mdx":"chunks/shortcut-wrap_DUrVGVil.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/fit-images.mdx":"chunks/fit-images_tuis6Sq0.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/hide.mdx":"chunks/hide_CTM9zAFY.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/fullscreen.mdx":"chunks/fullscreen_BwKMWcrN.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/grid.mdx":"chunks/grid_DHHhw6la.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/drop-caps.mdx":"chunks/drop-caps_CKdBmnPR.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/table.mdx":"chunks/table_CAFypNjm.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/shape-path.mdx":"chunks/shape-path_Ca45F_B0.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/text.mdx":"chunks/text_Cp9uXPQU.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/canvas.mdx":"chunks/canvas_4bIFne3V.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/asyncronous.mdx":"chunks/asyncronous_h9tK0E5C.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/units.mdx":"chunks/units_DafST173.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/date.mdx":"chunks/date_DVIG6lPO.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/external-inline.mdx":"chunks/external-inline_CEWPdOoz.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/astro-typescript.mdx":"chunks/astro-typescript_4AY_hc-Y.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/timed.mdx":"chunks/timed_D-eHuEEI.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/astro-db.mdx":"chunks/astro-db_BLVdN_3h.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/db-case-insensitive-search.mdx":"chunks/db-case-insensitive-search_BuC3g3G9.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/collection-entry-headers.mdx":"chunks/collection-entry-headers_BHFtqi6m.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/db-query-string.mdx":"chunks/db-query-string_K8YfYOEn.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/db-returning.mdx":"chunks/db-returning_Dl-t154r.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/db-row-exists.mdx":"chunks/db-row-exists_C-W_qLSV.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/db-row-created-date.mdx":"chunks/db-row-created-date_DFzZygqk.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/github/secret-leak.mdx":"chunks/secret-leak_DwOmMd8G.mjs","C:/Users/EugeneVV/dev-lessons/tsnotes/src/layouts/GlobalLayout.astro?astro&type=script&index=0&lang.ts":"_astro/GlobalLayout.astro_astro_type_script_index_0_lang.Bh1vqtQc.js","C:/Users/EugeneVV/dev-lessons/tsnotes/src/components/View.astro?astro&type=script&index=0&lang.ts":"_astro/View.astro_astro_type_script_index_0_lang.ClnMOJso.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/EugeneVV/dev-lessons/tsnotes/src/layouts/GlobalLayout.astro?astro&type=script&index=0&lang.ts","function r(){const e=document.getElementsByTagName(\"a\");for(var t=0;t<e.length;t++)if(/^http/.test(e[t].getAttribute(\"href\"))){const n=e[t];n.setAttribute(\"target\",\"_blank\"),n.setAttribute(\"rel\",\"noopener noreferrer\")}}r();"],["C:/Users/EugeneVV/dev-lessons/tsnotes/src/components/View.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"view\"),s=document.getElementById(\"view-btn\"),c=document.querySelector(\"section#view .close\"),l=document.getElementById(\"view-reset\"),t=document.querySelector(\".disable\"),o=document.getElementById(\"borderful\");s?.addEventListener(\"click\",()=>{e?.classList.toggle(\"closed\"),e?.classList.toggle(\"open\"),t?.classList.toggle(\"disabled\")});c?.addEventListener(\"click\",function(){e?.classList.toggle(\"closed\"),e?.classList.toggle(\"open\"),t?.classList.toggle(\"disabled\")});l?.addEventListener(\"click\",()=>{localStorage.clear(),location.reload(),o.checked=!0});"]],"assets":["/_astro/index.DY9WDLts.css","/favicon.svg","/resources/curios/index.html","/resources/tools/index.html","/resources/undefined/index.html","/study/classes/index.html","/study/lessons/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"P0wHvMLYfjJ7Aw9RHHzonWSc0o5Obsw7/oUGOJUQb3Y=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\EugeneVV\\dev-lessons\\tsnotes\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
