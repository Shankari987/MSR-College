// import Link from 'next/link';
// import React from 'react';
// import { ResponsiveMasonry, Masonry } from 'react-responsive-masonry';
// import { facilities_data } from '../../../data';

// const FacilitiesArea = () => {
//   return (
//         <section className="section-gap-equal">
//             <div className="container" style={{maxWidth:'80%'}}>
//                 <div className="g-5" id="masonry-gallery" >
//                     <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 550: 2, 792: 3 , 999:4}}>
//                         <Masonry gutter="30px">
//                             {facilities_data?.map((blog, index) => {
//                                 return (
//                                     <div key={index}>
//                                         <div className="edu-blog blog-style-5" style={{boxShadow: '0px 0px 20px 0px #b6c4ae', borderRadius:20}}>
//                                             <div className="inner">
//                                                 <div className="thumbnail">
//                                                     <Link href={`/facility-details/${blog.id}`}>
//                                                         <a>
//                                                             <img src={blog.img} alt="Blog Images" />
//                                                         </a>
//                                                     </Link>
//                                                 </div>

//                                                 <div className="content position-top" style={{padding:'10px',backgroundColor:'#194e84',color:'white'}}>
//                                                     <div className="read-more-btn">
//                                                         <Link href={`/facility-details/${blog.id}`}>
//                                                             <a className="btn-icon-round"  style={{backgroundColor:'#194e84'}}><i className="icon-4"></i></a>
//                                                         </Link>
//                                                     </div>
                                                  
//                                                     <h6 className="title">
//                                                         <Link href={`/facility-details/${blog.id}`}>
//                                                         <a style={{fontSize:'0.8em'}}>{blog.title}</a>
//                                                         </Link>
//                                                     </h6>
                                                   
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                         </Masonry>
//                     </ResponsiveMasonry>
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default FacilitiesArea;


import Link from 'next/link';
import React from 'react';
import Masonry from 'react-masonry-css';
import { facilities_data } from '../../../data';

const FacilitiesArea = () => {
  // Define responsive breakpoints for columns
  const breakpointColumnsObj = {
    default: 4,
    999: 3,
    792: 2,
    550: 1
  };

  return (
    <section className="section-gap-equal">
      <div className="container" style={{ maxWidth: '80%' }}>
        <div className="g-5" id="masonry-gallery">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            style={{ display: 'flex', gap: '30px' }}
          >
            {facilities_data?.map((blog, index) => (
              <div key={index} style={{ marginBottom: '30px' }}>
                <div 
                  className="edu-blog blog-style-5" 
                  style={{
                    boxShadow: '0px 0px 20px 0px #b6c4ae',
                    borderRadius: 20
                  }}
                >
                  <div className="inner">
                    <div className="thumbnail">
                      <Link href={`/facility-details/${blog.id}`} legacyBehavior>
                        <a>
                          <img src={blog.img} alt="Blog Images" />
                        </a>
                      </Link>
                    </div>

                    <div 
                      className="content position-top" 
                      style={{
                        padding: '10px',
                        backgroundColor: '#194e84',
                        color: 'white'
                      }}
                    >
                      <div className="read-more-btn">
                        <Link href={`/facility-details/${blog.id}`} legacyBehavior>
                          <a 
                            className="btn-icon-round"  
                            style={{ backgroundColor: '#194e84' }}
                          >
                            <i className="icon-4"></i>
                          </a>
                        </Link>
                      </div>
                      
                      <h6 className="title">
                        <Link href={`/facility-details/${blog.id}`} legacyBehavior>
                          <a style={{ fontSize: '0.8em' }}>{blog.title}</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesArea;