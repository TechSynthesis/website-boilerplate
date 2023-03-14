import {
  CALL_TO_ACTION,
  CARD_GRID,
  CASE_STUDIES_HIGHLIGHT,
  CODE_FEATURE,
  CONTENT,
  CONTENT_GRID,
  FORM_BLOCK,
  HOVER_HIGHLIGHTS,
  LINK_GRID,
  MEDIA_BLOCK,
  MEDIA_CONTENT,
  REUSABLE_CONTENT_BLOCK,
  SLIDER,
  STEPS,
  STICKY_HIGHLIGHTS,
  FEATURE_GRID,
  ACCORDION,
} from './blocks'
import { MEDIA_FIELDS } from './media'
import { META_FIELDS } from './meta'

export const CASE_STUDIES = `
  query CaseStudies {
    CaseStudies(limit: 300) {
      docs {
        id
        title
        featuredImage ${MEDIA_FIELDS}
        createdAt
        slug
      }
    }
  }
`

export const CASE_STUDY = `
  query CaseStudy($slug: String ) {
    CaseStudies(where: { slug: { equals: $slug} }, draft: true) {
      docs {
        id
        title
        introContent
        featuredImage ${MEDIA_FIELDS}
        slug
        url
        layout {
          ${ACCORDION}
          ${CALL_TO_ACTION}
          ${CARD_GRID}
          ${CASE_STUDIES_HIGHLIGHT}
          ${CODE_FEATURE}
          ${CONTENT}
          ${CONTENT_GRID}
          ${FORM_BLOCK}
          ${HOVER_HIGHLIGHTS}
          ${LINK_GRID}
          ${MEDIA_BLOCK}
          ${MEDIA_CONTENT}
          ${REUSABLE_CONTENT_BLOCK}
          ${SLIDER}
          ${STEPS}
          ${STICKY_HIGHLIGHTS}
          ${FEATURE_GRID}
        }
        meta ${META_FIELDS}
      }
    }
  }
`
