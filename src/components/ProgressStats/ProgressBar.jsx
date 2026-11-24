

const ProgressBar = ( { progress } ) => {
  return (
    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mt-8" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" aria-label="Funding progress">
      <div
        className="h-full bg-green-400 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar