import React from 'react'
import { SliderProvider, SliderTrack, Slide, DotsNav } from '@faceless-ui/slider'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { Page } from '@root/payload-types'

import { BlockSpacing } from '@components/BlockSpacing'
import { RichText } from '@components/RichText'
import { CMSLink } from '@components/CMSLink'
import { FeatureGridCenterCard } from '@components/cards/FeatureGridCenterCard'
import classes from './index.module.scss'

export type ProductFeaturesProps = Extract<Page['layout'][0], { blockType: 'productFeatures' }>

export const ProductFeatures: React.FC<ProductFeaturesProps> = props => {
  const {
    productFeaturesFields: { links, cards, richText },
  } = props

  const hasCards = Array.isArray(cards) && cards.length > 0
  const hasLinks = Array.isArray(links) && links.length > 0
  return (
    <BlockSpacing className={classes.cardGrid}>
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
      <Grid>
        {hasCards && (
          <Cell start={2} cols={10} colsM={6} colsS={8} className={classes.pixelCell}>
            <SliderProvider slidesToShow={1} autoPlay>
              <SliderTrack className={classes.track}>
                {cards.map((card, index) => {
                  const { title, description, link, cardIcon } = card
                  return (
                    <Slide key={index} index={index} className={classes.slide}>
                      <FeatureGridCenterCard
                        className={classes.card}
                        title={title}
                        description={description}
                        link={link}
                        key={index}
                        iconImage={cardIcon}
                      />
                    </Slide>
                  )
                })}
              </SliderTrack>
              <DotsNav
                className={classes.dots}
                dotClassName={classes.dot}
                activeDotClassName={classes.dotIsActive}
              />
            </SliderProvider>
          </Cell>
        )}
      </Grid>
    </BlockSpacing>
  )
}
