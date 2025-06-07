import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "canvas"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "sprite-sheets",
    "text": "Sprite sheets"
  }, {
    "depth": 2,
    "slug": "canvas-is-blurry-pixelated-and-distorted",
    "text": "Canvas is blurry, pixelated, and distorted"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.hr, {}), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
          children: "Canvas API - Web APIs | MDN"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial",
          children: "Canvas tutorial - Web APIs | MDN"
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "sprite-sheets",
      children: "Sprite sheets"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3",
        children: "Animating Sprite Sheets With JavaScript - DEV Community"
      })
    }), "\n", createVNode(_components.h2, {
      id: "canvas-is-blurry-pixelated-and-distorted",
      children: "Canvas is blurry, pixelated, and distorted"
    }), "\n", createVNode(_components.p, {
      children: ["Cause: ", createVNode(_components.code, {
        children: "Canvas.width/Canvas.height"
      }), " and ", createVNode(_components.code, {
        children: "CSS width/CSS height"
      }), " are NOT the same thing."]
    }), "\n", createVNode(_components.p, {
      children: "Canvas dimension is N pixels in the canvas element’s bitmap. Default is 300x150px."
    }), "\n", createVNode(_components.p, {
      children: ["Using CSS rules, ", createVNode(_components.em, {
        children: "the element"
      }), " is stretched but ", createVNode(_components.em, {
        children: "the bitmap"
      }), " stays the same size, distorted to fit the element’s size."]
    }), "\n", createVNode(_components.p, {
      children: ["Try ", createVNode(_components.code, {
        children: "const width = (canvas.width = 600);"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://medium.com/@doomgoober/understanding-html-canvas-scaling-and-sizing-c04925d9a830",
          children: "Understanding and Fixing Blurry HTML Canvases | by Alexander Jhin | Medium"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://stackoverflow.com/questions/22198079/getting-wrong-canvas-height",
          children: "javascript - Getting wrong canvas height - Stack Overflow"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://medium.com/@banksysan_10088/webgl-canvas-size-confusion-fde3e360f4e9",
          children: "Canvas Size Confusion 🤦. Canvas element’s height & width are NOT… | by David Banks | Medium"
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

const url = "src/content/js/canvas.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/canvas.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/js/canvas.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
