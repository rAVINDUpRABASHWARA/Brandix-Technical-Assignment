import React from 'react'

//Password validator messagees
const PWDValidatorMessage1 = ({
    numberFlag,
    pwdLengthFlag,
}) => {
    return (
        <div>
            <p className={numberFlag}>Must contain Numbers</p>
            <p className={pwdLengthFlag}>Must be between 9 to 12 Numbers</p>
        </div>
    )
    }

export default PWDValidatorMessage1
