import React from "react"
import { Section, H2, P } from "../../shared/ui-kit"

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
      <nav className="slide-nav">
        <button className="btn btn-prev" title={data.content.back.label}>Back</button>
        <button className="btn btn-next" title={data.content.next.label}>Next</button>
      </nav>
    </Section>
  )
}

export default Audience
