export interface Album {
    userId: number,
    id: number,
    title: string
}

export interface Photo {
    albumId: string,
    id: string,
    title: string,
    url: string,
    thumbnailUrl: string
}