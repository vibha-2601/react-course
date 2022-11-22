import React from 'react'

function MamoFunctional({name}) {
  console.log('Rendering Memo Component')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MamoFunctional)
