import { createBrowserRouter, RouteObject } from "react-router-dom";

import AnimeHomePage from "./Anime/pages/AnimeHomePage";
import AnimeDetailPage from "./Anime/pages/AnimeDetailPage";

enum RoutePaths {
  HOME = "/",
  DETAIL_PAGE = "/detail/:id",
}

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

const router = createBrowserRouter(routeObjects);

export default router;
