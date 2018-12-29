import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "VivaTube";
  res.locals.routes = routes;
  next();
};
