import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "astro typescript"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "implicitly-has-type-any",
    "text": "”implicitly has type ‘any’”"
  }, {
    "depth": 2,
    "slug": "is-possibly-null",
    "text": "”is possibly ‘null’”"
  }, {
    "depth": 2,
    "slug": "does-not-exist-on-type-htmlelement",
    "text": "“does not exist on type ‘HTMLElement’”"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "You don’t need to write TypeScript code in your Astro projects to benefit from it. Astro always treats your component code as TypeScript,\r\nand the Astro VS Code Extension will infer as much as it can to provide autocompletion, hints, and errors in your editor."
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Astro starter projects include a tsconfig.json file in your project. Even if you don’t write TypeScript code,\r\nthis file is important so that tools like Astro and VS Code know how to understand your project.\r\nSome features (like npm package imports) aren’t fully supported in the editor without a tsconfig.json file.\r\nIf you install Astro manually, be sure to create this file yourself."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "implicitly-has-type-any",
      children: "”implicitly has type ‘any’”"
    }), "\n", createVNode(_components.p, {
      children: ["Solution 1: add ", createVNode(_components.code, {
        children: ": any"
      }), " to the problem element"]
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
            children: "const { headings } = Astro.props;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "headings.map((heading: any) => ()"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Solution 2:"
    }), "\n", createVNode(_components.p, {
      children: "tsconfig.json"
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
            children: "\"compilerOptions\": {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    \"noImplicitAny\": false"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode("span", {
        "is-": "badge",
        class: "alert",
        children: "ALERT:"
      }), "\r\nIt’s recommended to always have ", createVNode(_components.code, {
        children: "\"strict\": true"
      }), ".\r\n", createVNode(_components.code, {
        children: "noImplicitAny"
      }), " is one of the six strict mode flags.\r\nYou can disable any option that you don’t like from the strict family."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "The most important flags"
        }), " are ", createVNode(_components.code, {
          children: "noImplicitAny"
        }), " and ", createVNode(_components.code, {
          children: "strictNullChecks"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Because the type ", createVNode(_components.code, {
          children: "any"
        }), " basically disables type check, (…)\r\nby using noImplicitAny, you will only have ", createVNode(_components.code, {
          children: "any"
        }), " where you explicitly use it."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "is-possibly-null",
      children: "”is possibly ‘null’”"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://reacthustle.com/blog/typescript-get-element-by-id-tutorial",
        children: "How to Use document.getElementById() method in Typescript | ReactHustle"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Optional-chaining operator ", createVNode(_components.code, {
        children: "?"
      }), ":"]
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
            children: "const menuBtn = document.getElementById(\"menu-btn\");"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "const menu = document.getElementById(\"menu\");"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "menuBtn?.addEventListener(\"click\", () => {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    menu?.classList.toggle(\"open\");"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "does-not-exist-on-type-htmlelement",
      children: "“does not exist on type ‘HTMLElement’”"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "This error occurs because you’re trying to access a property of a specific type of HTMLElement but the document.getElementById() returns the most generic type: HTMLElement."
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["To fix this error, you can use type assertion by using the ", createVNode(_components.code, {
          children: "as"
        }), " operator"]
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
            children: "    const radio1 = document.getElementById(\"radio-1\") as HTMLInputElement;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    radio1.checked = true;"
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

const url = "src/content/astro/astro-typescript.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/astro-typescript.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/astro-typescript.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
