interface Tag {
    name: string,
    taggings_count: number
}

const state = reactive({
    tags: [] as Tag[]
})

export function useTagData() {
    const storyblokApi = useStoryblokApi()

    async function fetchTagData() {
        let params = {
            version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
            starts_with: 'portfolio',
        }
        const { data } = await storyblokApi.get('cdn/tags', params as Object)

        // state.tags = data.tags
        state.tags = data.tags.map((tag: any) => ({
            ...tag,
        }))
    }

    return {
        ...toRefs(state),
        fetchTagData
    }
}