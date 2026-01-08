// Vite plugin to make CSS load non-blocking
export default function nonBlockingCss() {
  return {
    name: 'non-blocking-css',
    transformIndexHtml(html) {
      // Replace CSS loading with non-blocking version
      return html.replace(
        /<link rel="stylesheet"[^>]*>/g,
        '<link rel="preload" as="style" onload="this.onload=null;this.rel=\'stylesheet\'" href="$&">' +
        '<noscript><link rel="stylesheet" href="$&"></noscript>'
      );
    }
  };
}
