import { IMaterialItems } from "../pages/HomePage/components/Materials/Materials.types"

export const MaterialItems: IMaterialItems = [
    {
        title: 'Frame Material',
        options: [
            { label: 'Wood', value: 'wood' },
            { label: 'Aluminum', value: 'aluminum' },
            { label: 'Vinyl', value: 'vinyl' },
            { label: 'Fiberglass', value: 'fiberglass' }
        ]

    },
    {
        title: 'Glass Type',
        options: [
            { label: 'Clear', value: 'clear' },
            { label: 'Frosted', value: 'frosted' },
            { label: 'Tinted', value: 'tinted' },
            { label: 'Low-E', value: 'low-e' }
        ]

    },
    {
        title: 'Frame Color',
        options: [
            { label: 'White', value: 'white' },
            { label: 'Black', value: 'black' },
            { label: 'Bronze', value: 'bronze' },
            { label: 'Silver', value: 'silver' }
        ]

    },

]