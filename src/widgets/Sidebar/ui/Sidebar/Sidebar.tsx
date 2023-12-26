import { classNames } from "shared/lib/classNames/classNames"
import classes from "./Sidebar.module.scss"
import { FC, useState } from "react"
import { ThemeSwitcher } from "../../../ThemeSwitcher"
import { LangSwitcher } from "widgets/LangSwitcher"

export interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState<boolean>(true)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang}/>
      </div>
    </div>
  )
}
