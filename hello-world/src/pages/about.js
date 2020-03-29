import React from "react"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    {/* propsで値が渡される */}
    <Header headerText="About Gatsby" />
    {/* 再利用できる */}
    <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </div>
)