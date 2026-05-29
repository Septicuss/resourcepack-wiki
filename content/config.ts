

interface WikiTheme {
    background?: string,
    sidebarBackground?: string,
    text?: string,
    textSecondary?: string,
    textHighlight?: string,
    border?: string,
    hover?: string,
    active?: string,
    accent?: string,
    accentLight?: string,
    shadow?: string,
    icon?: string
}

interface WikiThemes {
    light: WikiTheme,
    dark: WikiTheme,
}

interface WikiConfig {
    title: string,
    version: string,
    repositoryUrl: string,
    themes: WikiThemes
}

const config: WikiConfig = {
    title: 'Resource Pack Wiki',
    repositoryUrl: 'https://github.com/Septicuss/resourcepack-wiki',
    version: '26.1.2',
    themes: {
        light: {
            background: '#ffffff',
            sidebarBackground: '#f8f9fa',
            text: '#1a1a1a',
            textHighlight: '#387dc9',
            textSecondary: '#6b7280',
            border: '#e5e7eb',
            hover: '#f3f4f6',
            active: '#e5e7eb',
            accent: '#387dc9',
            accentLight: '#eff6ff',
            shadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            icon: '#387dc9'
        },
        dark: {
            background: '#161620',
            sidebarBackground: '#16213e',
            text: '#e5e7eb',
            textSecondary: '#9ca3af',
            border: '#374151',
            hover: '#1f2937',
            active: '#374151',
            accent: '#387dc9',
            accentLight: '#1e3a5f',
            shadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
            icon: '#387dc9'
        }
    }
}

export default config;