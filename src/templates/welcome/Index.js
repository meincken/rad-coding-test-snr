import React from "react"
import { Section, H2, P, Paginate } from "../../shared/ui-kit"

import Data from "../../data/mock-api.json"
const data = Data.content.slides[0]

const Welcome = () => {
  return (
    <Section className={`swiper-slide theme--${data.theme} ${data.template}`}>
      <div className="content-block">
        <H2 title={data.content.heading} />
        <P content={data.content.description} />
      </div>
      <div className="image-block">
        <img src={data.content.image.url} alt={data.content.image.alt} />
      </div>
      <Paginate
        prevLink={data.content.back.label}
        nextLink={data.content.next.label}
      />
    </Section>
  )
}

export default Welcome
