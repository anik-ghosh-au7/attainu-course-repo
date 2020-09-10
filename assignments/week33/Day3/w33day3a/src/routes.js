import { Page1, Page2, Page3 } from "./components";

const routes = [
  {
    path: "/page1",
    exact: true,
    component: Page1,
  },
  {
    path: "/page2",
    exact: true,
    component: Page2,
  },
  {
    path: "/page3",
    exact: true,
    component: Page3,
  },
];

export default routes;
