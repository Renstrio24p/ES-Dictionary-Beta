import React, { useState } from 'react'
import Dictionary from "../Projects/Dashboard 2 components/Dictionary"

export default function Users({showRecentSearch}) {

    return (
        <>
        <Dictionary showRecentSearch={showRecentSearch}/>
        </>
    )

}

