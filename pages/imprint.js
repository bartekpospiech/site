import React from "react";
import { Markdown, connect } from "components";

const Imprint = ({ page: { main } }) => (
  <section className="intro intro_about">
    <div className="intro--main">
      <Markdown source={main} />
    </div>
  </section>
);

export default connect(`
{
  page(id: "imprint") {
    main
  }
}
`)(Imprint);
