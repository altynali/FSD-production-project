import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { FC } from 'react'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'

export interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink
          to="/"
          theme={AppLinkTheme.SECONDARY}
          className={classes.mainLink}
        >
          Main
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          about
        </AppLink>
      </div>
    </div>
  )
}
