import React from 'react';
import fileinput from 'bootstrap-fileinput';
import $ from 'jquery';

export default class UploadFile extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

    $("#upload").fileinput({
        overwriteInitial: true,
        showUpload: false, 
        showRemove: false,
        removeIcon: false,
        showUpload: false,
        showClose: false,
        browseLabel: 'Select a File',
        previewFileType: 'image',
        allowedPreviewTypes: ['image'],
        fileActionSettings : {
          showUpload: false,
          showZoom: false,
          uploadIcon: ''
        },
        layoutTemplates: {
          actions: ''
        }
      }).on('fileloaded', (event, file, previewId, index, reader) => {
        if(file.type.match(/image*/)) {
          this.getImageSize(reader.result, previewId);
        }           
      });
  }

  getImageSize(src, previewId) {
    let image = new Image();
    image.src = src; 
    image.onload = function() {
      $('#' + previewId)
          .find('.file-footer-caption')
          .append('<br/><spam>' + image.width + ' x ' + image.height + ' px</spam>');
    } 
  }

  render() {
    return (
      <div className="upload-file">
        <input id="upload" type="file" />
      </div>
    );
  }
}
