/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'avatar.iran.liara.run',
                pathname: '**',
            },
            {
                protocol:'http',
                hostname: 'demo.devprattle.com',
                pathname: '/**'
            },
            {
                protocol:'https',
                hostname: 'api.devprattle.com',
                pathname: '/**'
            },
            {
                protocol:'http',
                hostname:'localhost',
                port:'8000',
                pathname:'/**'
            },
            {
                protocol:'http',
                hostname:'localhost',
                port:'1337',
                pathname:'/**'
            },
            
        ],
    },
};

export default nextConfig;
