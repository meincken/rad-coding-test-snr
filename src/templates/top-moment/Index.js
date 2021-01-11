import React from "react"
import { Section, H2, P } from "../../shared/ui-kit"

import Data from "../../data/mock-api.json"
const data = Data.content.slides[3]

const TopMoment = () => {
  return (
    <Section className={`swiper-slide theme--${data.theme} ${data.template}`}>
      <div className="content-block">
        <H2 title={data.heading} />
        <P content={data.description} />
      </div>
      <div className="image-block">
        <img src={data.image.url} alt={data.image.alt} />
      </div>
    </Section>
  )
}

export default TopMoment