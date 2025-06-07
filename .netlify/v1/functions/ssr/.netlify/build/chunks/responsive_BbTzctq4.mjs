import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "responsive design"
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
        href: "https://css-tricks.com/a-complete-guide-to-css-media-queries/",
        children: "CSS Media Queries Guide | CSS-Tricks"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries",
        children: "Using feature queries - CSS: Cascading Style Sheets | MDN"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html",
        children: "Responsive Design Mode — Firefox Source Docs documentation"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing",
        children: "Testing - Learn web development | MDN"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Touch_events",
        children: "Touch events - Web APIs | MDN"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer",
        children: "pointer - CSS: Cascading Style Sheets | MDN"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://cloudfour.com/thinks/responsive-images-101-definitions/",
        children: "Responsive Images 101, Part 1: Definitions – Cloud Four"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/",
        children: "Making SVGs Responsive with CSS | Codrops"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://web.dev/articles/cls",
        children: "Cumulative Layout Shift (CLS)  |  Files  |  web.dev"
      })
    }), "\n", createVNode(_components.li, {
      children: createVNode(_components.a, {
        href: "https://www.w3schools.com/css/css_rwd_mediaqueries.asp",
        children: "Responsive Web Design Media Queries"
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
const url = "src/content/undefined/responsive.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/responsive.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/responsive.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
