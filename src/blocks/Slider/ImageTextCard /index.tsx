import * as React from 'react'

import { Media } from '@components/Media'
import { Page } from '@root/payload-types'
import { RichText } from '@components/RichText'
import classes from './index.module.scss'
import { CMSLink } from '@components/CMSLink'

type Props = Extract<
  Page['layout'][0],
  { blockType: 'slider' }
>['sliderFields']['imageTextSlides'][0]

export const ImageTextCard: React.FC<Props> = ({ richText, image, link }) => {
  if (typeof image === 'string') return null

  return (
    <CMSLink {...link} className={classes.imageTextCard}>
      <Media fill resource={image} />
      <RichText className={classes.richText} content={richText} />
    </CMSLink>
  )
}
