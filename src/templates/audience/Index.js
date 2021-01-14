import React from "react"
import { Section, H2, P, Paginate, Input } from "../../shared/ui-kit"

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
        <form>
          <Input value={data.content.groups[0].label} />
          <Input value={data.content.groups[1].label} />
          <Input value={data.content.groups[2].label} />
        </form>
      </div>
      <Paginate
        prevLink={data.content.back.label}
        nextLink={data.content.next.label}
      />
    </Section>
  )
}

export default Audience
