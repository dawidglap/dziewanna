import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Configurazione Next.js con globalNotFound abilitato
const nextConfig: NextConfig = {
    experimental: {
        globalNotFound: true,
    },
};

// Wrappa con next-intl plugin
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
