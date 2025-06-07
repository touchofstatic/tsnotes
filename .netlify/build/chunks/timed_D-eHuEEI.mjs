import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "timed code execution"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "settimeout-will-not-pause-execution-of-other-functions-in-the-functions-stack",
    "text": "setTimeout() will not pause execution of other functions in the functions stack"
  }, {
    "depth": 2,
    "slug": "why-does-settimeout-call-produce-different-results-or-inaccurate-timing",
    "text": "Why does setTimeout() call produce different results or inaccurate timing?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "settimeout-will-not-pause-execution-of-other-functions-in-the-functions-stack",
      children: "setTimeout() will not pause execution of other functions in the functions stack"
    }), "\n", createVNode(_components.p, {
      children: "Because it’s an asyncronous function."
    }), "\n", createVNode(_components.h2, {
      id: "why-does-settimeout-call-produce-different-results-or-inaccurate-timing",
      children: "Why does setTimeout() call produce different results or inaccurate timing?"
    }), "\n", createVNode(_components.p, {
      children: ["The timeout specified is a minimum time that the browser should wait before execution, not a guaranteed time.\r\nIf the browser is busy doing other things when the timer goes off, the function will be delayed.\r\nDepending on precise millisecond timing with ", createVNode(_components.code, {
        children: "setTimeout"
      }), " is not reliable."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "You shouldn’t rely on timeouts to guarantee the order of execution."
      })
    }), "\n", createVNode(_components.p, {
      children: "To create a progression in which one function only fires after the completion of another function, try promises"
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

const url = "src/content/js/timed.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/timed.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/timed.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
