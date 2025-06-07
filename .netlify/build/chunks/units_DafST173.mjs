import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "units"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "em-and-rem",
    "text": "em and rem"
  }, {
    "depth": 2,
    "slug": "percentage",
    "text": "percentage"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Absolute length units — (generally considered) always the same size"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
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
            children: [createVNode(_components.code, {
              children: "cm"
            }), ", ", createVNode(_components.code, {
              children: "mm"
            }), ", ", createVNode(_components.code, {
              children: "in"
            }), " …"]
          }), createVNode(_components.td, {
            children: [createVNode("span", {
              "is-": "badge",
              class: "caution",
              children: "CAUTION:"
            }), " mostly used for print, not screen display"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "px"
            })
          }), createVNode(_components.td, {
            children: "pixels the GOAT"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Relative length units — are based on font, container, or viewport sizes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
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
              children: "em"
            })
          }), createVNode(_components.td, {
            children: ["its parent’s font size (used in ", createVNode(_components.code, {
              children: "font-size"
            }), "); otherwise its own font size"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "rem"
            })
          }), createVNode(_components.td, {
            children: "its root’s font size"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "vh"
            })
          }), createVNode(_components.td, {
            children: "viewport’s height. 1vh = 1% of vp height"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "vw"
            })
          }), createVNode(_components.td, {
            children: "viewport’s width. 1vw = 1% of vp width"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {}), createVNode(_components.td, {
            children: "…and more!"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Intristic size — html elements have a natural size set before they’re altered by css"
    }), "\n", createVNode(_components.p, {
      children: "Extrinsic size — size that’s actively added"
    }), "\n", createVNode(_components.h2, {
      id: "em-and-rem",
      children: "em and rem"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Most popular"
      }), " rel length units that are ", createVNode(_components.strong, {
        children: "super important"
      }), " to understand!!!!"]
    }), "\n", createVNode(_components.p, {
      children: ["nested <li> ", createVNode(_components.code, {
        children: "1.3em"
      }), " -> get progressively larger from <html> to parent to parent"]
    }), "\n", createVNode(_components.p, {
      children: ["nested <li> ", createVNode(_components.code, {
        children: "1.3rem"
      }), " -> get equally larger once from <html>"]
    }), "\n", createVNode(_components.h2, {
      id: "percentage",
      children: "percentage"
    }), "\n", createVNode(_components.p, {
      children: "% resolve against containing block’s size."
    }), "\n", createVNode(_components.p, {
      children: [createVNode("span", {
        "is-": "badge",
        class: "caution",
        children: "CAUTION:"
      }), " When using a percentage you need to be aware what it is a percentage of.\r\nFurthermore, % margin and padding is calculated from ", createVNode(_components.strong, {
        children: "inline size"
      }), ", even when applied to height."]
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

const url = "src/content/css/units.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/units.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/css/units.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
