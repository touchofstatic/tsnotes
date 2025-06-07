import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "hide element"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "visibility: hidden"
      }), " hides the element but it still takes up space in the layout."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "display: none"
      }), " removes the element from the document flow. It does not take up space, as if it wasn’t there."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.w3schools.com/css/tryit.asp?filename=trycss_display",
        children: "Interactive"
      })
    })]
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

const url = "src/content/css/hide.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/hide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/hide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
