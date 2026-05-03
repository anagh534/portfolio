import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items }) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": item.url ? `https://www.anaghkr.in${item.url}` : undefined
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm flex-wrap">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            {index > 0 && (
                                <ChevronRight size={14} className="text-gray-600" />
                            )}
                            {item.url ? (
                                <a
                                    href={item.url}
                                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                                >
                                    {index === 0 && <Home size={14} />}
                                    {item.label}
                                </a>
                            ) : (
                                <span className="text-white font-semibold flex items-center gap-1.5">
                                    {index === 0 && <Home size={14} />}
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
