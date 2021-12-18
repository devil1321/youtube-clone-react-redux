interface LinksParams {
    [key: string]:string 
}
export class Links {
    constructor(public id?:string){
        this.id = id
    }
    withSidebar:LinksParams = {
        home:'/',
        explore:'/explore',
        channelDetails:`/channel-details/${this.id}`,
        trending:'/trending',
        subscriptions:'/subscriptions',
        history:'/history',
        library:'/library',
        browseChannels:'/browse-channels',
        reportHistory:'/report-history'
    }
    withSidebarFixed:LinksParams = {
        details:`/details/${this.id}`,
        playlistDetails:`/playlist-details/${this.id}`,
        ytPremium:'/youtube-premium'
    }
}
