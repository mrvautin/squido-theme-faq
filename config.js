const config = {
    development: {
        name: 'squido FAQ',
        description: 'An FAQ theme for squido',
        twitterHandle: '@mrvautin',
        baseUrl: 'http://localhost:4965',
        sourcesExt: 'markdown',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8,
        plugins: [
            {
                name: 'search',
                options: {}
            }
        ],
        postBuild: [
            {
                name: 'zip',
                options: {}
            }
        ]
    },
    production: {
        name: 'squido FAQ',
        description: 'An FAQ theme for squido',
        twitterHandle: '@mrvautin',
        baseUrl: 'https://squido-faq.markmoffat.com',
        sourcesExt: 'markdown',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8,
        plugins: [
            {
                name: 'search',
                options: {}
            },
            {
                name: 'robots',
                options: {}
            }
        ]
    }
};

module.exports = config;
