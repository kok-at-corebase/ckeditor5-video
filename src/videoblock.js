import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget } from '@ckeditor/ckeditor5-widget';

import VideoBlockEditing from './video/videoblockediting';

import '../theme/video.css';

export default class VideoBlock extends Plugin {
    static get requires() {
        return [ VideoBlockEditing, Widget ];
    }

    static get pluginName() {
        return 'VideoBlock';
    }
}
