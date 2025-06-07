import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "center element"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.hr, {}), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Center_an_element",
          children: "Center an element - CSS: Cascading Style Sheets | MDN"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://css-tricks.com/centering-css-complete-guide/",
          children: "Centering In CSS Guide | CSS-Tricks"
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: ["Using ", createVNode(_components.strong, {
        children: "flexbox"
      })]
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
            children: "containing box {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    display: flex;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    align-items: center (vertical centering aka block axis);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    justify-content: center (horizontal centering aka inline axis)"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Alternatively, instead of setting ", createVNode(_components.code, {
        children: "align-items: center"
      }), " on the container, you can set ", createVNode(_components.code, {
        children: "align-self: center"
      }), " on the inner item itself."]
    }), "\n", createVNode(_components.p, {
      children: ["Using ", createVNode(_components.strong, {
        children: "grid"
      })]
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
            children: "containing box {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    display: grid;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    place-items: center; (on both block and inline axis)"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Alternatively, instead of setting ", createVNode(_components.code, {
        children: "place-items: center"
      }), " on the container, you can set ", createVNode(_components.code, {
        children: "place-self: center"
      }), " or ", createVNode(_components.code, {
        children: "margin: auto"
      }), " on the inner item itself."]
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

const url = "src/content/css/center.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/center.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/center.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
