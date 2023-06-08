const Error = ({text = 'Something went wrong...'}: {text?: string}) => {
    return ( 
        <p className="text-red-600 text-center my-2">{text}</p>
    );
};
 
export default Error;