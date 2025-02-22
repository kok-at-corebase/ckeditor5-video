import { Plugin } from '@ckeditor/ckeditor5-core';
import VideoStyleEditing from './videostyle/videostyleediting';
import VideoStyleUI from './videostyle/videostyleui';

export default class VideoStyle extends Plugin {
    static get requires() {
        return [ VideoStyleEditing, VideoStyleUI ];
    }

    static get pluginName() {
        return 'VideoStyle';
    }
}
