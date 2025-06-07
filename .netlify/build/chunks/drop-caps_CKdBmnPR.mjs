import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "drop caps (illuminated initials)"
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
        href: "https://css-tricks.com/snippets/css/drop-caps/",
        children: "Drop Caps | CSS-Tricks"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://ilovetypography.com/2020/08/20/history-of-illuminated-initials/",
        children: "History of Illuminated Initials"
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
const url = "src/content/css/drop-caps.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/drop-caps.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/drop-caps.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
