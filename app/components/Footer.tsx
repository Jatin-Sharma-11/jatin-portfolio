import { personalInfo } from "../data";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-slate-800 bg-slate-950">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    {personalInfo.social.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-blue-400 transition-colors"
                            aria-label={social.name}
                        >
                            <social.icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
