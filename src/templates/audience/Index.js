import React from "react"
import { Section, H2, P, Paginate } from "../../shared/ui-kit"

import Data from "../../data/mock-api.json"
const data = Data.content.slides[2]

const Audience = () => {
  return(
    <Section className={`swiper-slide theme--${data.theme} ${data.template}`}>
      <div className="content-block">
        <H2 title={data.content.heading} />
        <P content={data.content.description} />
      </div>
      <div className="image-block">
        <input type="radio" value={data.content.groups[0].label.replace(/\s+/g, '-').toLowerCase()} name="group" /> {data.content.groups[0].label}
        <br />
        <input type="radio" value={data.content.groups[1].label.replace(/\s+/g, '-').toLowerCase()} name="group" /> {data.content.groups[1].label}
        <br />
        <input type="radio" value={data.content.groups[2].label.replace(/\s+/g, '-').toLowerCase()} name="group" /> {data.content.groups[2].label}
      </div>
      <Paginate />
    </Section>
  )
}

export default Audience
