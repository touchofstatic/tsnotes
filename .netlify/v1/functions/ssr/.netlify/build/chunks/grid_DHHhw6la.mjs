import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "grid"
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
        href: "https://css-tricks.com/snippets/css/complete-guide-grid/",
        children: "CSS Grid Layout Guide | CSS-Tricks"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://www.codecademy.com/learn/learn-intermediate-css/modules/learn-css-grid/cheatsheet",
        children: "CSS Grid Cheatsheet | Codecademy"
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
const url = "src/content/css/grid.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/grid.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/grid.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
