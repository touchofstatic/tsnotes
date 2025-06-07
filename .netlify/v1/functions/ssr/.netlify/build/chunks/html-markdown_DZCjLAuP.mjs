import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "html in markdown"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "is-it-okay-to-use-html-in-markdown",
    "text": "Is it okay to use html in markdown"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "is-it-okay-to-use-html-in-markdown",
      children: "Is it okay to use html in markdown"
    }), "\n", createVNode(_components.p, {
      children: "Not only is it okay to do, but it is encouraged. As the rules state:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "For any markup that is not covered by Markdown’s syntax, you simply use HTML itself. There’s no need to preface it or delimit it to indicate that you’re switching from Markdown to HTML; you just use the tags."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "And later:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "If you want, you can even use HTML tags instead of Markdown formatting; e.g. if you’d prefer to use HTML <a> or <img> tags instead of Markdown’s link or image syntax, go right ahead."
      }), "\n"]
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

const url = "src/content/html/html-markdown.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/html-markdown.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/html/html-markdown.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
