import React from 'react'

const Bookmark = ({onToggle, status, id}) => {
    return (
        <button onClick={() => onToggle(id)}>
            <span className={'bi bi-bookmark' + (status ? '-check-fill': '')}></span>
        </button>
    )
        
}
export default Bookmark