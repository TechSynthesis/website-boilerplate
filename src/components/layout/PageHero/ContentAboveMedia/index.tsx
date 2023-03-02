import React from 'react'
import { Grid, Cell } from '@faceless-ui/css-grid'
import { RichText } from '@components/RichText'
import { Type as MediaType } from '../../../../collections/Media'

import GridContainer from '../../GridContainer'
import Gutter from '../../Gutter'
import useStyles from './css'
import { Media } from '../../../Media'
import { joinClassNames } from '../../../../css/joinClassNames'

type Props = {
  content: unknown
  media?: MediaType
}

const ContentAboveMediaPageHero: React.FC<Props> = ({ content, media }) => {
  const classes = useStyles()

  return (
    <div className={classes.wrap}>
      <GridContainer>
        <Grid>
          <Cell cols={10} start={2} colsM={8} startM={1}>
            <RichText
              className={joinClassNames([classes.afterLoad, classes.richText])}
              content={content}
            />
          </Cell>
        </Grid>
      </GridContainer>
      <Gutter left right>
        <div className={classes.media}>
          <Media {...media} />
        </div>
      </Gutter>
    </div>
  )
}

export default ContentAboveMediaPageHero
