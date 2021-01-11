import React from "react"
import { Section, H2 } from "../../shared/ui-kit"

import Data from "../../data/mock-api.json"
const data = Data.content.slides[4]

const Inspiration = () => {
  return (
    <Section className={`swiper-slide theme--${data.theme} ${data.template}`}>
      <div className="content-block">
        <H2 title={data.heading} />
        <p dangerouslySetInnerHTML={{__html: data.description}} />
      </div>
      <div className="image-block">
        <img src={data.image.url} alt={data.image.alt} />
      </div>
    </Section>
  )
}

export default Inspiration
