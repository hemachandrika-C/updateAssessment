import React, {useState} from 'react';


function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
	const [IsSelected, setIsSelected] = useState(false);
  const [files,setFiles] = useState("");

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

    const handleSubmission = (e) => {

      
	let data = new FormData();
    let imagedata = document.querySelector('input[type="file"]').files[0];
    data.append("file", imagedata);
    data.append("remark", "logo");




    fetch("http://127.0.0.1:8000/file/upload", {
      mode: 'no-cors',
      method: "POST",
      body: data
    }).then(function (res) {
      if (res.ok) {
        alert("Perfect! ");
      } else if (res.status == 401) {
        alert("Oops! ");
      }
    }, function (e) {
      alert("Error submitting form!");
    });
	};

  return (
    <div className="Demo">
    <div>
                 <input type="file" name="file" onChange={changeHandler} />
                 <div>
                     <button onClick={handleSubmission}>Submit</button>
                 </div>
               
             </div>
    </div>
  );
}

export default FileUploadPage;
