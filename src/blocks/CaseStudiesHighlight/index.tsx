import React, { useRef, useState } from 'react'
import { useMouseInfo } from '@faceless-ui/mouse-info'
import { RichText } from '@components/RichText'
import Image from 'next/image'
import { ThemeProvider } from '@providers/Theme'
import { Gutter } from '@components/Gutter'
import { CaseStudy, ReusableContent } from '@root/payload-types'
import Link from 'next/link'
import { ArrowIcon } from '@root/icons/ArrowIcon'
import classes from './index.module.scss'

type Props = Extract<ReusableContent['layout'][0], { blockType: 'caseStudiesHighlight' }>

export const CaseStudiesHighlightBlock: React.FC<Props> = ({
  caseStudiesHighlightFields: { richText, caseStudies: allCaseStudies },
}) => {
  if (!allCaseStudies || !allCaseStudies.length) {
    return null
  }

  const { xPercentage } = useMouseInfo()

  const [caseStudyRows] = useState(() => {
    const caseStudies: CaseStudy[] = [...(allCaseStudies as CaseStudy[])]

    let i = 0

    while (caseStudies.length < 12) {
      caseStudies.push(caseStudies[i])
      i += 1
    }

    const rows: CaseStudy[][] = []
    const rowLength = Math.ceil(caseStudies.length / 2)

    for (let n = 0; n < rowLength * 2; n += rowLength) {
      const row = (caseStudies as CaseStudy[]).slice(n, n + rowLength)
      rows.push(row)
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
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartX(e.pageX - e.currentTarget.offsetLeft)
    setScrollLeft(e.currentTarget.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - e.currentTarget.offsetLeft
    const walk = (x - startX) * 3
    e.currentTarget.scrollLeft = scrollLeft - walk
  }

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScrollLeft = () => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.scrollLeft -= scrollContainer.clientWidth
    }
  }

  const handleScrollRight = () => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.scrollLeft += scrollContainer.clientWidth
    }
  }

  return (
    <React.Fragment>
      <Gutter>
        <RichText className={classes.content} content={richText} />
      </Gutter>
      <div
        className={classes.wrap}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        ref={scrollContainerRef}
      >
        <div
          className={classes.inner}
          style={{
            transform: `translate3d(${(xPercentage - 20) * -0.1}%, 0, 0)`,
          }}
        >
          <ThemeProvider theme="dark">
            {caseStudyRows &&
              caseStudyRows.map((row, i) => {
                return (
                  <div key={i} className={classes.row}>
                    {row.map(caseStudy => {
                      const { slug, featuredImage, title } = caseStudy

                      let url
                      let alt

                      if (typeof featuredImage === 'object') {
                        url = featuredImage.url
                        alt = featuredImage.alt
                      }

                      return (
                        <div key={slug} className={classes.imageWrap}>
                          <Link href={`/case-studies/${slug}`} className={classes.image}>
                            <Image
                              src={`${process.env.NEXT_PUBLIC_CMS_URL}${url}`}
                              fill
                              alt={alt}
                            />
                            <span className={classes.caseStudyTitle}>
                              {slugToText(slug)} <RichText content={title} />
                            </span>
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
          </ThemeProvider>
        </div>
      </div>
      <Gutter>
        <div className={classes.sliderNav}>
          <button
            onClick={handleScrollLeft}
            className={[classes.navButton, classes.prevButton].filter(Boolean).join(' ')}
          >
            <ArrowIcon rotation={225} />
          </button>
          <button onClick={handleScrollRight} className={classes.navButton}>
            <ArrowIcon rotation={45} />
          </button>
        </div>
      </Gutter>
    </React.Fragment>
  )
}
