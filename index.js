export default function isDarkTheme() {
  // if run in node, return false
  if (
    typeof process !== "undefined" &&
    process.versions &&
    process.versions.node
  ) {
    return false;
  }

  if (!window.matchMedia) {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
