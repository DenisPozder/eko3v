export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',

        },
        sitemap: 'https://www.eko-3v.rs/sitemap.xml'
    }
}