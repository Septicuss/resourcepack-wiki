import {getEntry} from "astro:content";


export const getPage = async (id: string) => {
    return await getEntry('wiki', id);
}

