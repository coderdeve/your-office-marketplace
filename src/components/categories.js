import React, { useEffect } from "react";

function CategoriesPage() {

    useEffect(()=>{
        document.title = "الاقسام";
    })

    return (
        <div className="app-page rel">
            <h1 className="page-title fonts24 fontb color333">الاقسام</h1>
        </div>
    )
}

export default CategoriesPage;