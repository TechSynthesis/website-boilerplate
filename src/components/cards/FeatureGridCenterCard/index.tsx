import React from 'react'
import { CMSLink } from '@components/CMSLink'
// import { ArrowIcon } from '@icons/ArrowIcon'
import { Media } from '@components/Media'
import { FeatureGridProps } from '../types'

import classes from './index.module.scss'

export const FeatureGridCenterCard: React.FC<FeatureGridProps> = props => {
  const { title, className, description, key, iconImage } = props

  const hasLink = props.link.url || props.link.reference

  if (typeof iconImage === 'string') return null

  return (
    <div
      key={key}
      className={[className, classes.card, !hasLink && classes.noLink].filter(Boolean).join(' ')}
    >
      <CMSLink className={classes.link} {...props.link}>
        <div className={classes.bg} />
        <div className={classes.content}>
          <div className={classes.icon}>{iconImage && <Media resource={iconImage} />}</div>
          <div className={classes.titleWrapper}>
            <h3 className={classes.title}>{title}</h3>
            {description && <div className={classes.description}>{description}</div>}
          </div>
        </div>
      </CMSLink>
    </div>
  )
}
