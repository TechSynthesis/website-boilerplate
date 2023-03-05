'use client'

import { CMSLink } from '@components/CMSLink'
import Image from 'next/image'
import React from 'react'
// import Marquee from 'react-fast-marquee'
import { ThemeProvider } from '@providers/Theme'
import { Gutter } from '@components/Gutter'
// import { Media } from '@components/Media'
import { RichText } from '@components/RichText'
import { Page } from '@root/payload-types'
import { HeaderObserver } from '../../HeaderObserver'

import classes from './index.module.scss'

export const HomeHero: React.FC<Page['hero']> = ({ richText, actions }) => {
  // const theme = useTheme()

  return (
    <div className={classes.homeHero}>
      <ThemeProvider theme="dark" className={classes.wrap}>
        <HeaderObserver color="dark">
          <div className={classes.bg}>
            <div className={classes.bgImage}>
              <Image
                priority
                src="/images/background-gun.jpg"
                fill
                alt="Screenshots of CMW"
                sizes="210vh" // aspect ratio of png, translates to 100vh 191
              />
            </div>
          </div>
          <div className={classes.contentWrap}>
            <Gutter>
              <div className={classes.content}>
                <RichText className={classes.richText} content={richText} />
                <div className={classes.sidebar}>
                  {Array.isArray(actions) && (
                    <ul className={classes.actions}>
                      <p className={classes.shortIntro}>
                        India’s top manufacturing companies trust CMW for their service cleaning
                        needs.
                      </p>
                      <p className={classes.shortIntro}>
                        Meet your all-in-one solution – for
                        <br /> all your cleaning needs – today.
                      </p>
                      {actions.map(({ link }, i) => {
                        return (
                          <li key={i}>
                            <CMSLink {...link} appearance="default" fullWidth />
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              </div>
              <hr />
            </Gutter>
            {/* {Array.isArray(adjectives) && (
              <div className={classes.adjectives}>
                {adjectives.map(({ adjective }, i) => (
                  <span key={i} className={classes.adjective}>
                    {adjective}
                  </span>
                ))}
              </div>
            )} */}
            {/* <Gutter>
              <div className={classes.bottomPadding} />
            </Gutter> */}
          </div>
        </HeaderObserver>
      </ThemeProvider>
      <section className={classes.CenteredBrandText}>
        <div className={classes.textBlock}>
          <h2 className={classes.gradientText}>CMW is an all-in-one</h2>
          <h2 className={classes.gradientText}>Solution</h2>
        </div>
        <div className={classes.textBlock}>
          <h2 className={classes.gradientText}>Loved by the leading</h2>
          <h2 className={classes.gradientText}>Manufacturing Companies in the world.</h2>
        </div>
      </section>
    </div>
  )
}
