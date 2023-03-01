import React from 'react'
import idleSrc from '../../../images/flat.jpg'
import pendingSrc from '../../../images/flat.jpg'
import uploadedSrc from '../../../images/flat.jpg'
import errorSrc from '../../../images/flat.jpg'
import './styles.css'

const FileUploaderScreen = ({ status, files }) => {
  let src
  switch (status) {
    case 'IDLE':
      src = idleSrc
      break
    case 'LOADED':
    case 'PENDING':
      src = pendingSrc
      break
    case 'FILES_UPLOADED':
      src = uploadedSrc
      break
    case 'UPLOAD_ERROR':
      src = errorSrc
      break
    default:
      src = idleSrc
      break
  }

  return (
    <div className="uploader-input">
         {files.map(({ file, src, id }, index) => (
          <div
          style={{ backgroundImage: `url("${src}")` }}
          className="uploader-overlay"
        />
        ))}
      
      
    </div>
  )
}

export default FileUploaderScreen