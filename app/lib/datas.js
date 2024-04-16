export const datas = {
  data: () => import("./data.json").then((module) => module.default),
};
