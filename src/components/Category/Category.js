import React from 'react'

function Category(props) {
    return (
        <div>
            <h1>{props.location.state.data}</h1>
        </div>
    )
}

export default Category
