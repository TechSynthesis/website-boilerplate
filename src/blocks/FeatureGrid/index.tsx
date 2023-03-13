import { BlockSpacing } from '@components/BlockSpacing'
import { PixelBackground } from '@components/PixelBackground'
import { RichText } from '@components/RichText'
import { Cell, Grid } from '@faceless-ui/css-grid'
import React from 'react'
import { Page } from '@root/payload-types'
import { Gutter } from '@components/Gutter'
import { CMSLink } from '@components/CMSLink'
import { Media } from '@components/Media'
import { FeatureGridCard } from '@components/cards/FeatureGridCard'
import classes from './index.module.scss'

export type FeatureGridProps = Extract<Page['layout'][0], { blockType: 'featureGrid' }>

export const FeatureGrid: React.FC<FeatureGridProps> = props => {
  const {
    featureGridFields: { richText, cards, links, productPhoto },
  } = props

  const hasCards = Array.isArray(cards) && cards.length > 0
  const hasLinks = Array.isArray(links) && links.length > 0

  if (typeof productPhoto === 'string') return null

  const midIndex = Math.floor(cards.length / 2)
  const cardsArray1 = cards.slice(0, midIndex)
  const cardsArray2 = cards.slice(midIndex)

  return (
    <BlockSpacing className={classes.cardGrid}>
      <Gutter>
        <hr className={classes.hr} />
        {richText && (
          <Grid className={classes.intro}>
            <Cell cols={8} colsM={8}>
              <RichText className={classes.richText} content={richText} />
            </Cell>
            {hasLinks && (
              <Cell cols={3} colsL={4} start={10} startL={9} startM={1} colsM={8}>
                {links.map(({ link }, index) => {
                  return (
                    <CMSLink
                      {...link}
                      key={index}
                      appearance="default"
                      fullWidth
                      buttonProps={{
                        icon: 'arrow',
                      }}
                    />
                  )
                })}
              </Cell>
            )}
          </Grid>
        )}
        {hasCards && (
          <div className={classes.cards}>
            <div className={classes.bg}>
              <PixelBackground />
              {/* Add an image toggle */}
            </div>
            <Grid>
              <Cell cols={4} colsM={8}>
                {cardsArray1.map((card, index) => {
                  const { title, description, link, cardIcon } = card
                  return (
                    <FeatureGridCard
                      className={classes.card}
                      title={title}
                      description={description}
                      link={link}
                      key={index}
                      iconImage={cardIcon}
                    />
                  )
                })}
              </Cell>
              <Cell cols={4} colsM={8} className={classes.imageContainer}>
                <Media resource={productPhoto} />
              </Cell>
              <Cell cols={4} colsM={8}>
                {cardsArray2.map((card, index) => {
                  const { title, description, link, cardIcon } = card
                  return (
                    <FeatureGridCard
                      className={classes.card}
                      title={title}
                      description={description}
                      link={link}
                      key={index}
                      iconImage={cardIcon}
                    />
                  )
                })}
              </Cell>
            </Grid>
          </div>
        )}
      </Gutter>
    </BlockSpacing>
  )
}
