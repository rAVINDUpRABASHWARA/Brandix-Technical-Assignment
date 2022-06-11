import React from 'react'

//Password validator messagees
const PWDValidatorMessage1 = ({
    capsLetterFlag,
    numberFlag,
    pwdLengthFlag,
}) => {
    return (
        <div>
            <p className={numberFlag}>Must contain Numbers</p>
            <p className={pwdLengthFlag}>Must be 8 Characters long</p>
        </div>
    )
    }

export default PWDValidatorMessage1
