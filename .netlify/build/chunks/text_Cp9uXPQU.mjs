import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "text"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "font-size-font-family-font-style-font-weight",
    "text": "font-size, font-family, font-style, font-weight"
  }, {
    "depth": 2,
    "slug": "how-to-space-apart-lines",
    "text": "How to space apart lines"
  }, {
    "depth": 2,
    "slug": "web-fonts",
    "text": "Web fonts"
  }, {
    "depth": 3,
    "slug": "how-to-add-a-web-font",
    "text": "How to add a web font"
  }, {
    "depth": 3,
    "slug": "online-font-services",
    "text": "Online font services"
  }, {
    "depth": 3,
    "slug": "font-face",
    "text": "@font-face"
  }, {
    "depth": 2,
    "slug": "variable-fonts",
    "text": "Variable fonts"
  }, {
    "depth": 3,
    "slug": "how-to-add-a-variable-font",
    "text": "How to add a variable font"
  }, {
    "depth": 3,
    "slug": "variation-axis",
    "text": "Variation axis"
  }, {
    "depth": 3,
    "slug": "weight-width-italic-slant-optical-size",
    "text": "weight, width, italic, slant, optical size"
  }, {
    "depth": 3,
    "slug": "compatibility",
    "text": "Compatibility"
  }, {
    "depth": 2,
    "slug": "best-practices",
    "text": "Best practices"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.hr, {}), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://fonts.google.com/knowledge",
          children: "Fonts Knowledge - Google Fonts"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html",
          children: "Firefox Font Editor"
        }), " guide to page inspector"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://fonts.google.com/",
          children: "Browse Fonts - Google Fonts"
        }), " free stuff!!!"]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "Chttps://fonts.google.com/knowledge/choosing_type/choosing_web_fonts_beginners_guide",
          children: "Choosing web fonts: A beginner’s all-in-one guide – Fonts Knowledge - Google Fonts"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://fonts.google.com/knowledge",
          children: "Fonts Knowledge - Google Fonts"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide#working_with_older_browsers",
          children: "Variable fonts guide - CSS: Cascading Style Sheets | MDN"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html",
          children: "Firefox Font Editor"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://css-tricks.com/newsletter/259-how-to-use-variable-fonts/",
          children: "259: How To Use Variable Fonts - CSS-Tricks"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://variablefonts.io/implementing-variable-fonts",
          children: "Implementing Variable Fonts"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://clearleft.com/thinking/how-to-use-variable-fonts-in-the-real-world",
          children: "How to use variable fonts in the real world | Clearleft"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/",
          children: "Creating Custom Font Stacks with Unicode-Range ◆ 24 ways"
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "font-size-font-family-font-style-font-weight",
      children: "font-size, font-family, font-style, font-weight"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "-"
          }), createVNode(_components.th, {
            children: "-"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "px"
            })
          }), createVNode(_components.td, {
            children: "pixels"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "em"
            })
          }), createVNode(_components.td, {
            children: "its parent’s font size"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "rem"
            })
          }), createVNode(_components.td, {
            children: "its root’s font size"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Instristic ", createVNode(_components.code, {
        children: "font-size"
      }), " of an element is inherited from that element’s parent element.\r\n", createVNode(_components.code, {
        children: "<html>"
      }), " has instristic ", createVNode(_components.code, {
        children: "font-size: 16px"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("span", {
        "is-": "badge",
        class: "caution",
        children: "CAUTION:"
      }), " Avoid setting the ", createVNode(_components.code, {
        children: "font-size"
      }), " of container elements where possible"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "font-family"
      }), " —  font/list of fonts aka ", createVNode(_components.em, {
        children: "font stack"
      }), " to apply in order"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "font-style"
      }), "  — italic. values are italic, normal, oblique (fake italic that’s just slanted normal). ", createVNode(_components.code, {
        children: "font-weight"
      }), " - bold. many values available"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-space-apart-lines",
      children: "How to space apart lines"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "line-height"
      }), " — Unitless value acts as a multiplier of ", createVNode(_components.code, {
        children: "font-size"
      }), ".\r\nUsually 1.5 – 2 (double spaced)"]
    }), "\n", createVNode(_components.h2, {
      id: "web-fonts",
      children: "Web fonts"
    }), "\n", createVNode(_components.h3, {
      id: "how-to-add-a-web-font",
      children: "How to add a web font"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Find web font"
      }), "\n", createVNode(_components.li, {
        children: ["Generate the code using Webfont Generator or fontsqirrel.\r\nYou receive: woff and woff2, demo html, stylesheet.css with generated ", createVNode(_components.code, {
          children: "@font-face"
        }), " code"]
      }), "\n", createVNode(_components.li, {
        children: ["Put ", createVNode(_components.code, {
          children: "@font-face"
        }), " at the top of your css"]
      }), "\n", createVNode(_components.li, {
        children: ["Make sure in ", createVNode(_components.code, {
          children: "@font-face"
        }), " url() paths to font files are correct"]
      }), "\n", createVNode(_components.li, {
        children: "Use these fonts in your font stacks!"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "online-font-services",
      children: "Online font services"
    }), "\n", createVNode(_components.p, {
      children: ["Online font services store and serve fonts for you\r\nso you don’t have to worry about writing the ", createVNode(_components.code, {
        children: "@font-face"
      }), " code"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Get font"
      }), "\n", createVNode(_components.li, {
        children: "Get embed coode"
      }), "\n", createVNode(_components.li, {
        children: "Paste it into html in head above the css link element"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "font-face",
      children: "@font-face"
    }), "\n", createVNode(_components.p, {
      children: "font-family is the name YOU WANT TO REFER TO THE FONT AS"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The order in which you list font files is important.\r\nthe browser will choose the first font file it’s able to use.\r\nThat’s why the format you list first should be the preferred format —\r\nthat is, WOFF2 — with the older formats listed after that."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "variable-fonts",
      children: "Variable fonts"
    }), "\n", createVNode(_components.h3, {
      id: "how-to-add-a-variable-font",
      children: "How to add a variable font"
    }), "\n", createVNode(_components.p, {
      children: "The same way as a web font"
    }), "\n", createVNode(_components.h3, {
      id: "variation-axis",
      children: "Variation axis"
    }), "\n", createVNode(_components.p, {
      children: "Variation axis — the allowable range of an aspect of typeface design. Can be range or binary"
    }), "\n", createVNode(_components.p, {
      children: "Registered —  weight, width, slant, italic, optical size. : existing css atrributes"
    }), "\n", createVNode(_components.p, {
      children: "Custom — infinite. identified by four-letter axes tags (weight = “wght”). stuff like “yeast”"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "AXIS NAMES ARE CASE SENSITIVE"
      }), ". registered - lower case. custom - upper case"]
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
            children: "font-variation-settings:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  \"wght\" 375,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  \"GRAD\" 88;"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "font-variation-settings"
      }), " property uses the tag as part of a key-value pair.\r\n", createVNode(_components.code, {
        children: "font-variation-settings: \"wght\" 350;"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("span", {
        "is-": "badge",
        class: "caution",
        children: "CAUTION:"
      }), "\r\n", createVNode(_components.code, {
        children: "font-variation-settings"
      }), " is lower-level syntax and the first mechanism implemented to test the early implementations of variable font support.\r\nW3C’s intent was for this syntax not to be used when other attributes are available.\r\nYou should only use ", createVNode(_components.code, {
        children: "font-variation-settings"
      }), " as a last resort,\r\nif there is no appropriate basic attribute."]
    }), "\n", createVNode(_components.p, {
      children: ["Font characteristics set using ", createVNode(_components.code, {
        children: "font-variation-settings"
      }), "\r\n", createVNode(_components.strong, {
        children: "will always override"
      }), " those set using the corresponding basic font properties,\r\ne.g. ", createVNode(_components.code, {
        children: "font-weight"
      }), ", ", createVNode(_components.strong, {
        children: "no matter where they appear in the cascade"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "weight-width-italic-slant-optical-size",
      children: "weight, width, italic, slant, optical size"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "wght"
        }), " = ", createVNode(_components.code, {
          children: "font-weight"
        }), ". [1; 1000] step 1"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "in static and variable: [100; 900] step 100; keywords “normal” = 400, “bold” = 700"
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
            children: "font-weight: 375;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "font-variation-settings: \"wght\" 375;"
          })
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "wdth"
        }), " = ", createVNode(_components.code, {
          children: "font-stretch"
        }), ". [50%; 200%]"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("span", {
        "is-": "badge",
        class: "caution",
        children: "CAUTION:"
      }), " ", createVNode(_components.code, {
        children: "font-stretch"
      }), " property is deprecated"]
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "ital"
        }), " = ", createVNode(_components.code, {
          children: "font-style"
        }), ": italic; 0 not italic, 0.5 half italic, 1 full italic."]
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
            children: "font-style: italic;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "font-variation-settings: \"ital\" 1;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "font-synthesis: none; // prevent browsers from accidentally applying the variation axis and a synthesized italic"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Often has completely different letterforms"
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "slnt"
        }), " = ", createVNode(_components.code, {
          children: "font-style"
        }), ": oblique + angle; [-90°; 90°]"]
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
            children: "font-style: oblique 14deg;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "font-variation-settings: \"slnt\" -14;"
          })
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "5",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "opsz"
        }), " = ", createVNode(_components.code, {
          children: "font-optical-sizing"
        }), ". auto, none, num"]
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
            children: "font-optical-sizing: auto;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "font-variation-settings: \"opsz\" 36;"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Optical sizing - thiccness of letters optimized for viewing at different physical sizes.\r\nNew in css!"
    }), "\n", createVNode(_components.p, {
      children: ["Automatially applied based on ", createVNode(_components.code, {
        children: "font-size"
      }), ". In most cases you want that.\r\nThe option to provide a specific value is provided is when necessary to override the default"]
    }), "\n", createVNode(_components.h3, {
      id: "compatibility",
      children: "Compatibility"
    }), "\n", createVNode(_components.p, {
      children: ["Variable font support can be checked with CSS Feature Queries (", createVNode(_components.code, {
        children: "@supports"
      }), ")"]
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
            children: "h1 {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  font-family: some-non-variable-font-family;"
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
            children: "@supports (font-variation-settings: \"wdth\" 115) {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  h1 {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    font-family: some-variable-font-family;"
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
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "best-practices",
      children: "Best practices"
    }), "\n", createVNode(_components.p, {
      children: "Provide a suitable generic font name at the end of the font stack"
    }), "\n", createVNode(_components.p, {
      children: "Body text generally looks nicer and is easier to read when the lines are spaced apart"
    }), "\n", createVNode(_components.p, {
      children: "Declare separate font family entries as one font with family with respective style/weight values,\r\ninstead of declaring per italic/bold variation file"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/",
        children: "@font-face tip: define font-weight and font-style to keep your CSS simple | 456 Berea Street"
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

const url = "src/content/css/text.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/text.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/text.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
