import './test.css'

function File( { name, type, fileSystem}) {
    return (
        <>
        <div className="file">
            <p className='filePhoto'></p>
            <p>{fileSystem.name}, {fileSystem.type} </p>
        </div>
        </>
    )
}

export default File