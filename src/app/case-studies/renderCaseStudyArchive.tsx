'use client'

import React from 'react'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { DefaultHero } from '@components/Hero/Default'
import { BlockSpacing } from '@components/BlockSpacing'
import { CaseStudy } from '@root/payload-types'
import { ContentMediaCard } from '@components/cards/ContentMediaCard'
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
                text: 'Stay Updated',
              },
            ],
          },
          {
            text: 'Find news about product releases, happenings in the industry, and announcements.',
          },
        ]}
      />
      <Gutter>
        <BlockSpacing>
          <Grid>
            {(posts || []).map(post => {
              return (
                <Cell key={post.id} cols={3} colsM={4} colsS={8} className={classes.post}>
                  <ContentMediaCard
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
