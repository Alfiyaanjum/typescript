var Youtube = /** @class */ (function () {
    function Youtube(title, share, videoMode, videoFile, views, likes, dislikes, channel, publishDate, subscribers, autoplay, annotation, speed, subtitles, quality, mute, fullScreen, comments, description) {
        var _this = this;
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
        // getter settters of the instance variables
        this.getTitle = function () {
            return _this.title;
        };
        this.getshare = function () {
            return _this.share;
        };
        this.getvideoMode = function () {
            return _this.videoMode;
        };
        this.getvideoFile = function () {
            return _this.videoFile;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getChannel = function () {
            return _this.channel;
        };
        this.getPublishedDate = function () {
            return _this.publishDate;
        };
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        this.getAutoPlay = function () {
            return _this.autoplay;
        };
        this.getAnnotation = function () {
            return _this.annotation;
        };
        this.getSpeed = function () {
            return _this.speed;
        };
        this.getSubtitles = function () {
            return _this.subtitles;
        };
        this.getQuality = function () {
            return _this.quality;
        };
        this.getMute = function () {
            return _this.mute;
        };
        this.getFullScreen = function () {
            return _this.fullScreen;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getRelatedVideos = function () {
            return ' the related videos list';
        };
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
    return Youtube;
}());
var Yt = new Youtube("Motivatinal", 500, "HD", "Mp4", 59765, 1455, 5, "video channel", new Date("28/07/2018"), 51254, true, false, 1340, "english", "good", false, false, 7, "How to be self motivated?");
console.log("Title: " + Yt.getTitle());
console.log("Share: " + Yt.getshare());
console.log("VideoMode: " + Yt.getvideoMode());
console.log("Video: " + Yt.getvideoFile());
console.log("Likes:" + Yt.getLikes());
console.log("Dislikes:" + Yt.getDislikes());
console.log("Channel:" + Yt.getChannel());
console.log("Published Date:" + Yt.getPublishedDate());
console.log("Subscribers:" + Yt.getSubscribers());
console.log("Autoplay:" + Yt.getAutoPlay());
console.log("Annotations:" + Yt.getAnnotation());
console.log("Speed:" + Yt.getSpeed());
console.log("Subtitle:" + Yt.getSubtitles());
console.log("Quality:" + Yt.getQuality());
console.log("Mute:" + Yt.getMute());
console.log("Fullscreen:" + Yt.getFullScreen());
console.log("Description:" + Yt.getDescription());
console.log("Comments:" + (Yt.getComments()));
console.log("Related Videos:" + Yt.getRelatedVideos());
