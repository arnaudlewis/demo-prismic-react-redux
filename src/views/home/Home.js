import React, {PropTypes} from 'react';

fetchHomeData
const Home = ({ homeData, fetchHomeData }) => {
  console.log(fetchHomeData)
  return (
     <div className="view--home">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="column-text">
                        {homeData.data['home.description'].value.map((item, index) => {
                            return (
                                <p key={index}>{item.text}</p>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 ">

                </div>
            </div>
        </div>
    </div>
  )
}

Home.propTypes = {
  homeData: PropTypes.object.isRequired,
}

export default Home
