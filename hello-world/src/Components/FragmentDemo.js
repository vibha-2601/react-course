// Fragment: group a list of  children elements without adding extra nodes to the DOM. We can use short syntax as '<> </>'. We can pass 'only key'attribute in Fragment, then not use the shorthand syntax.

import React from 'react'

function FragmentDemo() {
  return (
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>This is a Fragment Demo Component</p>
    </React.Fragment>
  )
}

export default FragmentDemo
