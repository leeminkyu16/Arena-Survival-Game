export function jsonStringifyReplacer(key, value) {
  if (excludedKeys.has(key)) {
    return undefined;
  }

  return value;
}

const excludedKeys = new Set();
excludedKeys.add("gameArea");
