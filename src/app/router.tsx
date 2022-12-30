import { createBrowserRouter, RouteObject } from "react-router-dom";

import AnimeHomePage from "./Anime/pages/AnimeHomePage";
import AnimeDetailPage from "./Anime/pages/AnimeDetailPage";
import InvariantPage from "./Common/pages/InvariantPage";

export const RoutePaths = {
  HOME: "/",
  DETAIL_PAGE: "/detail/:id",
};

const commonOptions = { errorElement: <InvariantPage /> };

const routeObjects: RouteObject[] = [
  {
    path: RoutePaths.HOME,
    element: <AnimeHomePage />,
  },
  {
    path: RoutePaths.DETAIL_PAGE,
    element: <AnimeDetailPage />,
  },
];

function getRouteObjects() {
  return routeObjects.map((route) => ({ ...route, ...commonOptions }));
}

const router = createBrowserRouter(getRouteObjects());

export default router;
