import React, { useEffect } from "react";

function MyProjectsPage() {

    useEffect(() => {
        document.title = "مشاريعي";
    })

    return (
        <div className="app-page rel">
            <h1 className="page-title fonts24 fontb color333">مشاريعي</h1>
        </div>
    )
}

export default MyProjectsPage;