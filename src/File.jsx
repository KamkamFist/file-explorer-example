import './test.css'

function File( { fileSystem }) {
    return (
        <>
        <div className="file">
            <p>{fileSystem.name}, {fileSystem.type}</p>
        </div>
        </>
    )
}

export default File