import wikiConfig from "../../content/config.ts";

export const light = Object.entries(wikiConfig.themes.light)
    .map(([k, v]) => `--${k}: ${v}`)
    .join('; ');
export const dark  = Object.entries(wikiConfig.themes.dark)
    .map(([k, v]) => `--${k}: ${v}`)
    .join('; ');


export const setTheme = () => {
    const saved = localStorage.getItem('wiki-theme');
    const isDark = saved === 'dark';

    if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.cssText = `${dark}`;
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.cssText = `${light}`;
    }
}

export const getTheme = (): "dark" | "light" => {
    return localStorage.getItem('wiki-theme') as "dark" | "light" ?? 'light';
}

export const toggleTheme = (): "dark" | "light" => {
    const saved = localStorage.getItem('wiki-theme');
    const newTheme = saved === 'dark' ? 'light' : 'dark';

    localStorage.setItem('wiki-theme', newTheme)

    setTheme()

    return newTheme
}