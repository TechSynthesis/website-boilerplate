import React, { Fragment } from 'react'
import { Media } from '@root/payload-types'

export type MetaType = {
  image?: Media | string
  description: string
  title: string
  slug: string
}

const defaults = {
  title: 'CMW CO2 Technologies',
  description: 'The future of Dry Ice Cleaning Technology',
  image: '',
}

const Meta: React.FC<MetaType> = ({
  title: titleFromProps,
  description: descriptionFromProps,
  image: imageFromProps,
  slug,
}) => {
  const title = titleFromProps || defaults.title
  const description = descriptionFromProps || defaults.description
  const image =
    typeof imageFromProps !== 'string' && imageFromProps?.url
      ? `${process.env.NEXT_PUBLIC_CMS_URL}${imageFromProps.url}`
      : defaults.image

  return (
    <Fragment>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`https://cmw-dryice.com/${slug}`} />
      <meta property="og:site_name" content="Tech Inverted" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />
    </Fragment>
  )
}

export default Meta
