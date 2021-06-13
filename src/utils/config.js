export function getConfigs() {
  return JSON.parse(localStorage.configs || "{}");
}

export function setConfigs(list) {
  localStorage.configs = JSON.stringify(list);
  return list;
}

export function deleteConfigs() {
  localStorage.configs = JSON.stringify("{}");
  return {};
}

export function getConfigItem(name) {
  return getConfigs()[name];
}

export function setConfigItem(name, item) {
  const configs = getConfigs();
  configs[name] = item;
  return setConfigs(configs);
}

export function deleteConfigItem(name) {
  const configs = getConfigs();
  delete configs[name];
  return setConfigs(configs);
}

export function getVisibleConfigs() {
  return JSON.parse(localStorage.visibleConfigs || "[]");
}

export function setVisibleConfigs(list) {
  localStorage.visibleConfigs = JSON.stringify(list);
  return list;
}

export function deleteVisibleConfigs() {
  localStorage.visibleConfigs = JSON.stringify("[]");
  return [];
}

export function isVisibleConfigItem(name) {
  return getVisibleConfigs().includes(name);
}

export function setVisibleConfigItem(name) {
  const visibleConfigs = getVisiblevisibleConfigs();
  visibleConfigs.push(name);
  return setVisibleConfigs(visibleConfigs);
}

export function deleteVisibleConfigItem(name) {
  const visibleConfigs = getVisibleConfigs().filter((key) => key !== name);

  return setConfigs(visibleConfigs);
}
