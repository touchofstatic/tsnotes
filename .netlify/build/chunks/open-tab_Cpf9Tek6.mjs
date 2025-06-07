import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "open links in new tabs"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "set-it-side-wide",
    "text": "Set it side-wide"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["using ", createVNode(_components.code, {
        children: "target=\"_blank\""
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("span", {
        "is-": "badge",
        class: "alert",
        children: "ALERT:"
      }), " this makes the website vulnerable to phishing attacks.\r\nIn order to make your website secure ", createVNode(_components.strong, {
        children: "always add"
      }), " ", createVNode(_components.code, {
        children: "rel=\"noopener noreferrer\""
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "<a href=\"https://www.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Google</a>"
      })
    }), "\n", createVNode(_components.p, {
      children: "Opening an external link in a new tab makes your website vulnerable.\r\nThe site you link can gain access to the window containing your website\r\nand can change it to display different webpage. This is called phishing."
    }), "\n", createVNode(_components.h2, {
      id: "set-it-side-wide",
      children: "Set it side-wide"
    }), "\n", createVNode(_components.p, {
      children: "/src/scripts/open-tab.js"
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
            children: "function setTargetBlankOnExternalLinks() {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  const links = document.getElementsByTagName('a')"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  for (var i = 0; i < links.length; i++) {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    if (/^http/.test(links[i].getAttribute('href'))) {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      const link = links[i]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      link.setAttribute('target', '_blank')"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      link.setAttribute('rel', 'noopener noreferrer')"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "setTargetBlankOnExternalLinks() // call this after the DOM is ready"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "global layout"
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
            children: "<script>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    import \"../scripts/open-tab.js\";"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "</script>"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode("span", {
        "is-": "badge",
        class: "caution",
        children: "CAUTION:"
      }), " everyone warns against doing it\r\nbecause it stresses out the seo and users.\r\n(citation needed)"]
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

const url = "src/content/undefined/open-tab.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/open-tab.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/open-tab.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
