'use client'

import React from 'react'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { DefaultHero } from '@components/Hero/Default'
import { BlockSpacing } from '@components/BlockSpacing'
import { CaseStudy } from '@root/payload-types'
import { ArchiveMediaCard } from '@components/cards/ArchiveMediaCard'
import { Gutter } from '@components/Gutter'

import classes from './index.module.scss'

export const RenderBlogArchive: React.FC<{ posts: CaseStudy[] }> = ({ posts }) => {
  return (
    <React.Fragment>
      <DefaultHero
        richText={[
          {
            type: 'h2',
            children: [
              {
                text: 'Applications',
              },
            ],
          },
          {
            text: 'Innovative Solutions for a wide range of Applications',
          },
        ]}
      />
      <Gutter>
        <BlockSpacing>
          <Grid>
            {(posts || []).map(post => {
              return (
                <Cell key={post.id} cols={3} colsM={4} colsS={8} className={classes.post}>
                  <ArchiveMediaCard
                    title={post.title}
                    description={post?.meta?.description}
                    href={`/case-studies/${post.slug}`}
                    media={post.featuredImage}
                  />
                </Cell>
              )
            })}
          </Grid>
        </BlockSpacing>
      </Gutter>
    </React.Fragment>
  )
}

export default RenderBlogArchive
