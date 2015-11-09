/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
    // config.uiColor = '#AADC6E';
    config.allowedContent = true;
    config.entities = false;
    config.basicEntities = false;

    config.entities_greek = false;
    config.entities_latin = false;

    config.entities_additional = '';

    config.htmlEncodeOutput = false;
    config.protectedSource.push(/<tex[\s\S]*?\/tex>/g);

    var uploadUrl = config.filebrowserImageUploadUrl;
    config.filebrowserUploadUrl = uploadUrl + '?Type=File';
    config.filebrowserImageUploadUrl = uploadUrl + '?Type=Image';
    config.extraPlugins = 'simpleuploads';
    config.toolbar =
    [
        { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', '-', 'RemoveFormat'] },
        { name: 'clipboard', items: ['PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
        { name: 'links', items: ['Link', 'Unlink'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList'] },
        { name: 'insert', items: ['Image', 'Table', 'Iframe'] },
        { name: 'tools', items : [ 'Maximize', 'ShowBlocks' ] },
        { name: 'styles', items: ['Format'] },
        { name: 'document', items: ['Source', '-', 'Preview'] }
    ];
    config.extraPlugins = 'wordcount';
    config.wordcount = {

        // Whether or not you want to show the Word Count
        showWordCount: true,

        // Whether or not you want to show the Char Count
        showCharCount: false,

        // Whether or not to include Html chars in the Char Count
        countHTML: false
    };
};

