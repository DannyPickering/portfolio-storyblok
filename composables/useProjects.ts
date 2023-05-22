import { Ref } from 'vue'

interface Project {
    full_slug: string;
    uuid: string;
}

const state = reactive({
    projects: [] as Project[],
})

export function useProjects(filter?: Ref<string>) {
    const storyblokApi = useStoryblokApi()

    async function fetchProjects(per_page: number) {
        let params: {
            version: string,
            starts_with: string,
            is_startpage: number,
            per_page: number,
            with_tag?: string
        } = {
            version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
            starts_with: 'portfolio/',
            is_startpage: 0,
            per_page: per_page,
        }

        if (filter?.value) {
            params = {
                ...params,
                with_tag: filter.value
            }
        }

        const { data } = await storyblokApi.get('cdn/stories/', params as Object)

        state.projects = data.stories.map((project: any) => ({
            ...project,
        }))
    }

    async function fetchProjectsByTag(tag: string) {
        try {
            const { data } = await storyblokApi.get('cdn/stories', {
                version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
                starts_with: 'portfolio',
                is_startpage: 0,
                with_tag: tag
            })

            state.projects = data.stories.map((project: any) => ({
                ...project
            }))
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchProjectBySlug(slug: string) {
        try {
            const { data } = await storyblokApi.get('cdn/stories', {
                version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
                starts_with: 'portfolio/',
                by_slugs: '*/' + slug,
                is_startpage: 0
            })

            const story = data.stories[0]

            return story
        } catch (error) {
            console.log(error);
        }
    }
    return {
        ...toRefs(state),
        fetchProjects,
        fetchProjectsByTag,
        fetchProjectBySlug
    }

}