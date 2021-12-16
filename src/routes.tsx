interface Routes {
    [key: string]:{
        [key: string]:string 
    }
  }

export const routes:Routes = {
    withSidebar:{
        home:'/',
        explore:'/explore',
        channelDetails:'/channel-details/:id'
    },
    withSidebarFixed:{
        details:'/details/:id',
        playlistDetails:'/playlist-details/:id'
    }
}

