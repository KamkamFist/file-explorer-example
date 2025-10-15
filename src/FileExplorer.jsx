import File from './File.jsx'
import Folder from './Directory.jsx'

function FileExplorer({ fileSystem }) {
    
    return (
        <>
            {/* <File fileSystem={fileSystem} /> */}
            <Folder fileSystem={fileSystem} />
            
        </>
    )
}

export default FileExplorer