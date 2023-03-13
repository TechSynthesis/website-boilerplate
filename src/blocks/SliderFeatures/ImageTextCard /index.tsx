import * as React from 'react'

import { Media } from '@components/Media'
import { Page } from '@root/payload-types'
import { RichText } from '@components/RichText'
import classes from './index.module.scss'

type Props = Extract<
  Page['layout'][0],
  { blockType: 'slider' }
>['sliderFields']['imageTextSlides'][0]

export const ImageTextCard: React.FC<Props> = ({ richText, image }) => {
  if (typeof image === 'string') return null

  return (
    <div className={classes.featureCard}>
      <Media resource={image} className={classes.featureImage} />
      <RichText className={classes.richText} content={richText} />
    </div>
  )
}
