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
                hostname:'localhost',
                port:'1337',
                pathname:'/**'
            },
            {
                protocol:'http',
                hostname: 'demo.devprattle.com',
                port: '1337',
                pathname: '/**'
            },
        ],
    },
};

export default nextConfig;
