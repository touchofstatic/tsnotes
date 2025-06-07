import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "date"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "yyyy-mm-dd-hhmmss",
    "text": "yyyy-mm-dd HH:mm:ss"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "Date"
      }), " is a javascript object ", createVNode(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
        children: "Date - JavaScript | MDN"
      })]
    }), "\n", createVNode(_components.p, {
      children: "you can construct a date obj.\r\nyou can get or set specific parts of a date obj"
    }), "\n", createVNode(_components.p, {
      children: [createVNode("span", {
        "is-": "badge",
        class: "alert",
        children: "ALERT:"
      }), " New ", createVNode(_components.code, {
        children: "Date()"
      }), " with two-digit year values (yy00-99) exhibits legacy undesirable, inconsistent behavior.\r\nUse ", createVNode(_components.code, {
        children: "setFullYear()"
      }), " and ", createVNode(_components.code, {
        children: "getFullYear()"
      }), "."]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "toString()"
        }), " = Fri Jul 02 2021 14:03:54 GMT+0100 (British Summer Time)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "toDateString()"
        }), " = Fri Jul 02 2021"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "toLocaleString()"
        }), " = 7/2/2021, 2:05:07 PM"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "toLocaleDateString()"
        }), " = 7/2/2021"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "toGMTString()"
        }), " = Fri, 02 Jul 2021 13:06:02 GMT"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "toUTCString()"
        }), " = Fri, 02 Jul 2021 13:06:28 GMT"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "toISOString()"
        }), " = 2021-07-02T13:06:53.422Z"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "yyyy-mm-dd-hhmmss",
      children: "yyyy-mm-dd HH:mm:ss"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: ".toISOString().replace(\"T\",\" \").substring(0, 19);"
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

const url = "src/content/js/date.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/date.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/date.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
