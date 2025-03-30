window.addEventListener('DOMContentLoaded', () => {
  interface ReplaceTextFunction {
    (selector: string, text: string): void;
  }

  const replaceText: ReplaceTextFunction = (selector, text) => {
    const element: HTMLElement | null = document.getElementById(selector);
    if (element) element.innerText = text;
  }

  for (const type of ['chrome', 'node', 'electron']) {
    if (process.versions[type]) {
      replaceText(`${type}-version`, process.versions[type])
    }
  }
})