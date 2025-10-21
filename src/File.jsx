import './test.css'

function File( { name, type, fileSystem}) {
    return (
        <>
        <div className="file">
            <p>{fileSystem.name}, {fileSystem.type} </p>
        </div>
        </>
    )
}

export default File