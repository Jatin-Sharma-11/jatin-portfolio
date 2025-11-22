import { clsx } from "clsx";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
    return (
        <section id={id} className={clsx("py-20 md:py-32", className)}>
            <div className="container mx-auto px-6">{children}</div>
        </section>
    );
}
