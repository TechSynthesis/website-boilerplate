import * as React from 'react'
import { Media } from '@components/Media'
import Link from 'next/link'
import { BlogCardProps } from '../types'

import classes from './index.module.scss'

export const ArchiveMediaCard: React.FC<BlogCardProps> = props => {
  const { description, href, media, title, className } = props

  return (
    <div className={[classes.blogCard, className && className].filter(Boolean).join(' ')}>
      {typeof media !== 'string' && (
        <Link href={href} className={classes.blogCardInner}>
          <Media
            resource={media}
            className={classes.media}
            sizes="(max-width: 768px) 100vw, 20vw"
          />
          <span className={classes.title}>{title}</span>
        </Link>
      )}

      <p>{description}</p>
    </div>
  )
}
