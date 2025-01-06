import React from 'react'


type Props = {
    title: string
}

const ColumnHeader = (props: Props) => {
    return (
        <div>
             <div class="column-header">{props.title}</div>
   
        </div>
      )
    
}

export default ColumnHeader