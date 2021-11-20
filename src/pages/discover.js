import React, { useEffect } from "react";

function DiscoverPage() {

    useEffect(()=>{
        document.title = "اكتشف";
    })

    return (
        <div className="app-page rel">
            <h1 className="page-title fonts24 fontb color333">اكتشف</h1>
        </div>
    )
}

export default DiscoverPage;