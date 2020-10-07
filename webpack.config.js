function page(page) {`./src/components/pages/${page}/index.js`}

export const entry = {
  home: page('home'),
  contact: page('contact'),
  about: page('about')
};