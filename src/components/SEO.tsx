import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    structuredData?: object;
    noindex?: boolean;
    keywords?: string;
}

const SEO = ({
    title,
    description,
    canonical,
    ogImage = '',
    ogType = 'website',
    structuredData,
    noindex = false,
    keywords,
}: SEOProps) => {
    const siteName = 'Sahara';
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Fine Minimalist Jewellery`;
    const siteUrl = 'https://sahara.framer.website'; 
    const currentUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={currentUrl} />
            {noindex && <meta name="robots" content="noindex, follow" />}

            {/* Open Graph / WhatsApp / Instagram */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />

            {/* Structured Data (JSON-LD) */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}

            {/* Default Organization Schema for all pages */}
            {!structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Sahara",
                        "url": "https://sahara.framer.website",
                        "logo": "https://sahara.framer.website/logo.png",
                        "description": "Minimalist handcrafted fine jewellery suitable for the modern era.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Accra",
                            "addressCountry": "GH"
                        }
                    })}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
