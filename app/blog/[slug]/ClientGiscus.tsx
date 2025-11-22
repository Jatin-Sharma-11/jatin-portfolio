"use client";

import Giscus from "@giscus/react";

export default function ClientGiscus() {
    return (
        <Giscus
            id="comments"
            repo="Jatin-Sharma-11/jatin-portfolio"
            repoId="R_kgDOQbE0Aw"
            category="General"
            categoryId="DIC_kwDOQbE0A84CyFzJ"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"       // you can use "bottom" if you prefer
            theme="dark"
            lang="en"
            loading="lazy"
        />
    );
}
