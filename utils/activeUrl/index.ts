export const _activeMainUrl = (url: any) => {
  const splittedUrl = url.substring(1).split("/");
  const activeParentUrl = `/${splittedUrl[0]}`;
  return activeParentUrl;
};
