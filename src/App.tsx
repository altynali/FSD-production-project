import { Route, Routes } from "react-router-dom"
import "./styles/index.scss"
import { Link } from "react-router-dom"
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy"
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy"
import { Suspense, useContext, useState } from "react"
import { Theme, ThemeContext } from "./theme/ThemeContext"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames("app", [theme])}>
      <button onClick={toggleTheme}>toggle Theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">about</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" Component={MainPageLazy} />
          <Route path="/about" Component={AboutPageLazy} />
        </Routes>
      </Suspense>
    </div>
  )
}
