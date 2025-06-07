import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "table"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "inconsistent-behavior-and-overflow-problems",
    "text": "Inconsistent behavior and overflow problems"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.hr, {}), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://alistapart.com/article/web-typography-tables/",
          children: "Web Typography: Designing Tables to be Read, Not Looked At – A List Apart"
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "inconsistent-behavior-and-overflow-problems",
      children: "Inconsistent behavior and overflow problems"
    }), "\n", createVNode(_components.p, {
      children: ["Try ", createVNode(_components.code, {
        children: "table-layout: fixed"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "solve overflow problems"
      }), "\n", createVNode(_components.li, {
        children: "ellipsis, scroll, and hide overflow"
      }), "\n", createVNode(_components.li, {
        children: "image and code block width"
      }), "\n", createVNode(_components.li, {
        children: "uniform height and width"
      }), "\n", createVNode(_components.li, {
        children: "easy to control"
      }), "\n"]
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
            children: "table {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  table-layout: fixed;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Cells’ parameters are based on the first row"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://css-tricks.com/fixing-tables-long-strings/",
        children: "Fixed Table Layouts | CSS-Tricks"
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

const url = "src/content/css/table.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/table.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/table.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
