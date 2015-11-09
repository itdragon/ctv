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
    config.toolbar =
    [
        { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline'] },
        { name: 'links', items: ['Link', 'Unlink'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
        { name: 'styles', items: ['Font', 'FontSize'] },
        { name: 'colors', items: ['TextColor', 'BGColor'] },
        { name: 'document', items: ['Source', '-', 'Preview'] }
    ];
};

