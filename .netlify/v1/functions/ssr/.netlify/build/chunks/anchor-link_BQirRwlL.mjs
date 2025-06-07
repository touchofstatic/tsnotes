import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "anchor link"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "anchor-link-moves-element",
    "text": "Anchor link moves element"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "i.e link to a header"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<a href={`#${heading.slug}`}>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    {heading.text}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "</a>"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "anchor-link-moves-element",
      children: "Anchor link moves element"
    }), "\n", createVNode(_components.p, {
      children: ["anchor links can conflict with ", createVNode(_components.code, {
        children: "overflow: hidden"
      }), " on the article and cause this behavior apparently.\r\nif you have overflow-x and overflow-y try removing it and using ", createVNode(_components.code, {
        children: "word-break: break-word;"
      }), "\r\non article content instead if possible"]
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

const url = "src/content/html/anchor-link.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/anchor-link.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/anchor-link.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
