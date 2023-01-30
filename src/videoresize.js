import { Plugin } from '@ckeditor/ckeditor5-core';
import VideoResizeEditing from "./videoresize/videoresizeediting";
import VideoResizeHandles from "./videoresize/videoresizehandles";
import VideoResizeButtons from "./videoresize/videoresizebuttons";
import '../theme/videoresize.css';

export default class VideoResize extends Plugin {
    static get requires() {
        return [ VideoResizeEditing, VideoResizeHandles, VideoResizeButtons ];
    }

    static get pluginName() {
        return 'VideoResize';
    }
}
