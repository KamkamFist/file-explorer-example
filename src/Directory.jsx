import './test.css'
import File from './File.jsx'

function Directory( {fileSystem}) {
    function display(x) {
        if (x.type === "folder") {
            return (
                <>
                    <p>{x.name}, {x.type}</p>
                    {x.children.map(
                        (y) => <Directory fileSystem={y}/>

                    )}
                </>
            )
        } else {
            return (
                <>
                    <File fileSystem={fileSystem}/>
                </>
            )
        }
    }


    return (
        <>
        <div className="Folder">
            <p>Name: {fileSystem.name}</p>
            {fileSystem.children?.map(
                (x) => 
                    display(x)
            )}
        </div>
        </>
    )
}

export default Directory