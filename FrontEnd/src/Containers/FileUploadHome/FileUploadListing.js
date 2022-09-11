import ReactDOM from "react-dom";
import React, { Component  ,createContext} from "react";
import Files from "react-files";

import ListingFiles from "./fileItemListing";



class UploadApp extends Component {
  constructor() {
    super();
    this.state = {
      jsonFile: {}
    };

    this.fileReader = new FileReader();
    this.fileReader.onload = event => {
      this.setState({ jsonFile: JSON.parse(event.target.result) }, () => {
        console.log(this.state.jsonFile);
      });
    };
  }

  render() {
    return (
      <div className="files">
        <Files
         
          onChange={file => {
            this.fileReader.readAsText(file[0]);
          }}
          onError={err => console.log(err)}
          accepts={[".json"]}
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Drop files here or click to upload
        </Files>
        <ListingFiles data={this.state.jsonFile} />

        {/* <ListingFiles data={this.state.jsonFile} /> */}
      </div>
    );
  }
}

export default UploadApp