import React from 'react'

const useForm = (initialState={}) => {
    const [values, setValues] = React.useState(initialState)
    
    const handleInputChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    const reset=()=>{
        setValues(initialState)
    }
    return[ 
        values,
        handleInputChange,
        reset
    ]
}   

export default useForm