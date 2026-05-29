import {getEntry} from "astro:content";
import config from "../../content/config.ts";


export const getPage = async (id: string) => {
    return await getEntry('wiki', id);
}

export const getPageGitHubLink = async (id: string): Promise<string | undefined> => {
    const page = await getPage(id);
    if (!page) {
        return undefined;
    }

    return `${config.repositoryUrl}/blob/main/${page.filePath}`
}
