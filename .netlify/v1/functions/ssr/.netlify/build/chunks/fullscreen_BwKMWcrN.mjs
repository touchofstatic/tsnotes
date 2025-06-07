import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "fullscreen element"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Such as a product site’s enormous front page image that will amaze and confuse the viewer"
    }), "\n", createVNode(_components.p, {
      children: ["Try ", createVNode(_components.code, {
        children: "100vh"
      }), ", pushing the rest of the content below viewport"]
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

const url = "src/content/css/fullscreen.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/fullscreen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/fullscreen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
