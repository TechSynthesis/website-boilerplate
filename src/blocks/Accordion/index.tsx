import { BlockSpacing } from '@components/BlockSpacing'
import { RichText } from '@components/RichText'
import { Cell, Grid } from '@faceless-ui/css-grid'
import React, { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleGroup,
  CollapsibleToggler,
} from '@faceless-ui/collapsibles'
import { Page } from '@root/payload-types'
import { Gutter } from '@components/Gutter'
import { ChevronIcon } from '@root/graphics/ChevronIcon'
import classes from './index.module.scss'

export type AccordionProps = Extract<Page['layout'][0], { blockType: 'accordion' }>

interface AccordionContentProps {
  accordionRows: {
    label: string
    answer: {
      [k: string]: unknown
    }[]
    enableLink?: boolean
  }[]
}

const AccordionContent: React.FC<AccordionContentProps> = ({ accordionRows }) => {
  return (
    <CollapsibleGroup transTime={250} transCurve="ease-in-out">
      {accordionRows.map((row, index1) => {
        const { label, answer } = row
        return (
          <Collapsible key={index1}>
            {/* @ts-ignore */}
            {({ isOpen }) => {
              return (
                <>
                  <CollapsibleToggler className={classes.accordionToggler}>
                    {label}
                    <ChevronIcon className={classes.chevron} rotation={isOpen ? 270 : -270} />
                  </CollapsibleToggler>
                  <CollapsibleContent
                    className={[classes.accordionContent, isOpen && classes.accordionContentIsOpen]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <RichText content={answer} />
                    {label}
                  </CollapsibleContent>
                </>
              )
            }}
          </Collapsible>
        )
      })}
    </CollapsibleGroup>
  )
}

export const Accordion: React.FC<AccordionProps> = props => {
  const {
    accordionFields: { richText, tabs },
  } = props

  const hasCards = Array.isArray(tabs) && tabs.length > 0
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <BlockSpacing className={classes.cardGrid}>
      <Gutter>
        <hr className={classes.hr} />
        {richText && (
          <Grid className={classes.intro}>
            <Cell cols={8} colsM={8}>
              <RichText className={classes.richText} content={richText} />
            </Cell>
          </Grid>
        )}

        {hasCards && (
          <div>
            <Grid>
              <Cell cols={12} className={classes.tabs}>
                {tabs.map((tab, index) => {
                  const { tabTitle } = tab
                  const isActive = index === activeTab
                  return (
                    <div
                      className={[isActive && classes.buttonActive].filter(Boolean).join(' ')}
                      key={index}
                    >
                      <button onClick={() => handleTabClick(index)}>{tabTitle}</button>
                    </div>
                  )
                })}
              </Cell>
              <Cell cols={12} style={{ marginTop: '-35px !important' }}>
                {tabs.map((tab, index) => {
                  const { accordion } = tab
                  const isActive1 = index === activeTab
                  return <>{isActive1 && <AccordionContent accordionRows={accordion} />}</>
                })}
              </Cell>
            </Grid>
          </div>
        )}
      </Gutter>
    </BlockSpacing>
  )
}
