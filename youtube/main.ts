
class Youtube{
    constructor(private title:string,private share:number,private videoMode:string,private videoFile:string, private views:number,private likes:number, private dislikes: number, private channel:string,private publishDate:Date,private subscribers:number, private autoplay:boolean, private annotation:boolean, private speed: number, private subtitles:string, private quality:string, private mute:boolean, private fullScreen:boolean, private comments:number, private description:string){
        this.title = title;
        this.share = share;
        this.videoMode = videoMode;
        this.videoFile = videoFile;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.channel = channel;
        this.publishDate = publishDate;
        this.subscribers = subscribers;
        this.autoplay = autoplay;
        this.annotation = annotation;
        this.speed = speed;
        this.subtitles = subtitles;
        this.quality = quality;
        this.mute = mute;
        this.fullScreen = fullScreen;
        this.comments = comments;
        this.description = description;
    }
    // getter settters of the instance variables
    getTitle = ()=>{
        return this.title;
    }
    getshare = ()=>{
        return this.share;
    }
    getvideoMode = ()=>{
        return this.videoMode;
    }
    getvideoFile = ()=>{
        return this.videoFile;
    }
    getViews = ()=>{
        return this.views;
    }
    getLikes = ()=>{
        return this.likes;
    }
    getDislikes = ()=>{
        return this.dislikes;
    }
    getChannel = ()=>{
        return this.channel;
    }
    getPublishedDate = ()=>{
        return this.publishDate;
    }
    getSubscribers = ()=>{
        return this.subscribers;
    }
    getAutoPlay = ()=>{
        return this.autoplay;
    }
    getAnnotation = ()=>{
        return this.annotation;
    }
    getSpeed = ()=>{
        return this.speed;
    }
    getSubtitles = ()=>{
        return this.subtitles;
    }
    getQuality = ()=>{
        return this.quality;
    }
    getMute = ()=>{
        return this.mute;
    }
    getFullScreen = ()=>{
        return this.fullScreen;
    }
    getComments = ()=>{
        return this.comments;
    }
    getDescription = ()=>{
        return this.description;
    }
    getRelatedVideos = () =>{
        return ' the related videos list'
    }
}

let Yt = new Youtube("Motivatinal",500,"HD","Mp4",59765,1455,5,"video channel",new Date("28/07/2018"),51254,true,false,1340,"english","good",false,false,7,"How to be self motivated?")

console.log(`Title: ${Yt.getTitle()}`)
console.log(`Share: ${Yt.getshare()}`)
console.log(`VideoMode: ${Yt.getvideoMode()}`)
console.log(`Video: ${Yt.getvideoFile()}`)
console.log(`Likes:${Yt.getLikes()}`)
console.log(`Dislikes:${Yt.getDislikes()}`)
console.log(`Channel:${Yt.getChannel()}`)
console.log(`Published Date:${Yt.getPublishedDate()}`)
console.log(`Subscribers:${Yt.getSubscribers()}`)
console.log(`Autoplay:${Yt.getAutoPlay()}`)
console.log(`Annotations:${Yt.getAnnotation()}`)
console.log(`Speed:${Yt.getSpeed()}`)
console.log(`Subtitle:${Yt.getSubtitles()}`)
console.log(`Quality:${Yt.getQuality()}`)
console.log(`Mute:${Yt.getMute()}`)
console.log(`Fullscreen:${Yt.getFullScreen()}`)
console.log(`Description:${Yt.getDescription()}`)
console.log(`Comments:${(Yt.getComments())}`)
console.log(`Related Videos:${Yt.getRelatedVideos()}`)
