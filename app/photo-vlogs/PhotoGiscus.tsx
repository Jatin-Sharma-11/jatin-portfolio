"use client";

import Giscus from "@giscus/react";
import { useEffect, useState } from "react";

interface PhotoGiscusProps {
    photoId: string;
    photoTitle: string;
}

export default function PhotoGiscus({ photoId, photoTitle }: PhotoGiscusProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [theme, setTheme] = useState<"dark_high_contrast" | "light">("dark_high_contrast");

    useEffect(() => {
        // Small delay to ensure smooth rendering
        setIsVisible(true);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="hidden">
            {/* Hidden Giscus component for backend persistence */}
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setTheme(theme === "dark_high_contrast" ? "light" : "dark_high_contrast")}
                    className="text-xs text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                    {theme === "dark_high_contrast" ? "Switch to Light Theme" : "Switch to Dark Theme"}
                </button>
            </div>
            <Giscus
                key={theme}
                id={`photo-${photoId}`}
                repo="Jatin-Sharma-11/jatin-portfolio"
                repoId="R_kgDOQbE0Aw"
                category="Photos"
                categoryId="DIC_kwDOQbE0A84CyFzJ"
                mapping="specific"
                term={`photo-${photoId}-${photoTitle}`}
                reactionsEnabled="1"
                emitMetadata="1"
                inputPosition="bottom"
                theme={theme}
                lang="en"
                loading="lazy"
            />
        </div>
    );
}
