import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "accessible design"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ul: "ul",
    ...props.components
  };
  return createVNode(_components.ul, {
    children: ["\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://www.w3.org/WAI/tutorials/images/decision-tree/",
        children: "An alt Decision Tree | Web Accessibility Initiative (WAI) | W3C"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html",
        children: "Accessibility Inspector — Firefox Source Docs documentation"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://docs.google.com/document/d/1ZKV1P9pSbnCA6XE6MHoOPqN6VBjCZDFY30L2Nt9Mkb0/edit?pli=1&tab=t.0",
        children: "Inclusive Design Patterns For 2025 (24.9.2024) - Google Docs"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://www.accessguide.io/",
        children: "Homepage - Access Guide"
      })
    }), "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/content/undefined/accessible.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/accessible.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/accessible.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
