import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "favicon"
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
    ol: "ol",
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
          href: "https://github.com/audreyfeldroy/favicon-cheat-sheet",
          children: "audreyfeldroy/favicon-cheat-sheet: Obsessive cheat sheet to favicon sizes/types. Please contribute!"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://favicon.im/blog/favicon-formats-sizes-best-practices",
          children: "Favicon: Formats, Sizes, Use Cases, and Best Practices - Favicon.im Blog"
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "ico can contain multiple bmp or png icons in one file.\r\nUSE ONLY ONE FILE, NAMED FAVICON.ICO.\r\npng can specify different sizes for different devices.\r\nUse many code lines and files!"
    }), "\n", createVNode(_components.p, {
      children: "THESE ARE NOT MUTUALLY EXCLUSIVE"
    }), "\n", createVNode(_components.p, {
      children: [createVNode("span", {
        "is-": "badge",
        class: "advice",
        children: "ADVICE:"
      }), " 16, 32, 48 ideally, 180"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Get an icon png ", createVNode(_components.a, {
          href: "https://icons8.com/icons",
          children: "icons8"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Use favicon generator\r\n", createVNode(_components.a, {
          href: "https://favicomatic.com/",
          children: "Favic-o-Matic"
        }), "\r\n", createVNode(_components.a, {
          href: "https://favicon.io/",
          children: "favicon.io"
        }), "\r\nto receive ico icon, png icons, and code block."]
      }), "\n", createVNode(_components.li, {
        children: ["Put icons in root and code in ", createVNode(_components.code, {
          children: "<head>"
        })]
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
            children: "<!-- Basic favicon -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<link rel=\"icon\" href=\"/favicon-16.png\" sizes=\"16x16\" type=\"image/png\">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<link rel=\"icon\" href=\"/favicon-32.png\" sizes=\"32x32\" type=\"image/png\">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<!-- iOS/Android general use -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<link rel=\"apple touch icon\" href=\"/apple-touch-icon.png\" sizes=\"180x180\">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "..."
          })
        })]
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

const url = "src/content/html/favicon.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/favicon.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/favicon.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
