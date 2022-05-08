import React from 'react';

const UsersInfo = () => {

    return (
        <div>
            <h1 className='container text-center m-4 text-success'>User Information</h1>
        <div className='container d-flex flex-wrap'>
            <div className="card m-3 p-2" style={{width: "20rem"}}>
                <h2>Name: Kartik</h2>
                <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&uid=R67498601&ga=GA1.2.77004565.1641239679" alt="" />
                <p>Designation : Manager</p>
                <p>Contact no:01732901688</p>
            </div>
            <div className="card m-3 p-2" style={{width: "20rem"}}>
                <h2 >Name: Ariyan</h2>
                <img src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?size=626&ext=jpg&uid=R67498601&ga=GA1.2.77004565.1641239679" alt="" />
                <p>Designation : Assistant Manager</p>
                <p>contact no: 01732901658</p>
            </div>
            <div className="card m-3 p-2" style={{width: "20rem"}}>
                <h2>Name: Arjun</h2>
                <img src="https://img.freepik.com/free-photo/young-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-65212.jpg?size=626&ext=jpg&uid=R67498601&ga=GA1.2.77004565.1641239679" alt="" />
                <p>Designation : HR Manager</p>
                <p>Contact no : 01742901688" </p>
            </div>
            </div>
        </div>
    );
};

export default UsersInfo;