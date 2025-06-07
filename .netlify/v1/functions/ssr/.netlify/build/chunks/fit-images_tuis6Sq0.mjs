import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "fit images to container"
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
      children: [createVNode(_components.code, {
        children: "max-width: 100%"
      }), " images larger than container will be scaled down,\r\nimages smaller than container won’t be stretched out"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("span", {
        "is-": "badge",
        class: "caution",
        children: "CAUTION:"
      }), " Don’t use this technique to load huge images by default!\r\nAlways use appropriately sized images!"]
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

const url = "src/content/css/fit-images.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/fit-images.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/fit-images.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
