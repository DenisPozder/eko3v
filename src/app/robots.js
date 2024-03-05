export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',

        },
        sitemap: 'https://eko3v.vercel.app/sitemap.xml'
    }
}