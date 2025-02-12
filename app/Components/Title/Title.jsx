
const Title = ({SubHeading, Heading}) => {
    return (
        <div>
             <div className="text-center">
        <p className='text-xl font-bold text-orange-400'>────────── {SubHeading} ──────────</p>
        <h1 className='text-4xl md:text-5xl uppercase font-bold my-4'>{Heading}</h1>
        <p className='text-xl font-bold text-orange-400'>/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /</p>
       
      </div>
        </div>
    );
};

export default Title;