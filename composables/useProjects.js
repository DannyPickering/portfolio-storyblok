import { ref } from 'vue'

const state = reactive({
    projects: []
})

export function useProjects() {
    const storyblokApi = useStoryblokApi()

    async function fetchProjects(per_page) {
        let params = {
            version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
            starts_with: 'portfolio/',
            is_startpage: false,
            per_page: per_page
        }

        const { data } = await storyblokApi.get('cdn/stories/', params)

        state.projects = data.stories.map(project => ({
            ...project,
        }))
    }

    async function fetchProjectsByTag(tag) {
        try {
            const { data } = await storyblokApi.get('cdn/stories', {
                version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
                starts_with: 'portfolio',
                is_startpage: false,
                with_tag: tag
            })

            state.projects = data.stories.map(project => ({
                ...project
            }))
        } catch (error) {
            console.log(error)
        }
    }

    return {
        ...toRefs(state),
        fetchProjects,
        fetchProjectsByTag
    }

}