import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "asyncronous"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ul: "ul",
    ...props.components
  };
  return createVNode(_components.ul, {
    children: ["\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://medium.com/@gecno/javascript-async-await-a-guide-for-beginners-ffe56ba35a2c",
        children: "JavaScript Async/Await: A Guide for Beginners"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://www.reddit.com/r/learnjavascript/comments/tjz1l5/understanding_asyncawait/",
        children: "Understanding Async/Await : r/learnjavascript"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://javascript.info/promise-basics",
        children: "javascript.info/promise-basics"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://stackoverflow.com/questions/22125865/how-to-wait-until-a-predicate-condition-becomes-true-in-javascript",
        children: "asynchronous - How to wait until a predicate condition becomes true in JavaScript? - Stack Overflow"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/",
        children: "Let’s talk about how to talk about promises"
      })
    }), "\n"]
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
const url = "src/content/js/asyncronous.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/asyncronous.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/asyncronous.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
