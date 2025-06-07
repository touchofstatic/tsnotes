import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BUYoNlfu.mjs';
import 'clsx';

const frontmatter = {
  "title": "test"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "header-2",
    "text": "header 2"
  }, {
    "depth": 3,
    "slug": "header-3",
    "text": "header 3"
  }, {
    "depth": 4,
    "slug": "header-4",
    "text": "header 4"
  }, {
    "depth": 2,
    "slug": "header-2-1",
    "text": "header 2"
  }, {
    "depth": 5,
    "slug": "header-5",
    "text": "header 5"
  }, {
    "depth": 5,
    "slug": "header-5-1",
    "text": "header 5"
  }, {
    "depth": 6,
    "slug": "header-6",
    "text": "header 6"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("span", {
      "is-": "badge",
      class: "alert",
      children: "ALERT:"
    }), "\n", createVNode("span", {
      "is-": "badge",
      class: "caution",
      children: "CAUTION:"
    }), "\n", createVNode("span", {
      "is-": "badge",
      class: "advice",
      children: "ADVICE:"
    }), "\n", createVNode("span", {
      "is-": "badge",
      class: "alert",
      children: "ALERT:"
    }), "\n", createVNode(_components.h2, {
      id: "header-2",
      children: "header 2"
    }), "\n", createVNode(_components.p, {
      children: "words"
    }), "\n", createVNode(_components.h3, {
      id: "header-3",
      children: "header 3"
    }), "\n", createVNode(_components.p, {
      children: "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi."
    }), "\n", createVNode(_components.h4, {
      id: "header-4",
      children: "header 4"
    }), "\n", createVNode(_components.p, {
      children: "Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
    }), "\n", createVNode(_components.h2, {
      id: "header-2-1",
      children: "header 2"
    }), "\n", createVNode(_components.p, {
      children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    }), "\n", createVNode(_components.h5, {
      id: "header-5",
      children: "header 5"
    }), "\n", createVNode(_components.p, {
      children: "words"
    }), "\n", createVNode(_components.h5, {
      id: "header-5-1",
      children: "header 5"
    }), "\n", createVNode(_components.p, {
      children: "words"
    }), "\n", createVNode(_components.h6, {
      id: "header-6",
      children: "header 6"
    }), "\n", createVNode(_components.p, {
      children: "words"
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

const url = "src/content/undefined/test.mdx";
const file = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/test.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/EugeneVV/dev-lessons/tsnotes/src/content/undefined/test.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
