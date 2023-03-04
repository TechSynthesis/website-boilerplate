import React, { useState } from 'react'
import { useMouseInfo } from '@faceless-ui/mouse-info'
import { RichText } from '@components/RichText'
import Image from 'next/image'
import { ThemeProvider } from '@providers/Theme'
import { Gutter } from '@components/Gutter'
import { CaseStudy, ReusableContent } from '@root/payload-types'
import Link from 'next/link'
import classes from './index.module.scss'

type Props = Extract<ReusableContent['layout'][0], { blockType: 'caseStudiesHighlight' }>

export const CaseStudiesHighlightBlock: React.FC<Props> = ({
  caseStudiesHighlightFields: { richText, caseStudies: allCaseStudies },
}) => {
  const { xPercentage } = useMouseInfo()

  const [caseStudyRows] = useState(() => {
    const caseStudies: CaseStudy[] = [...(allCaseStudies as CaseStudy[])]

    let i = 0

    while (caseStudies.length < 6) {
      caseStudies.push(caseStudies[i])
      i += 1
    }

    const rows: CaseStudy[][] = []

    for (let n = 0; n < caseStudies.length; n += 4) {
      rows.push((caseStudies as CaseStudy[]).slice(n, n + 6))
    }

    return rows
  })
  function slugToText(str) {
    const newStr = str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    return newStr
  }

  return (
    <React.Fragment>
      <Gutter>
        <RichText className={classes.content} content={richText} />
      </Gutter>
      <div className={classes.wrap}>
        {/* <div className={classes.title}>
          <div className={classes.titleInner}>Applications</div>
        </div> */}
        <div
          className={classes.inner}
          style={{
            transform: `translate3d(${(xPercentage - 20) * -0.1}%, 0, 0)`,
          }}
        >
          <ThemeProvider theme="dark">
            {caseStudyRows.map((row, i) => {
              return (
                <ul key={i} className={classes.row}>
                  {row.map(caseStudy => {
                    const { slug, featuredImage, title } = caseStudy

                    let url
                    let alt

                    if (typeof featuredImage === 'object') {
                      url = featuredImage.url
                      alt = featuredImage.alt
                    }

                    return (
                      <li key={slug} className={classes.imageWrap}>
                        <Link href={`/case-studies/${slug}`} className={classes.image}>
                          <Image src={`${process.env.NEXT_PUBLIC_CMS_URL}${url}`} fill alt={alt} />
                          <span className={classes.caseStudyTitle}>
                            {slugToText(slug)} <RichText content={title} />
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )
            })}
          </ThemeProvider>
        </div>
      </div>
    </React.Fragment>
  )
}
