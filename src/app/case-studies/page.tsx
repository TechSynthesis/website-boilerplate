import React from 'react'
import { fetchCaseStudies } from '../../graphql'
import { RenderBlogArchive } from './renderCaseStudyArchive'

const Page = async () => {
  const caseStudies = await fetchCaseStudies()
  return <RenderBlogArchive posts={caseStudies} />
}

export default Page
