import React from 'react';

const Home = () => {
    return (
        <div className="dashboard-container">
            <div className='text-container'>
                <h2 className='welcome-message'>Welcome to Dr. V. S. Krishna Govt. Degree College!</h2>
                <p className='description'>Dr. V. S. Krishna Government Degree College, (then non-Autonomous) established in 1968, was inaugurated by his excellency Sri. Khandubhai K. Desai, Governor of Andhra Pradesh on 12th December 1968. The College was shifted in 1969 from the University Campus to Visakha valley school area which is 3 KMs away from the present premises. Owing to keen interest showed by District Collectors Sri C. Arjuna Rao IAS, and Sri K. V. Rao, IAS who helped in acquiring land, the college was shifted totally to its permanent premises in Maddilapalem in 1980-81.</p>
            </div>
            <img src='https://res.cloudinary.com/dfxytykhs/image/upload/v1756188087/Rectangle_2_lafgdp.png' alt='student-image' className='student-image' />
        </div>
    );
};

export default Home;