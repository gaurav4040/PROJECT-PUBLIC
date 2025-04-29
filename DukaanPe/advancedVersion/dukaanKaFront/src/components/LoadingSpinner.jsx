import style from "./LoadingSpinner.module.css";

const LoadingSpinner=()=>{
    return (
        <center>
            <div className={`${style.spinner}`}>
                <div className={`spinner-grow ${style.dot}`} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className={`spinner-grow ${style.dot}`} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className={`spinner-grow ${style.dot}`} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>  
        </center>
    );
}

export default LoadingSpinner;