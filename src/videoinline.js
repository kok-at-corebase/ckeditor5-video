import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget } from '@ckeditor/ckeditor5-widget';

import VideoInlineEditing from './video/videoinlineediting';

import '../theme/video.css';

export default class VideoInline extends Plugin {
    static get requires() {
        return [ VideoInlineEditing, Widget ];
    }

    static get pluginName() {
        return 'VideoInline';
    }
}
