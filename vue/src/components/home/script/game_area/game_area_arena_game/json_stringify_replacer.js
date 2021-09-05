export function jsonStringifyReplacer(key, value) {
  if (excludedKeys.has(key)) {
    return undefined;
  }

  return value;
}

const excludedKeys = new Set();
excludedKeys.add("canvas");
excludedKeys.add("vueComponent");
excludedKeys.add("context");
excludedKeys.add("interval");
excludedKeys.add("downKeys");
excludedKeys.add("gameArea");
excludedKeys.add("frameNo");
excludedKeys.add("stickyEKey");
excludedKeys.add("stickySpaceKey");
