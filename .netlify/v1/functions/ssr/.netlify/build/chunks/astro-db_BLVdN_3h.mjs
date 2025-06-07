import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "astro db"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "comment-section",
    "text": "Comment section"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://astro.build/blog/astro-db-deep-dive/",
        children: "Astro DB: A Deep Dive | Astro"
      })
    }), "\n", createVNode(_components.h2, {
      id: "comment-section",
      children: "Comment section"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://turso.tech/blog/add-comments-to-your-astro-blog-with-astrodb-and-turso",
          children: "Add comments to your Astro blog with AstroDB and Turso"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://ryantrimble.com/blog/creating-a-guestbook-with-astro-db.html",
          children: "Creating a Guestbook with Astro DB | Ryan Trimble, UX/UI Developer"
        })
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

const url = "src/content/astro/astro-db.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/astro-db.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/astro/astro-db.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
