import './test.css'
import File from './File.jsx'

function Directory( {fileSystem}) {
    function display(x) {
        if (x.type === "folder") {
            return (
                <>
              
                    <Directory fileSystem={x}/>

                </>
            )
        } else {
            return (
                <>
                    <File key={x.name} fileSystem={x}/>
                </>
            )
        }
    }


    return (
        <>
        
        <div className="Folder">
            <div className='folderContent'>
                        <p className='folderPhoto'></p>
                        
                        <p>{fileSystem.name}, {fileSystem.type}</p>
                        </div>
            {fileSystem.children?.map(
                (x) => 
                    display(x)
            )}
            
        </div>
        </>
    )
}

export default Directory
//fsd