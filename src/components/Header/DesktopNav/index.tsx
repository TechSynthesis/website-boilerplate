import * as React from 'react'
import { Cell, Grid } from '@faceless-ui/css-grid'
import Link from 'next/link'
import { Gutter } from '@components/Gutter'
import { MainMenu } from '@root/payload-types'
// import { TwitterIcon } from '@root/graphics/TwitterIcon'
import { Button } from '@components/Button'
import { FullLogo } from '../../../graphics/FullLogo'
import { CMSLink } from '../../CMSLink'
// import { DocSearch } from '../Docsearch'
import classes from './index.module.scss'

export const DesktopNav: React.FC<Pick<MainMenu, 'navItems'>> = ({ navItems }) => {
  return (
    <Gutter className={classes.desktopNav}>
      <Grid className={classes.grid}>
        <Cell className={classes.content}>
          <Link href="/" className={classes.logo}>
            <FullLogo />
          </Link>

          <div className={classes.navItems}>
            {(navItems || []).map((item, index) => {
              return <CMSLink className={classes.navItem} key={index} {...item.link} />
            })}
          </div>

          <div className={classes.navCta}>
            <Link href="/contact-us" className={classes.ctaItem}>
              Get In touch
            </Link>
            <Button
              className={classes.ctaItem}
              appearance="primary"
              label="Schedule Call"
              icon="arrow"
              el={'a'}
              href="/schedule-call"
            />
          </div>
        </Cell>
      </Grid>
    </Gutter>
  )
}
