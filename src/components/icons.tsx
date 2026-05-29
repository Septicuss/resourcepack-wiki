
const pack = `<svg fill="currentColor" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8v5h4V8h-2V6H8v2zm-8 8h16V0H0v16zm2-2V2h12v12H2zM8 4h2V2H8v2zm2 2h2V4h-2v2zm-1 6v-2h2v2H9z" fill-rule="evenodd"/>
</svg>`;

const smile = `<svg fill="currentColor" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.874 9A4.005 4.005 0 0 1 8 12a4.005 4.005 0 0 1-3.874-3h7.748zM0 8c0-4.418 3.59-8 8-8 4.418 0 8 3.59 8 8 0 4.418-3.59 8-8 8-4.418 0-8-3.59-8-8zm2 0c0 3.307 2.686 6 6 6 3.307 0 6-2.686 6-6 0-3.307-2.686-6-6-6-3.307 0-6 2.686-6 6zm3-3h2v2H5V5zm4 0h2v2H9V5z" fill-rule="evenodd"/>
</svg>`

const info = `<svg fill="currentColor" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-2A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm-1-2h2V7H7v5zm0-6h2V4H7v2z" fill-rule="evenodd"/>
</svg>`

const font = `<svg fill="currentColor" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h16v4h-2V2H9v12h3v2H4v-2h3V2H2v2H0V2z" fill-rule="evenodd"/>
</svg>`

const item = `<svg fill="currentColor" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 5.04V4l4-4h8l4 4v1.04L8 16 0 5.04zM2 5l6 8.5L4 5H2zm12 0h-2l-4 8.5L14 5zM6 5l2 6 2-6H6zM4 2L2 4h2l2-2H4zm8 0h-2l2 2h2l-2-2zM7 2L6 4h4L9 2H7z" fill-rule="evenodd"/>
</svg>`

export const icons = {
    pack,
    smile,
    info,
    font,
    item
} as const;

export type IconName = keyof typeof icons;