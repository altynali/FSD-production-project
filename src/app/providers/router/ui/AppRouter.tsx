import { AboutPageLazy } from "pages/AboutPage/ui/AboutPage.lazy"
import { MainPageLazy } from "pages/MainPage/ui/MainPage.lazy"
import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
export default AppRouter
