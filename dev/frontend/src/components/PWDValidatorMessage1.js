import React from 'react'

//Password validator messagees
const PWDValidatorMessage1 = ({
    capsLetterFlag,
}) => {
    return (
        <div>
            <p className={capsLetterFlag}>Must be Characters Only</p>
        </div>
    )
    }

export default PWDValidatorMessage1
